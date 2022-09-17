import { IMovie, ListResponse } from '@/@types/movies';
import CardItem from '@/components/CardItem';
import { InfiniteData } from '@tanstack/react-query';
import React, { Fragment } from 'react';

interface IListItemResultsProps {
    pages: ListResponse<IMovie>[];
}

const ListItemResults: React.FunctionComponent<IListItemResultsProps> = (props) => {
    const { pages } = props;
    console.log(pages);

    return (
        <>
            {pages &&
                pages.map((page, idx) => {
                    <Fragment key={idx}>
                        {page.results.map((item) => {
                            return (
                                <CardItem
                                    key={item.id}
                                    img={item.poster_path}
                                    title={item.title ?? item.name ?? ''}
                                    id={item.id}
                                />
                            );
                        })}
                    </Fragment>;
                })}
        </>
    );
};

export default ListItemResults;
