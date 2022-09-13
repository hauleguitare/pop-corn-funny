import { IButtonProps, IGenres } from '@/@types/global/ButtonProps';
import { IMovie } from '@/@types/movies';
import dataFetch from '@/utils/dataFetch';
import React, { Suspense, useEffect, useState } from 'react';
import ContentLoading from './Loading';
import ContentSlider from './Slider';
import ContentGenres from './Genres';

interface ISectionContentProps {
    title: string;
    typeSection: IButtonProps;
    initActive?: IGenres;
}

const SectionContent: React.FunctionComponent<ISectionContentProps> = (props) => {
    const { title, typeSection, initActive } = props;
    const [activeId, setActiveId] = useState(typeSection.type[0]);
    const [resource, setResource] = useState(() => {
        const endpoint = typeSection.id.split('-').join('_');
        const initialResource = dataFetch<IMovie>(typeSection.type[0].id, endpoint);
        return initialResource;
    });

    const handleOnChangeGenres = (item: IGenres) => {
        setActiveId(item);
    };
    useEffect(() => {
        const changeContent = () => {
            var endpoint = typeSection.id.split('-').join('_');
            const newResource = dataFetch<IMovie>(activeId.id, endpoint);
            setResource(newResource);
        };
        changeContent();
    }, [activeId]);

    return (
        <div className="relative mt-8 mx-auto">
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
                    <ContentSlider resource={resource} />
                </Suspense>
            </div>
        </div>
    );
};

export default SectionContent;
