import Skeleton from '@/components/Skeleton';
import * as React from 'react';

interface IMultiSkeletonProps {
    widthCard?: string;
    heightCard?: string;
    className?: string;
    total: number;
}

const MultiSkeleton: React.FunctionComponent<IMultiSkeletonProps> = (props) => {
    const { widthCard, heightCard, total, className } = props;
    return (
        <>
            {console.log()}
            {Array.from(Array(total).keys()).map((val) => (
                <Skeleton
                    key={val}
                    style={{
                        width: widthCard,
                        height: heightCard,
                    }}
                    className={`${className} bg-stone-500 rounded-lg cursor-wait`}
                />
            ))}
        </>
    );
};

MultiSkeleton.defaultProps = {
    className: '',
};

export default MultiSkeleton;
