import * as React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

interface ISearchBarProps {}

const SearchBar: React.FunctionComponent<ISearchBarProps> = (props) => {
    return (
        <div className="flex items-center bg-stone-chocolate rounded-full">
            <button className="translate-x-2">
                <BiSearchAlt2 className="fill-white" size={'2rem'} />
            </button>
            <form className="relative my-2 mr-2 ml-2">
                <input
                    type="text"
                    className=" outline-none text-start  ml-2 bg-transparent placeholder:text-gray-400 font-light"
                    placeholder="Search more movies..."
                />
            </form>
        </div>
    );
};

export default SearchBar;
