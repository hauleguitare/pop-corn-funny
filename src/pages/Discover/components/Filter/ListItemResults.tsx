import { IMovie, ListResponse } from '@/@types/movies';
import CardItem from '@/components/CardItem';
import React, { Fragment } from 'react';

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
                        <CardItem
                            key={item.id}
                            title={item.title ?? item.name ?? ''}
                            img={item.poster_path}
                            id={item.id}
                        />
                    ))}
                </Fragment>
            ))}
        </>
    );
};

export default ListItemResults;
