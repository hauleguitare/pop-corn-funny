import { IGenres } from '@/@types/global/SectionType';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import QueryResults, { ICallBackStatusProps } from './components/QueryResults';
import { CgSpinnerTwo } from 'react-icons/cg';

interface ISearchPageProps {}

const SelectedType: IGenres[] = [
    {
        id: 'multi',
        name: 'All',
    },
    {
        id: 'movie',
        name: 'Movies',
    },
    {
        id: 'tv',
        name: 'TV Shows',
    },
    {
        id: 'person',
        name: 'People',
    },
];

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const [type, setType] = useState(searchParams.get('type') || 'multi');
    const [searchInput, setSearchInput] = useState(decodeURIComponent(searchParams.get('query') || ''));
    const [submitQuery, setSubmitQuery] = useState(searchParams.get('query') || '');

    const [status, setStatus] = useState<ICallBackStatusProps>();

    useEffect(() => {
        setSubmitQuery(searchParams.get('query') || '');
    }, [location.search]);

    const handleStatus = (status: ICallBackStatusProps) => {
        setStatus(status);
    };

    const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearchParams({
            type: type,
            query: encodeURIComponent(searchInput),
        });
    };
    return (
        <div className="container mt-4 max-w-[1280px] px-4 up-mobile:px-0">
            <form
                onSubmit={handleOnSubmit}
                className="text-white h-14 relative bg-stone-chocolate flex items-center rounded-xl overflow-hidden"
            >
                <button
                    onSubmit={handleOnSubmit}
                    className="absolute top-0 h-full px-2 bg-stone-light-chocolate text-white/50 z-20"
                >
                    Search
                </button>
                <input
                    onChange={handleOnChangeInput}
                    value={decodeURIComponent(searchInput)}
                    type={'text'}
                    className="pl-20 pr-4 text-xl w-full outline-none bg-transparent"
                />

                {status?.isLoading && <CgSpinnerTwo className="w-10 h-10 mr-4 animate-spin" color="white" />}
            </form>
            <div className="flex justify-center">
                <div className="flex flex-row justify-between gap-4 mt-2">
                    {SelectedType.map((item) => (
                        <button
                            onClick={() => setType(item.id.toString())}
                            key={item.id}
                            className={`${
                                item.id === type ? 'bg-stone-300' : 'bg-stone-600'
                            } px-2 py-2 rounded-lg hover:bg-stone-400 transition-colors duration-150`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            {submitQuery && <QueryResults type={type} params={{ query: submitQuery }} callBackStatus={handleStatus} />}
        </div>
    );
};

export default SearchPage;
