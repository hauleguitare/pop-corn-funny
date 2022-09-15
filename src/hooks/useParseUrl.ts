import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useParseUrl = (id?: number | string, title?: string) =>{
    const [parseUrl, setParseUrl] = useState<string | undefined>();
    useEffect(() =>{
        const stringReplace = title?.replace(/[^\w\s]/gi, '');
        const newArr = stringReplace?.toLocaleLowerCase().split(' ');
        newArr?.push(`${id?.toString()}`);
        setParseUrl(newArr?.join('-'));
    }, [id, title])

    return [parseUrl] as const;
}

export default useParseUrl;