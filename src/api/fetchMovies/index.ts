import { ListResponse } from '@/@types/movies';
import { IParams } from '@/pages/Discover';
import axiosClient from '../config';


export async function fetchMovies<T>(type: string, endpoint: string){
    let _url = `/${type}/${endpoint}`;
    var params = {
        api_key : process.env.REACT_APP_API_KEY
    }
    return axiosClient.get<ListResponse<T>>(_url, {params}).then((res) => res.data);
}

export async function fetchDiscover<T>(page: number, type: string, paramsOption: IParams = {}){
    let _url = `/discover/${type}`;
    var params ={
        api_key: process.env.REACT_APP_API_KEY,
        page: page,
        ...paramsOption
    }
    const res = axiosClient.get<ListResponse<T>>(_url, {params}).then((res) => res.data);
    return res;
}