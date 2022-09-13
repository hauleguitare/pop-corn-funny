import Skeleton from '@/components/Skeleton.tsx';
import * as React from 'react';

interface IBannerLoadingProps {}

const BannerLoading: React.FunctionComponent<IBannerLoadingProps> = (props) => {
    return (
        <Skeleton className="w-full h-[720px] shadow-lg bg-stone-chocolate rounded-lg cursor-wait">
            <Skeleton className="absolute top-0  px-4 py-4 up-tablet:px-8 flex flex-col gap-4">
                <Skeleton className="w-[500px] h-14 bg-stone-light-chocolate rounded-xl" />
                <Skeleton className="w-[300px] h-10 bg-stone-light-chocolate rounded-xl" />
                <Skeleton className="w-[200px] h-10 bg-stone-light-chocolate rounded-xl" />
                <Skeleton className="w-[400px] h-32 bg-stone-light-chocolate rounded-xl" />
            </Skeleton>
        </Skeleton>
    );
};

export default BannerLoading;
