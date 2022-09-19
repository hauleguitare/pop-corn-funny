import React from 'react';
import { GiRoundStar } from 'react-icons/gi';

interface IRatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
    popular_rating: number;
}

const RatingCard: React.FunctionComponent<IRatingCardProps> = (props) => {
    const { className, popular_rating } = props;
    return (
        <div className={className}>
            <GiRoundStar className="mx-2 h-[30px] w-[30px] my-auto fill-yellow-500 flex-shrink-0" />
            <p className="text-black font-roboto flex-shrink mr-4">{String(popular_rating).padEnd(3, '.0')}</p>
        </div>
    );
};
RatingCard.defaultProps = {
    className:
        'absolute text-xl top-0 left-0 mx-4 my-4 h-[50px] transition-opacity duration-150 cursor-pointer flex rounded-md bg-white opacity-80 items-center hover:opacity-100 z-20',
};

export default RatingCard;
