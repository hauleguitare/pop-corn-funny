import { IParams } from '@/@types/global/SEARCH_QUERY';
import { ListResponse } from '@/@types/movies';
import axiosClient from '../config';


export async function fetchMovies<T>(type: string, endpoint: string){
    let _url = `/${type}/${endpoint}`;
    var params = {
        api_key : process.env.REACT_APP_API_KEY
    }
    return axiosClient.get<ListResponse<T>>(_url, {params}).then((res) => res.data);
}

export async function fetchDiscover<T>(page: number, type: string, query: IParams = {}){
    let _url = `/discover/${type}`;
    var params ={
        api_key: process.env.REACT_APP_API_KEY,
        page: page,
        ...query
    }
    const res = axiosClient.get<ListResponse<T>>(_url, {params}).then((res) => res.data);
    return res;
}