import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useState } from 'react';
import { GrFormNext } from 'react-icons/gr';
import Select, { StylesConfig } from 'react-select';

export interface IOption {
    value: string;
    label: string;
}

interface ISortByProps {
    options: IOption[];
}

const style: StylesConfig = {
    container: (styl) => ({ ...styl, marginTop: '1rem', minWidth: '100%' }),
    control: (styl) => ({ ...styl, cursor: 'pointer' }),
    option: (styl) => ({ ...styl, cursor: 'pointer' }),
};

const SortBy: React.FunctionComponent<ISortByProps> = (props) => {
    const { options } = props;
    const [openSort, setOpenSort] = useState(false);
    const [parent] = useAutoAnimate();
    return (
        <div
            className="my-4 px-4 py-4 bg-white rounded-lg cursor-pointer"
            ref={parent as React.RefObject<HTMLDivElement>}
        >
            <div
                onClick={() => {
                    setOpenSort(!openSort);
                }}
                className="flex flex-row justify-between"
            >
                <p className="text-base">Sort</p>
                <span>
                    <GrFormNext
                        className={`${
                            openSort ? 'rotate-90' : 'rotate-0'
                        } h-full w-full transition-transform duration-[200ms]`}
                    />
                </span>
            </div>
            {openSort && (
                <div className="pt-2">
                    <p className="cursor-text">Sort Results by</p>
                    <Select options={options} styles={style} />
                </div>
            )}
        </div>
    );
};

export default SortBy;
