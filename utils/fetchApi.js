import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4e2012ef64msh944e94a7b071adfp1a6cccjsn13100f23a3db',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    })
    return data;
}