import { IMovie } from '@/@types/movies';
import dataFetch from '@/utils/dataFetch';
import React, { Suspense, useEffect, useState } from 'react';
import BannerGenres from './Genres';
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
    const [resource, setResource] = useState(initialResource);
    const [genres, setGenres] = useState(initialBannerGenres);
    const handleChangeGenres = (active: typeof genres) => {
        setGenres(active);
    };
    useEffect(() => {
        const changeBanner = () => {
            var endpoint = `${genres.activeId.id}/${genres.windows_time}`;
            const newResource = dataFetch<IMovie>('trending', endpoint);
            setResource(newResource);
        };
        changeBanner();
    }, [genres]);

    return (
        <section>
            <BannerGenres changeGenres={handleChangeGenres} init={genres} />
            <div className="relative mx-auto rounded-lg">
                <Suspense fallback={<BannerLoading />}>
                    <BannerSlider resource={resource} type={genres.activeId} />
                </Suspense>
            </div>
        </section>
    );
};

export default SectionBanner;
