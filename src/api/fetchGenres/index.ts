import { IGenres } from '@/@types/global/ButtonProps';
import { ListResponse } from '@/@types/movies';
import axiosClient from '../config';

interface ListGenres {
    genres: IGenres[]
}

export async function fetchGenres(type: string){
    let _url = `/genre/${type}/list`;
    var params = {
        api_key : process.env.REACT_APP_API_KEY
    }
    return axiosClient.get<ListGenres>(_url, {params}).then((res) => res.data);
}