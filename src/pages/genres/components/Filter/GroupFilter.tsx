import React from 'react';
import FilterGenres from './FilterByGenre';
import SortBy, { IOption } from './SortBy';

interface IGroupFilterProps {}

const optionForSort: IOption[] = [
    { value: 'popularity.desc', label: 'Most Popularity' },
    { value: 'popularity.asc', label: 'Popularity ascending' },
    { value: 'vote_average.desc', label: 'Most vote average' },
    { value: 'vote_average.asc', label: 'Vote average ascending' },
];

const GroupFilter: React.FunctionComponent<IGroupFilterProps> = (props) => {
    return (
        <div className="shrink-0 flex-nowrap ml-4 w-[298px] max-w-[298px]">
            <div>
                <span className="text-4xl">Filter Movie</span>
                <div>
                    <SortBy options={optionForSort} />
                    <FilterGenres />
                    <div>Runtime</div>
                    <div>Release Dates / First Air Dates</div>
                </div>
            </div>
        </div>
    );
};

export default GroupFilter;
