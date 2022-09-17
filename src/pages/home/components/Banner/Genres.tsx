import { TrendingProps } from '@/asserts/contants/contants';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import React, { useState } from 'react';

type initialState = {
    windows_time: string;
    activeId: {
        id: string;
        name: string;
    };
};

interface IBannerTypeSectionProps {
    init: initialState;
    changeGenres: (active: initialState) => void;
}

const BannerTypeSection: React.FunctionComponent<IBannerTypeSectionProps> = (props) => {
    const { init, changeGenres } = props;
    const [windows_time, setWindowsTime] = useState(init.windows_time);
    const [activeId, setActiveId] = useState(init.activeId);
    const OnChangeActiveId = (active: typeof activeId) => {
        setActiveId(active);
        changeGenres({
            windows_time: windows_time,
            activeId: active,
        });
    };
    const OnChangeTime = (changeTime: typeof windows_time) => {
        setWindowsTime(changeTime);
        changeGenres({
            windows_time: changeTime,
            activeId: activeId,
        });
    };
    return (
        <div className="flex justify-between text-sm up-mobile:text-base mx-4 up-mobile:mx-0 mb-4">
            <ButtonGroup className="bg-black overflow-hidden rounded-full">
                {TrendingProps.media_type.map((item) => {
                    return (
                        <Button
                            className="bg-black font-bold text-white capitalize ease-in"
                            key={item.id}
                            active={activeId.id === item.id}
                            onClick={() => {
                                OnChangeActiveId(item);
                            }}
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </ButtonGroup>
            <ButtonGroup className="bg-black overflow-hidden rounded-full">
                {TrendingProps.time_windows.map((time) => {
                    return (
                        <Button
                            className="bg-black font-bold text-white capitalize ease-in"
                            key={time}
                            active={windows_time === time}
                            onClick={() => {
                                OnChangeTime(time);
                            }}
                        >
                            {time}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </div>
    );
};

export default BannerTypeSection;
