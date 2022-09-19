import { IParams } from '@/@types/global/SEARCH_QUERY';
import { IMovie, ListResponse } from '@/@types/movies';
import { fetchDiscover } from '@/api/fetchMovies';
import MultiSkeleton from '@/components/Skeleton/MultiSkeleton';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import DiscoverNotFound from './components/NotFound';
import ListItemResults from './ListItemResults';

interface IQueryResultsProps {
    type: string;
    params: IParams;
}

const QueryResults: React.FunctionComponent<IQueryResultsProps> = (props) => {
    const { type, params } = props;
    const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
        ListResponse<IMovie>,
        Error
    >([`get-data-${type}-filter`, params], ({ pageParam = 1 }) => fetchDiscover(pageParam, type, params), {
        getNextPageParam: (result) => (result.page + 1 <= result.total_pages ? result.page + 1 : undefined),
    });
    if (isLoading) {
        return (
            <div className="grid grid-cols-2 gap-8 up-laptop:grid-cols-5 w-full px-4">
                <MultiSkeleton total={20} widthCard={'160px'} heightCard={'15rem'} />
            </div>
        );
    }

    if (isError) {
        return <div>ERROR...</div>;
    }

    if (data.pages.reduce((acc, curr) => [...acc, ...curr.results], [] as Array<IMovie>).length <= 0) {
        return (
            <DiscoverNotFound className="w-full h-full flex flex-col items-center justify-center text-white font-oswald text-xl" />
        );
    }

    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-8 up-laptop:grid-cols-5 w-full px-4">
                    <>
                        {data ? (
                            <ListItemResults pages={data.pages} />
                        ) : (
                            <MultiSkeleton total={20} widthCard={'227px'} heightCard={'15rem'} />
                        )}
                        {isFetching && <MultiSkeleton total={20} widthCard={'160px'} heightCard={'220px'} />}
                    </>
                </div>
                {data.pages.reduce((acc, curr) => [...acc, ...curr.results], [] as Array<IMovie>).length >= 20 && (
                    <div className="flex justify-center py-2 mx-4 mt-4 bg-blue-primary rounded-lg text-white">
                        <button
                            disabled={!hasNextPage}
                            onClick={() => {
                                fetchNextPage();
                            }}
                            className={`${!hasNextPage ? 'disabled:cursor-not-allowed opacity-50' : ''} w-full`}
                        >
                            <span className="text-base">{hasNextPage ? 'Load more' : 'No more movies to load'}</span>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default QueryResults;
