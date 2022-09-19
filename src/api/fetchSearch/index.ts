import { IParams } from '@/@types/global/SEARCH_QUERY';
import { ListResponse } from '@/@types/movies';
import { ISearchResult } from '@/@types/movies/search.interface';
import axiosClient from '../config';


export async function fetchSearch(type: string, query: IParams){
    let _url = `/search/${type}`;
    var params = {
        api_key : process.env.REACT_APP_API_KEY,
        ...query
    }
    return axiosClient.get<ListResponse<ISearchResult>>(_url, {params}).then((res) => res.data);
}

