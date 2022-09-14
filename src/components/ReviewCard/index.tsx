import { IMovie } from '@/@types/movies';
import useParseUrl from '@/hooks/useParseUrl';
import * as React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import ButtonGenres from '../ButtonGenres';
import RatingCard from '../RatingCard';

interface IReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    reviewMovie: IMovie | null;
    type: string | number;
    onClickClose: (e: React.MouseEvent | TouchEvent) => void;
}

const ReviewCard: React.FunctionComponent<IReviewCardProps> = (props) => {
    const { className, reviewMovie, onClickClose, type } = props;
    const parseUrl = useParseUrl(reviewMovie?.id, reviewMovie?.title ?? reviewMovie?.name ?? '');
    return (
        <>
            {
                <div className={className}>
                    {reviewMovie && (
                        <>
                            <button
                                onClick={onClickClose}
                                className="absolute top-0 right-0 mx-4 my-4 w-10 h-10 z-10 group"
                            >
                                <AiFillCloseCircle className="fill-white opacity-70 w-[40px] h-[40px] transition-opacity duration-150 group-hover:opacity-100" />
                            </button>

                            <RatingCard popular_rating={reviewMovie.vote_average} />
                            <div className="text-white max-h-[720px] object-cover relative">
                                <LazyLoadImage src={`http://image.tmdb.org/t/p/w1280${reviewMovie.backdrop_path}`} />
                                <Link
                                    to={`${type}/${parseUrl}`}
                                    className="absolute right-0 bottom-0 mx-4 my-4 px-2 up-mobile:px-4 py-2 up-mobile:py-4 bg-white hover:scale-110 group hover:bg-red-900 duration-150 transition-all ease-in rounded-lg"
                                >
                                    <p className="text-black group-hover:text-white">Watch</p>
                                </Link>
                            </div>
                            <div className=" px-8 py-8 flex flex-col">
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-2xl up-mobile:text-4xl font-oswald">
                                        {reviewMovie.title?.replace('-', ' ') ??
                                            reviewMovie.name?.replace('-', ' ') ??
                                            ''}
                                    </span>
                                </div>
                                <span className="text-white text-base up-mobile:text-xl font-oswald pt-2">
                                    {reviewMovie.original_title ?? reviewMovie.original_name ?? ''}
                                </span>
                                <span className="text-stone-light-chocolate text-md font-roboto pt-2">
                                    {reviewMovie.release_date?.toString() ??
                                        reviewMovie.first_air_date?.toString() ??
                                        ''}
                                </span>
                                <span className="text-white text-xl font-oswald pt-4">
                                    <ButtonGenres genres_ids={reviewMovie.genre_ids} type={type} />
                                </span>
                                <div>
                                    <p className="text-white text-xl up-mobile:text-2xl font-oswald pt-4">Overview</p>
                                    <p className="text-stone-400 text-md font-oswald pt-2">
                                        {reviewMovie.overview.length > 0
                                            ? reviewMovie.overview
                                            : 'The movie no have overview...'}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            }
        </>
    );
};

export default ReviewCard;
