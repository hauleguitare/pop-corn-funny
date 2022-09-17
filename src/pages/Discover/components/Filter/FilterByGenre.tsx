import { IGenres } from '@/@types/global/SectionType';
import ListItem from '@/components/ListItem';
import useReadParams from '@/hooks/useReadParams';
import { GenreContext } from '@/shared/Context/GenreProvider';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useContext, useState } from 'react';
import { GrFormNext } from 'react-icons/gr';
import { useSearchParams } from 'react-router-dom';
import FilterByReleaseDate from './FilterByReleaseDate';
import FilterByRuntime from './FilterByRuntime';

interface IFilterGenresProps {
    type: string;
}

const FilterGenres: React.FunctionComponent<IFilterGenresProps> = (props) => {
    const { type } = props;
    const [openFilter, setOpenFilter] = useState(false);
    const [ReadParams] = useReadParams();
    const [searchParams, setSearchParams] = useSearchParams();

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
            <p className="text-xl font-roboto py-2">Filter</p>
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
                    <GenreContext.Consumer>
                        {(val) => {
                            return (
                                <ListItem
                                    items={val[type]}
                                    className="flex flex-wrap"
                                    renderItem={(item) => {
                                        return (
                                            <li
                                                onClick={() => {
                                                    handleOnClickGenre(item);
                                                }}
                                                key={item.id}
                                                className={`${
                                                    ReadParams['genre'].includes(item.id.toString())
                                                        ? 'bg-blue-primary'
                                                        : ''
                                                } py-2 px-2 mx-2 my-2 ring-2 ring-black rounded-full transition-all duration-150`}
                                            >
                                                {item.name}
                                            </li>
                                        );
                                    }}
                                />
                            );
                        }}
                    </GenreContext.Consumer>
                </>
            )}
            <FilterByRuntime />
            <FilterByReleaseDate />
        </div>
    );
};

export default FilterGenres;
