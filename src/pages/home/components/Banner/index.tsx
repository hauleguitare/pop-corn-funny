import { IMovie, ListResponse } from '@/@types/movies';
import { fetchMovies } from '@/api/fetchMovies';
import dataFetch from '@/utils/dataFetch';
import { useQuery } from '@tanstack/react-query';
import React, { Suspense, useEffect, useState } from 'react';
import BannerTypeSection from './Genres';
import BannerLoading from './Loading';
import BannerSlider from './Slider';

interface ISectionBannerProps {}

const initialBannerGenres = {
    windows_time: 'day',
    activeId: {
        id: 'all',
        name: 'all',
    },
};

const initialResource = dataFetch<IMovie>('trending', 'all/day');

const SectionBanner: React.FunctionComponent<ISectionBannerProps> = (props) => {
    const [genres, setGenres] = useState(initialBannerGenres);
    const endpoint = `${genres.activeId.id}/${genres.windows_time}`;
    const { isLoading, data, error } = useQuery<ListResponse<IMovie>, Error>(
        [`get-list-trending-${genres.activeId.id}`],
        () => {
            return fetchMovies<IMovie>('trending', endpoint);
        }
    );

    const handleChangeGenres = (active: typeof genres) => {
        setGenres(active);
    };

    return (
        <section>
            <BannerTypeSection changeGenres={handleChangeGenres} init={genres} />
            <div className="relative mx-auto rounded-lg">
                {data ? <BannerSlider resource={data} type={genres.activeId} /> : <BannerLoading />}
            </div>
        </section>
    );
};

export default SectionBanner;
