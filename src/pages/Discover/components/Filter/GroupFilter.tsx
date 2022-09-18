import React from 'react';
import FilterByAdult from './FilterByAdult';
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
    return (
        <div className="shrink-0 flex-nowrap up-tablet:pl-0 pl-4 pr-4 up-tablet:w-[298px] w-full">
            <div>
                <div>
                    <SortBy options={optionForSort} />
                    <FilterGenres type={type} />
                </div>
            </div>
        </div>
    );
};

export default GroupFilter;
