import axios from "axios"
import useSWR from "swr";

export const useGetdata = (endpoint: string) => {

    const apiURL = import.meta.env.VITE_API_URL;

    const fetch = async (url: string) => {
        const {data} = await axios.get(url);
        console.log("Outro", data);
        return data;
    }

    const {data, error} = useSWR(`${apiURL}/${endpoint}`, fetch);

    return {data, error}

}