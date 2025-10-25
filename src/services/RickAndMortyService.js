import axios from 'axios';
const API_BASE = "https://rickandmortyapi.com/api";

const endpoints = {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations" : "https://rickandmortyapi.com/api/location",
    "episodes" : "https://rickandmortyapi.com/api/episode"
    }
  
    /*
            async og await er en teknikk som man må innføre når man skal ha resultater fra et API.
            async markerer funksjonen som asynkron (engelsk: asynchronous).
            await nedenfor gjør at JavaScript venter med å legge resultat inn i response-variabelen til når axios HTTP request er ferdig.
            axios HTTP requesten må bokstavelig talt "fly" over internett til en server et annet sted i verden, få resultat, og "fly" hele veien tilbake.
    */

const getAllCharacters = async () => {
    try{
        const response = await axios.get(endpoints.characters);
        return response.data.results;
    }catch (error){
        // Handle axios errors specifically 
        if(axios.isAxiosError(error)){
            console.error('Axios error:' , error.response);
            return{ error: 'Failed to fetch data', details: error.response};
        }else {
            //Handle unexpected errors 
            console.error('Unexpected error:', error);
            return{error: 'An unexpected error occured'};
        }
    }
    };

const getAllLocations = async() => {
    try {
        const res = await axios.get(`${API_BASE}/location`);
        return res.data.results;
    }catch(error){
        console.error("Failed to fetch locations:", error);
        return [];
    }
};

const getCharacterById = async (id) => {
    try {
        const res = await axios.get(`${API_BASE}/character/${id}`);
        return res.data;
    }catch(error){
        console.error("Failed to fetch character:", error);
        return null;
    }
};

export default { getAllCharacters, getAllLocations, getCharacterById };