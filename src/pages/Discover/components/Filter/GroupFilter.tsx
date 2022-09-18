import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import FilterGenres from './FilterByGenre';
import FilterByReleaseDate from './FilterByReleaseDate';
import FilterByRuntime from './FilterByRuntime';
import SortBy, { IOption } from './SortBy';

interface IGroupFilterProps {
    type: string;
}

const optionForSort: IOption[] = [
    { value: 'popularity.desc', label: 'Most Popularity' },
    { value: 'popularity.asc', label: 'Popularity ascending' },
    { value: 'vote_average.desc', label: 'Most vote average' },
    { value: 'vote_average.asc', label: 'Vote average ascending' },
];

const GroupFilter: React.FunctionComponent<IGroupFilterProps> = (props) => {
    const { type } = props;
    const [parent] = useAutoAnimate({
        duration: 200,
        easing: 'ease-in-out',
    });

    return (
        <div className="shrink-0 flex-nowrap up-tablet:pl-0 pl-4 pr-4 up-tablet:w-[298px] w-full">
            <SortBy options={optionForSort} />
            <div
                className="my-4 px-4 py-4 bg-white rounded-lg cursor-pointer"
                ref={parent as React.RefObject<HTMLDivElement>}
            >
                <p className="text-xl font-roboto py-2">Filter</p>
                <FilterGenres type={type} />
                <FilterByRuntime />
                <FilterByReleaseDate />
            </div>
        </div>
    );
};

export default GroupFilter;
