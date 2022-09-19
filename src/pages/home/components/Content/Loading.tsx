import Skeleton from '@/components/Skeleton';
import * as React from 'react';

interface IContentLoadingProps {}

const ContentLoading: React.FunctionComponent<IContentLoadingProps> = (props) => {
    return (
        <Skeleton className="flex flex-start cursor-progress min-w-full relative flex-nowrap overflow-hidden">
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
            <Skeleton className="min-w-[11rem] min-h-[16rem] mr-[30px] bg-stone-chocolate rounded-lg  shadow-md" />
        </Skeleton>
    );
};

export default ContentLoading;
