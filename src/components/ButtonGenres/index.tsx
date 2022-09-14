import { IGenres } from '@/@types/global/ButtonProps';
import { fetchGenres } from '@/api/fetchGenres';
import { fetchMovies } from '@/api/fetchMovies';
import { GenresContext } from '@/App';
import React, { useContext, useEffect, useState } from 'react';

interface IButtonGenresProps {
    genres_ids: number[];
    type: string | number;
}

const ButtonGenres: React.FunctionComponent<IButtonGenresProps> = (props) => {
    const { genres_ids, type } = props;
    const [genres, setGenres] = useState<IGenres[]>([]);
    const context = useContext(GenresContext);
    useEffect(() => {
        const findGenresFromId = (genre_ids: number[]) => {
            const GenreFilter: IGenres[] = [];
            context[type].map((item) => {
                genre_ids.map((genre) => {
                    if (genre === item.id) {
                        GenreFilter.push(item);
                    }
                });
            });
            return GenreFilter;
        };
        const genres = findGenresFromId(genres_ids);
        setGenres(genres);
    }, [genres_ids]);
    return (
        <div className="flex">
            {genres.map((item) => {
                return (
                    <span
                        key={item.id}
                        className="rounded-full text-base up-mobile:text-xl mx-2 px-2 py-2 hover:opacity-100 transition-opacity duration-150 opacity-80 bg-blue-primary ring-1 ring-black text-white cursor-pointer"
                    >
                        {item.name}
                    </span>
                );
            })}
        </div>
    );
};

export default ButtonGenres;
