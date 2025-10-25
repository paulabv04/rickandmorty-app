import { useEffect, useState } from "react";
import RickAndMortyService from "../services/RickAndMortyService";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const data = await RickAndMortyService.getAllLocations();
    setLocations(data);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Locations</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <li
            key={loc.id}
            className="bg-white p-4 shadow rounded hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700">{loc.name}</h3>
            <p className="text-gray-600">Type: {loc.type}</p>
            <p className="text-gray-600">Dimension: {loc.dimension}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
