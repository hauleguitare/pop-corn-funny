import { IGenres } from '@/@types/global/SectionType';
import { fetchGenres } from '@/api/fetchGenres';
import React, { createContext, useEffect, useState } from 'react';

const GenresRequest = () => {
    const movie = fetchGenres('movie');
    const tv = fetchGenres('tv');
    var dataContext: { [key: string]: IGenres[] } = {};
    const data = Promise.all([movie, tv])
        .then((res) => {
            var tempArr: IGenres[] = [];
            tempArr.push(...res[0].genres);
            tempArr.push(...res[1].genres);
            const filterArr = tempArr.filter((val, idx, arr) => {
                return arr.findIndex((v) => v.id === val.id && v.name === val.name) === idx;
            });
            const contextGenres: { [key: string]: IGenres[] } = {
                movie: res[0].genres,
                tv: res[1].genres,
                both: filterArr,
            };
            dataContext = {
                ...contextGenres,
            };
        })
        .catch((err) => {
            console.log('error: ', err);
        });
    return dataContext;
};

interface IGenreProviderProps {
    children?: React.ReactNode;
}

interface IGenresContext {
    [key: string]: IGenres[];
}
export const GenreContext = createContext<IGenresContext>({});
const GenreProvider: React.FunctionComponent<IGenreProviderProps> = (props) => {
    const { children } = props;
    const [genres, setGenres] = useState<IGenresContext>({});

    useEffect(() => {
        const getGenres = async () => {
            const movie = await fetchGenres('movie');
            const tv = await fetchGenres('tv');
            const all = [...movie.genres, ...tv.genres].filter((val, idx, arr) => {
                return arr.findIndex((v) => v.id === val.id && v.name === val.name) === idx;
            });
            const newState = {
                ...genres,
                movie: movie.genres,
                tv: tv.genres,
                all: all,
            };
            setGenres(newState);
        };
        getGenres();
    }, []);
    return <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>;
};

export default GenreProvider;
