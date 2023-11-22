import axios from 'axios';


// export const fetcher = ([url, token]: [string, string]) => {
export const fetcher = ([url]: [string]) => {

    return  axios.get(`https://localhost:3001${url}`, {
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
    }).then(res => res.data);
};
