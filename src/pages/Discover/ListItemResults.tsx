import { IMovie, ListResponse } from '@/@types/movies';
import CardItem from '@/components/CardItem';
import RatingCard from '@/components/RatingCard';
import { accessSync } from 'fs';
import React, { Fragment, useState } from 'react';
import DiscoverNotFound from './components/NotFound';

interface IListItemResultsProps {
    pages: ListResponse<IMovie>[];
}

const ListItemResults: React.FunctionComponent<IListItemResultsProps> = (props) => {
    const { pages } = props;

    return (
        <>
            {pages.map((page) => (
                <Fragment key={page.page}>
                    {page.results.map((item) => (
                        <>
                            {/* <RatingCard popular_rating={item.vote_average} /> */}
                            <CardItem
                                vote_average={item.vote_average}
                                widthImage="w185"
                                key={item.id}
                                title={item.title ?? item.name ?? ''}
                                img={item.poster_path}
                                id={item.id}
                            />
                        </>
                    ))}
                </Fragment>
            ))}
        </>
    );
};

export default ListItemResults;
