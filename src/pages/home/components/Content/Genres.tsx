import { IGenres } from '@/@types/global/SectionType';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import React, { useState } from 'react';

interface IContentGenresProps {
    init?: IGenres;
    listGenres: IGenres[];
    changeGenres: (item: IGenres) => void;
}

const ContentGenres: React.FunctionComponent<IContentGenresProps> = (props) => {
    const { init, listGenres, changeGenres } = props;
    const [activeId, setActiveId] = useState(init ?? null);
    const OnChangeGenres = (item: IGenres) => {
        setActiveId(item);
        changeGenres(item);
    };
    return (
        <span className="rounded-full overflow-hidden ml-4">
            <ButtonGroup>
                {listGenres.map((item) => {
                    return (
                        <Button
                            key={item.id}
                            onClick={() => {
                                OnChangeGenres(item);
                            }}
                            active={activeId === item}
                            className="text-sm up-mobile:text-base bg-black font-bold text-white capitalize ring-opacity-50 ease-in"
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </span>
    );
};

export default ContentGenres;
