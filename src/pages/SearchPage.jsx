import { useState } from "react";
import RickAndMortyService from "../services/RickAndMortyService";

export default function SearchPage(){
    const [id, setId] = useState("");
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if(!id) return;
            setLoading(true);
            setError(null);
            setCharacter(null);
            try {
                const data = await RickAndMortyService.getCharacterById(id);
                // sjekk at objektet faktisk har et navn før vi viser det
                if (data && data.name) {
                  setCharacter(data);
                } else {
                  setError("Character not found.");
                }
              } catch (err) {
                setError("Something went wrong while fetching data.");
              } finally {
                setLoading(false);
              }
            };
    return (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Search Character by ID</h2>
          <div className="mb-6">
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID..."
            className="border p-2 rounded"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
          </div>

          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500 font-semibold">{error}</p>}

         {character && (
        <div className="bg-white shadow-md rounded p-4 inline-block">
          <h3 className="text-xl font-bold mb-2">{character.name}</h3>
          <img
            src={character.image}
            alt={character.name}
            className="mx-auto mb-4 rounded-lg w-48 h-48 object-cover"
          />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      )}
    </div>
  );
}