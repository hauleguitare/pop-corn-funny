import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { BiMovie, BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson, BsTv, BsTvFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from '@/api/fetchSearch';
import { ISearchResult } from '@/@types/movies/search.interface';
import { SiSpinrilla } from 'react-icons/si';
import { IoMdClose } from 'react-icons/io';
import { IParams } from '@/@types/global/SEARCH_QUERY';

interface ISearchBarProps {}

const SearchBar: React.FunctionComponent<ISearchBarProps> = (props) => {
    const [isSearch, setOpenSearch] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [searchSuggestion, setSearchSuggetion] = useState<ISearchResult[]>([]);

    const parentRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<any>(null);

    const navigate = useNavigate();

    const handleGetKeyWord = async (query: IParams) => {
        const promise = fetchSearch('multi', query);
        setLoading(true);
        promise.then((res) => {
            setSearchSuggetion(res.results);
            setLoading(false);
        });
    };

    useEffect(() => {
        if (timeoutRef) {
            clearTimeout(timeoutRef.current);
        }
        if (searchQuery.length === 0) {
            setSearchSuggetion([]);
            return;
        }
        timeoutRef.current = setTimeout(() => {
            handleGetKeyWord({
                query: searchQuery,
            });
        }, 500);
    }, [searchQuery]);

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    };

    const handleRefresh = (e: React.MouseEvent) => {
        setSearchQuery('');
        setOpenSearch(false);
    };
    return (
        <div
            ref={parentRef}
            className={`flex items-center h-full overflow-hidden transition-[width] ease-in-out duration-150`}
            style={
                isSearch
                    ? {
                          width: parentRef.current?.scrollWidth + 'px',
                      }
                    : {
                          width: '32px',
                      }
            }
        >
            <button
                onClick={() => {
                    setOpenSearch(!isSearch);
                    setSearchQuery('');
                }}
            >
                {isSearch ? (
                    <IoMdClose className="fill-white" size={'2rem'} />
                ) : (
                    <BiSearchAlt2 className="fill-white" size={'2rem'} />
                )}
            </button>
            <form onSubmit={handleOnSubmit} className="bg-stone-light-chocolate/80 py-1 rounded-lg flex flex-row">
                <input
                    className="pl-4 outline-none text-start bg-transparent placeholder:text-gray-400 font-light"
                    type="text"
                    placeholder="search movies..."
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                />
            </form>
            {searchQuery.length >= 1 && (
                <div className="fixed top-[64px] left-0 w-full bg-white rounded-sm">
                    <ul className="flex flex-col mt-2">
                        <li className="text-base text-black py-2 px-4 border-b-2">
                            <Link
                                onClick={handleRefresh}
                                to={`/search?type=movie&?query=${encodeURIComponent(searchQuery)}`}
                                className={'flex flex-row items-center justify-between'}
                            >
                                <p className="">{searchQuery}</p>
                                <span className="flex flex-row items-center gap-2 shrink-0">
                                    in Movies
                                    <BiMovie />
                                </span>
                            </Link>
                        </li>
                        <li className="text-base text-black py-2 px-4 border-b-2">
                            <Link
                                onClick={handleRefresh}
                                to={`/search?type=tv&query=${encodeURIComponent(searchQuery)}`}
                                className={'flex flex-row items-center justify-between'}
                            >
                                <p className="">{searchQuery}</p>
                                <span className="flex flex-row items-center gap-2 shrink-0">
                                    in TV Shows
                                    <BsTv />
                                </span>
                            </Link>
                        </li>
                        <li className="text-base text-black py-2 px-4 border-b-2">
                            <Link
                                onClick={handleRefresh}
                                to={`/search?type=person&query=${encodeURIComponent(searchQuery)}`}
                                className={'flex flex-row items-center justify-between'}
                            >
                                <p className="">{searchQuery}</p>
                                <span className="flex flex-row items-center gap-2 shrink-0">
                                    in Person
                                    <BsPerson />
                                </span>
                            </Link>
                        </li>
                        {isLoading ? (
                            <li className="flex justify-center text-base text-black py-2 px-4 border-b-2">
                                <SiSpinrilla className="animate-spin w-10 h-10" />
                            </li>
                        ) : (
                            searchSuggestion.slice(0, 9).map((item) => (
                                <li
                                    key={item.id}
                                    className="text-base italic font-light text-stone-600 py-2 px-4 border-b-2"
                                >
                                    <Link
                                        onClick={handleRefresh}
                                        to={`/search?query=${encodeURIComponent(item.title ?? item.name ?? '')}`}
                                    >
                                        <p>{item.title ?? item.name ?? ''}</p>
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
