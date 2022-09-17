import Skeleton from '@/components/Skeleton.tsx';
import * as React from 'react';

interface IGenresPageLoadingProps {
    widthCard?: string;
    heightCard?: string;
    total: number;
}

const GenresPageLoading: React.FunctionComponent<IGenresPageLoadingProps> = (props) => {
    const { widthCard, heightCard, total } = props;
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
                    className="bg-stone-500 rounded-lg cursor-wait"
                />
            ))}
        </>
    );
};

export default GenresPageLoading;
