import { IGenres } from '@/@types/global/SectionType';
import { GenresContext } from '@/App';
import ListItem from '@/components/ListItem';
import useReadParams from '@/hooks/useReadParams';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useContext, useState } from 'react';
import { GrFormNext } from 'react-icons/gr';
import { useSearchParams } from 'react-router-dom';

interface IFilterGenresProps {}

const FilterGenres: React.FunctionComponent<IFilterGenresProps> = (props) => {
    const [openFilter, setOpenFilter] = useState(false);
    const [ReadParams] = useReadParams();
    const [searchParams, setSearchParams] = useSearchParams(ReadParams);

    const Genres = useContext(GenresContext);
    const [parent] = useAutoAnimate({
        duration: 200,
        easing: 'ease-in-out',
    });

    const handleOnClickGenre = (genre: IGenres) => {
        const listGenres = searchParams.getAll('genre');
        if (listGenres.includes(genre.id.toString())) {
            const tempArr = listGenres.filter((genre_id) => genre_id !== genre.id.toString());
            setSearchParams({
                ...ReadParams,
                genre: tempArr,
            });
        } else {
            listGenres.push(genre.id.toString());
            setSearchParams({
                ...ReadParams,
                genre: listGenres,
            });
        }
    };

    return (
        <div
            className="my-4 px-4 py-4 bg-white rounded-lg cursor-pointer"
            ref={parent as React.RefObject<HTMLDivElement>}
        >
            <div
                className="flex justify-between"
                onClick={() => {
                    setOpenFilter(!openFilter);
                }}
            >
                <p>Genres Filter</p>
                <span>
                    <GrFormNext
                        className={`${
                            openFilter ? 'rotate-90' : 'rotate-0'
                        } h-full w-full transition-transform duration-[200ms]`}
                    />
                </span>
            </div>
            {openFilter && (
                <>
                    <ListItem
                        items={Genres}
                        className="flex flex-wrap"
                        renderItem={(item) => {
                            return (
                                <li
                                    onClick={() => {
                                        handleOnClickGenre(item);
                                    }}
                                    key={item.id}
                                    className={`${
                                        ReadParams['genre'].includes(item.id.toString()) ? 'bg-blue-primary' : ''
                                    } py-2 px-2 mx-2 my-2 ring-2 ring-black rounded-full transition-all duration-150`}
                                >
                                    {item.name}
                                </li>
                            );
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default FilterGenres;
