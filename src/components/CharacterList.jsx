import { useEffect, useState } from "react";
import RickAndMortyService from "../services/RickAndMortyService";
import CharacterItemToggleLiving from "./CharacterItemToggleLiving";

const CharacterList = () => {
    const[characters, setCharacters] = useState([]);


    useEffect(() => {
        getCharactersFromService();
    }, [])

    const getCharactersFromService = async() =>{
        const allCharacters = await RickAndMortyService.getAllCharacters();
        const characterWithId = allCharacters.map((character, index) =>
            { 
                return {
                ...character,
                id:index + 1
                }
            }
        )
        setCharacters(characterWithId);
    }
    const onUpdate = (id, updatedCharacter) => {
        const updatedCharacters = characters.map(character =>
        character.id === id 
        ? Object.assign({}, character, updatedCharacter)
        : character
    ); 
    setCharacters(updatedCharacters)
}
const getCharacters = () =>{
    return characters.map((character, i)=>(
            <CharacterItemToggleLiving
                    key={character.id}
                    character ={character}
                    onUpdate ={onUpdate}
                />
    ))
}
return(
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCharacters()}
    </section>
)
}

export default CharacterList;
 