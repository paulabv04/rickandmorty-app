import CharacterList from "../components/CharacterList";

export default function CharactersPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600">Characters</h2>
      <CharacterList />
    </div>
  );
}
