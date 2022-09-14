import React, { createContext, useEffect, useState } from 'react';
import SectionBanner from './components/Banner';
import SectionContent from './components/Content';
import { PopularProps, TopRatedProps, OnTvProps, UpcomingProps, AiringTodayProps } from '@/asserts/contants/contants';
import ContentLoading from './components/Content/Loading';
import ReviewCard from '@/components/ReviewCard';
import { IGenres } from '@/@types/global/ButtonProps';
import { fetchMovies } from '@/api/fetchMovies';
import { fetchGenres } from '@/api/fetchGenres';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <div className="container mt-4 max-w-[1280px]">
            <SectionBanner />
            <SectionContent title={"What's popular?"} typeSection={PopularProps} />
            <SectionContent title={"Let's Start with Top Rated"} typeSection={TopRatedProps} />
            <SectionContent title={'On The Air'} typeSection={OnTvProps} />
            <SectionContent title={'Are you missing Upcoming?'} typeSection={UpcomingProps} />
            <SectionContent title={"Don't forget Airing Today"} typeSection={AiringTodayProps} />
        </div>
    );
};

export default HomePage;
