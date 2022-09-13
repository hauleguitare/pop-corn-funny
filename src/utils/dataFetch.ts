import { fetchMovies } from "@/api/fetchMovies"
import WrapPromise from "./wrapPromise";


const dataFetch = function<T>(type: string, endpoint: string){
    const dataPromise = fetchMovies<T>(type, endpoint);
    // console.log(dataPromise);
    return {
        data: WrapPromise(dataPromise),
    };
};

const dataFetch1 = function<T>(type: string, endpoint: string){
    return{
        
    }
}

export default dataFetch;