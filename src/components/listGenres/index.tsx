import { IGenres } from '@/@types/global/SectionType';
import React, { useContext, useEffect, useState } from 'react';

interface IListGenresProps extends React.HTMLAttributes<HTMLSpanElement> {
    listGenres?: IGenres[];
    genres_ids: number[];
}

const findGenresFromId = (listGenres: IGenres[], genre_ids: number[]) => {
    const ArrFilter = listGenres.filter((val) => {
        return genre_ids.includes(Number(val.id));
    });
    return ArrFilter;
};

const ListGenres: React.FunctionComponent<IListGenresProps> = (props) => {
    const { genres_ids, listGenres, className, ...rest } = props;
    const [genres, setGenres] = useState<IGenres[]>([]);

    useEffect(() => {
        if (listGenres) {
            setGenres(findGenresFromId(listGenres, genres_ids));
        }
    }, [genres_ids, listGenres]);
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
