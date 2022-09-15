import { AiringTodayProps, OnTvProps, PopularProps, TopRatedProps, UpcomingProps } from '@/asserts/contants/contants';
import React from 'react';
import SectionBanner from './components/Banner';
import SectionContent from './components/Content';

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
