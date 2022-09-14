import { IButtonProps, IGenres } from '@/@types/global/ButtonProps';
import { IMovie } from '@/@types/movies';
import dataFetch from '@/utils/dataFetch';
import React, { Suspense, useEffect, useState } from 'react';
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
            {reviewMovie && (
                <ReviewCard
                    reviewMovie={reviewMovie}
                    onClickClose={(e) => {
                        setReviewMovie(null);
                    }}
                    className={`${
                        reviewMovie ? 'visible' : 'invisible'
                    } fixed inset-0 bg-black opacity-100 transition-all ease-in duration-500 max-w-[1200px] max-h[100%] rounded-lg mx-auto my-auto z-10 overscroll-auto overflow-auto`}
                />
            )}
        </section>
    );
};

export default SectionContent;
