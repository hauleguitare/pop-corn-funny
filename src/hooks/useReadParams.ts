import { SEARCH_QUERY } from "@/asserts/contants/contants";
import { useSearchParams } from "react-router-dom";


const useReadParams = () =>{
    const [searchParams] = useSearchParams();
    const readParams = JSON.parse(JSON.stringify(SEARCH_QUERY)) as {[key: string]: string[]};

    searchParams.forEach((value, key) =>{
        readParams[key].push(value);
    });

    return [readParams] as const;
};

export default useReadParams;