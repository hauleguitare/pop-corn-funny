import { IMovie } from '@/@types/movies';
import * as React from 'react';
import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import RatingCard from '../RatingCard';

interface IReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    reviewMovie: IMovie;
    onClickClose: (e: React.MouseEvent | TouchEvent) => void;
}

const ReviewCard: React.FunctionComponent<IReviewCardProps> = (props) => {
    const { className, reviewMovie, onClickClose } = props;
    return (
        <div className={className}>
            <button onClick={onClickClose} className="absolute top-0 right-0 mx-4 my-4 w-10 h-10 z-10 group">
                <AiFillCloseCircle className="fill-white opacity-60 w-[40px] h-[40px] transition-opacity duration-150 group-hover:opacity-100" />
            </button>
            <RatingCard popular_rating={reviewMovie.vote_average} />
            <div className="text-white max-h-[720px] object-cover">
                <LazyLoadImage src={`http://image.tmdb.org/t/p/w1280${reviewMovie.backdrop_path}`} />
            </div>
            <div className="bg-gradient-to-t via-black/80 from-black to-transparent translate-y-[-100px] px-8 py-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="text-white text-4xl font-oswald">
                        {reviewMovie.title ?? reviewMovie.name ?? ''}
                    </span>
                    <Link
                        to={`/${reviewMovie.id}`}
                        className="px-4 py-4 bg-white hover:scale-110 group hover:bg-red-900 duration-150 transition-all ease-in rounded-lg"
                    >
                        <p className="text-black group-hover:text-white">Watch</p>
                    </Link>
                </div>
                <span className="text-white text-xl font-oswald pt-4">
                    {reviewMovie.original_title ?? reviewMovie.original_name ?? ''}
                </span>
                <span className="text-white text-xl font-oswald pt-4">Genres</span>
                <div>
                    <p className="text-white text-2xl font-oswald pt-4">Overview</p>
                    <p className="text-white text-md font-oswald pt-2">
                        {reviewMovie.overview.length > 0 ? reviewMovie.overview : 'The movie no have overview...'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
