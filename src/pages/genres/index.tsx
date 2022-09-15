import Skeleton from '@/components/Skeleton.tsx';
import React from 'react';
import GroupFilter from './components/Filter/GroupFilter';

interface IGenresPageProps {
    genre: string;
}

const GenresPage: React.FunctionComponent<IGenresPageProps> = (props) => {
    const { genre } = props;
    return (
        <div className="container mt-4 max-w-[1280px] flex flex-row overflow-hidden">
            <GroupFilter />
            <div className="shrink mx-auto">
                <div className="flex mb-4">
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                </div>
                <div className="flex mb-4">
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                </div>
                <div className="flex mb-4">
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                </div>
                <div className="flex mb-4">
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                </div>
                <div className="flex mb-4">
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                    <Skeleton className="w-40 h-60 bg-stone-500 mx-4 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default GenresPage;
