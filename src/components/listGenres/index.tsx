import { IGenres } from '@/@types/global/SectionType';
import { fetchGenres } from '@/api/fetchGenres';
import { fetchMovies } from '@/api/fetchMovies';
import { GenresContext } from '@/App';
import React, { useContext, useEffect, useState } from 'react';

interface IListGenresProps extends React.HTMLAttributes<HTMLSpanElement> {
    genres_ids: number[];
}

const ListGenres: React.FunctionComponent<IListGenresProps> = (props) => {
    const { genres_ids, className, ...rest } = props;
    const [genres, setGenres] = useState<IGenres[]>([]);
    const context = useContext(GenresContext);

    useEffect(() => {
        const findGenresFromId = (genre_ids: number[]) => {
            const GenreFilter = context.filter((val) => {
                return genre_ids.includes(Number(val.id));
            });

            return GenreFilter;
        };
        setGenres(findGenresFromId(genres_ids));
    }, [genres_ids]);
    return (
        <ul className="flex flex-wrap">
            {genres.map((item) => {
                return (
                    <li
                        {...rest}
                        key={item.id}
                        className={`rounded-full
                        hover:opacity-100 transition-opacity duration-150 opacity-80
                        ring-1 ring-black px-1 up-mobile:px-2 py-1 up-mobile:py-2 ${className}
                        text-white cursor-pointer`}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default ListGenres;
