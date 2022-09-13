import * as React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import Fallback from '@/asserts/images/FallBack.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '../Skeleton.tsx';
interface ICardItemProps {
    title: string;
    img?: string;
    url?: string;
    className?: string;
    skeleton?: JSX.Element;
}

const CardItem: React.FunctionComponent<ICardItemProps> = (props) => {
    const { title, img, url, className, skeleton } = props;
    return (
        <a href="#">
            <div className="group hover:scale-105 rounded-md overflow-hidden transition ease-in duration-150 relative object-cover">
                <LazyLoadImage
                    src={img ? `https://image.tmdb.org/t/p/w342/${img}` : Fallback}
                    alt={`poster: ${title}`}
                    effect="black-and-white"
                    placeholder={skeleton ?? <Skeleton className="w-44 h-[264px] bg-stone-chocolate" />}
                />
                {/* <img src={img ? `https://image.tmdb.org/t/p/w342/${img}` : Fallback} className="object-cover" /> */}
                <p className="text-base text-white/50 group-hover:text-white font-roboto text-ellipsis overflow-hidden whitespace-nowrap pt-2">
                    {title}
                </p>
                <div className="absolute inset-0 max-w-[60px] max-h-[60px] mx-auto my-auto">
                    <BiPlayCircle
                        size={'60px'}
                        className="group-hover:visible group-hover:scale-100 hover:opacity-100 invisible scale-125 fill-white opacity-50 transition duration-150 ease-in"
                    />
                </div>
            </div>
        </a>
    );
};

export default CardItem;
