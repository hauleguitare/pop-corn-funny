import { IGenres } from '@/@types/global/SectionType';
import { IReturnWrapPromise } from '@/@types/global/WrapPromiseType';
import { IMovie, ListResponse } from '@/@types/movies';
import CardItem from '@/components/CardItem';
import ReviewCard from '@/components/ReviewCard';
import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IContentSliderProps {
    resource: {
        data: IReturnWrapPromise<ListResponse<IMovie>>;
    };
    genre: IGenres;
    onReview: (item: IMovie) => void;
}

const ContentSlider: React.FunctionComponent<IContentSliderProps> = (props) => {
    const { resource, genre, onReview } = props;
    const [genres, setGenres] = useState(genre);
    const data = resource.data.read();

    const onReviewMovie = (e: React.MouseEvent | React.TouchEvent, id: string | number) => {
        e.preventDefault();
        data?.results.map((item) => {
            if (item.id === id) {
                onReview(item);
            }
        });
    };

    return (
        <Swiper
            slidesPerView={'auto'}
            slidesPerGroup={5}
            modules={[Navigation]}
            watchSlidesProgress
            breakpoints={{
                370: {
                    width: 460,
                    slidesPerGroup: 1,
                },
                640: {
                    width: 640,
                    slidesPerGroup: 2,
                },
                768: {
                    width: 768,
                    slidesPerGroup: 3,
                },
                1024: {
                    width: 1024,
                    slidesPerGroup: 5,
                },
                1280: {
                    width: 1280,
                    slidesPerGroup: 5,
                },
            }}
            loop={true}
            spaceBetween={30}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            {data?.results.map((item) => (
                <SwiperSlide key={item.id} className="!w-44">
                    <CardItem
                        onClickEvent={onReviewMovie}
                        id={item.id}
                        title={item.title ?? item.name ?? 'Unknown name'}
                        img={item.poster_path}
                    />
                </SwiperSlide>
            ))}

            <div className="absolute top-0 left-0 bottom-0 w-10 flex items-center opacity-80 hover:opacity-100 backdrop-blur-lg bg-black/30 z-10 transition duration-150 rounded-tr-md rounded-br-md">
                <div className="swiper-button-prev">
                    <GrPrevious size={'40px'} />
                </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-10 flex items-center opacity-80 hover:opacity-100 backdrop-blur-lg bg-black/30 z-10 transition duration-150 rounded-tl-md rounded-bl-md">
                <div className="swiper-button-next">
                    <GrNext size={'40px'} />
                </div>
            </div>
        </Swiper>
    );
};

export default ContentSlider;
