import FallBackCard from '@/asserts/images/Fallback_Card.png';
import * as React from 'react';
import { BiPlayCircle } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import Skeleton from '../Skeleton';
interface ICardItemProps {
    title: string;
    id: string | number;
    img?: string;
    widthImage?: string;
    url?: string;
    children?: React.ReactNode;
    vote_average?: number;
    skeleton?: JSX.Element;
    onClickEvent?: (e: React.MouseEvent | React.TouchEvent, id: string | number) => void;
}

const CardItem: React.FunctionComponent<ICardItemProps> = (props) => {
    const { title, img, vote_average, widthImage, url, skeleton, onClickEvent, id, children } = props;
    return (
        <a href="#" onClick={onClickEvent && ((e) => onClickEvent(e, id))} className="relative">
            <div className="group hover:scale-105 rounded-md overflow-hidden transition ease-in duration-150 relative object-cover">
                <LazyLoadImage
                    src={img ? `https://image.tmdb.org/t/p/${widthImage}/${img}` : FallBackCard}
                    effect={'opacity'}
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

CardItem.defaultProps = {
    widthImage: 'w342',
};

export default CardItem;
