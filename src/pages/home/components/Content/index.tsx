import { IButtonProps, IGenres } from '@/@types/global/ButtonProps';
import { IMovie } from '@/@types/movies';
import dataFetch from '@/utils/dataFetch';
import React, { Suspense, useContext, useEffect, useState } from 'react';
import ContentLoading from './Loading';
import ContentSlider from './Slider';
import ContentGenres from './Genres';
import ReviewCard from '@/components/ReviewCard';

interface ISectionContentProps {
    title: string;
    typeSection: IButtonProps;
    initActive?: IGenres;
}

const SectionContent: React.FunctionComponent<ISectionContentProps> = (props) => {
    const { title, typeSection, initActive } = props;
    const [activeId, setActiveId] = useState(typeSection.type[0]);
    const [reviewMovie, setReviewMovie] = useState<IMovie | null>(null);
    const [resource, setResource] = useState(() => {
        const endpoint = typeSection.id.split('-').join('_');
        const initialResource = dataFetch<IMovie>(typeSection.type[0].id.toString(), endpoint);
        return initialResource;
    });

    const handleOnReview = (item: IMovie) => {
        setReviewMovie(item);
    };

    const handleOnChangeGenres = (item: IGenres) => {
        setActiveId(item);
    };
    useEffect(() => {
        const changeContent = () => {
            var endpoint = typeSection.id.split('-').join('_');
            const newResource = dataFetch<IMovie>(activeId.id.toString(), endpoint);
            setResource(newResource);
        };
        changeContent();
    }, [activeId]);

    return (
        <section className="relative mt-8 mx-auto">
            <div className="mx-4 up-mobile:mx-0 mb-4 text-white font-roboto text-start font-bold text-base up-mobile:text-xl capitalize flex justify-between up-tablet:justify-start items-center">
                <p className="hover:text-blue-primary transition-colors ease-in duration-150 delay-75 cursor-pointer">
                    {title}
                </p>
                {typeSection.type.length > 1 && (
                    <ContentGenres
                        changeGenres={handleOnChangeGenres}
                        init={initActive ?? activeId}
                        listGenres={typeSection.type}
                    />
                )}
            </div>
            <div>
                <Suspense fallback={<ContentLoading />}>
                    <ContentSlider onReview={handleOnReview} resource={resource} genre={activeId} />
                </Suspense>
            </div>
            <ReviewCard
                reviewMovie={reviewMovie}
                type={activeId.id}
                onClickClose={(e) => {
                    setReviewMovie(null);
                }}
                className={`${
                    reviewMovie ? 'w-full h-full' : 'w-0 h-0'
                } fixed inset-0 bg-stone-dark-lighting transition-combineWH
                     ease-in-out max-w-[1024px] h-full duration-700 rounded-lg mx-auto my-4
                     z-20 overscroll-contain overflow-auto
                      scrollbar-thin
                      `}
            />
            <div
                onClick={(e) => {
                    setReviewMovie(null);
                }}
                className={`${
                    reviewMovie ? 'visible' : 'invisible'
                } fixed inset-0 ease-linear bg-black/50 opacity-90 z-10`}
            ></div>
        </section>
    );
};

export default SectionContent;
