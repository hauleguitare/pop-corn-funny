import { useEffect, useState } from "react";
import { useParams } from "react-router";


interface IgetUseParams {
    genre?: string,
    genreId?: string
}

export const useCheckURLBeforeFetch = (
data:(() => Array<any>) | Array<any>, 
condition:(url: IgetUseParams ,item: any) =>boolean) =>{
    const [isChecked, setChecked] = useState<boolean>(false);
    const _data = data;
    const {genre, genreId} = useParams();
    useEffect(() =>{
        if (_data instanceof Array)
        {
            _data.map((item) =>{
                const isFound = condition({genre, genreId}, item);
                if (isFound)
                {
                    setChecked(isFound);
                }else{
                    setChecked(isFound);
                }
            })
        }
    },[data, condition, isChecked]);
    return isChecked;
};