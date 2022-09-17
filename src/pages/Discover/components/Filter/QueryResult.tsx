import { IMovie, ListResponse } from '@/@types/movies';
import { fetchDiscover } from '@/api/fetchMovies';
import CardItem from '@/components/CardItem';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Fragment } from 'react';
import { IParams } from '../..';
import GenresPageLoading from '../Loading';
import ListItemResults from './ListItemResults';

interface IQueryResultProps {
    type: string;
    params: IParams;
}

const QueryResult: React.FunctionComponent<IQueryResultProps> = (props) => {
    const { type, params } = props;
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
        ListResponse<IMovie>,
        Error
    >([`get-data-${type}-filter`, params], ({ pageParam = 1 }) => fetchDiscover(pageParam, type, params), {
        getNextPageParam: (result) => (result.page + 1 <= result.total_pages ? result.page + 1 : undefined),
    });
    if (isLoading) {
        return <GenresPageLoading />;
    }

    if (isError) {
        return <div>ERROR...</div>;
    }
    return (
        <div>
            <div className="grid grid-cols-2 gap-8 up-laptop:grid-cols-5 w-full px-4">
                {data ? (
                    <>
                        {/* {data.pages[0].results.map((item) => {
                            return (
                                <CardItem img={item.poster_path} title={item.title ?? item.name ?? ''} id={item.id} />
                            );
                        })} */}
                        {/* <p className="text-4xl text-white">{data.pages.flatMap}</p> */}
                        {/* <ListItemResults pages={data.pages} /> */}
                    </>
                ) : (
                    <GenresPageLoading />
                )}
            </div>
            {/* <div
                onClick={() => {
                    fetchNextPage();
                }}
                className="flex justify-center py-2 mx-4 mt-4 bg-blue-primary rounded-lg cursor-pointer"
            >
                <span className="text-base">LOAD MORE</span>
            </div> */}
            {isFetching && <div>Is fetching...</div>}
        </div>
    );
};

export default QueryResult;
