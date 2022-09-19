import { IParams } from '@/@types/global/SEARCH_QUERY';
import { ListResponse } from '@/@types/movies';
import { ISearchResult } from '@/@types/movies/search.interface';
import { fetchSearch } from '@/api/fetchSearch';
import MultiSkeleton from '@/components/Skeleton/MultiSkeleton';
import { QueryState, QueryStatus, useQuery } from '@tanstack/react-query';
import * as React from 'react';

export interface ICallBackStatusProps {
    isLoading: boolean;
    status: QueryStatus;
    error: Error | null;
}

interface IQueryResultsProps {
    params: IParams;
    type: string;
    callBackStatus: (status: ICallBackStatusProps) => void;
}

const QueryResults: React.FunctionComponent<IQueryResultsProps> = (props) => {
    const { params, type, callBackStatus } = props;
    const { data, isLoading, status, error } = useQuery<ListResponse<ISearchResult>, Error>(
        [`search-query-result-${type}`, params],
        () => {
            return fetchSearch(type, params);
        }
    );

    React.useEffect(() => {
        callBackStatus({
            isLoading: isLoading,
            status: status,
            error: error,
        });
    }, [isLoading, status]);

    return (
        <div className="mt-8 grid grid-cols-2 up-tablet:grid-cols-5 up-mobile:grid-cols-3 gap-8 up-tablet:gap-8">
            {isLoading && <MultiSkeleton total={20} className="w-full h-72 bg-stone-chocolate rounded-lg pr-8" />}
            {/* <MultiSkeleton total={20} className="w-full h-72 bg-stone-chocolate rounded-lg pr-8" /> */}
        </div>
    );
};

export default QueryResults;

// const QueryResults = React.forwardRef((props: IQueryResultsProps, ref) => {
//     const { params, type } = props;
//     const { data, isLoading, status, error } = useQuery<ListResponse<ISearchResult>, Error>(
//         [`search-query-result-${type}`, params],
//         () => {
//             return fetchSearch(type, params);
//         }
//     );
//     React.useImperativeHandle(ref, () => ({
//         status: status,
//         isLoading: isLoading,
//         errorMessage: error,
//     }));
//     return (
//         <div className="mt-8 grid grid-cols-2 up-tablet:grid-cols-5 up-mobile:grid-cols-3 gap-8 up-tablet:gap-8">
//             {isLoading && <MultiSkeleton total={20} className="w-full h-72 bg-stone-chocolate rounded-lg pr-8" />}
//             {/* <MultiSkeleton total={20} className="w-full h-72 bg-stone-chocolate rounded-lg pr-8" /> */}
//         </div>
//     );
// });
