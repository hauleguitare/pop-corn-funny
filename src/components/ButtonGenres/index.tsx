import { IGenres } from '@/@types/global/ButtonProps';
import { fetchMovies } from '@/api/fetchMovies';
import React, { useContext, useEffect, useState } from 'react';

interface IButtonGenresProps {
    genres_ids: number[];
    type: string;
}

const ButtonGenres: React.FunctionComponent<IButtonGenresProps> = (props) => {
    const { genres_ids, type } = props;
    const [genres, setGenres] = useState<IGenres>();

    return <></>;
};

export default ButtonGenres;
