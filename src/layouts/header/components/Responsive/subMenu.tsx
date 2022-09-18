import { IListProps } from '@/asserts/contants/contants';
import React, { useRef, useState } from 'react';

interface IResponsiveSubMenuProps {
    item: IListProps;
}

const ResponsiveSubMenu: React.FunctionComponent<IResponsiveSubMenuProps> = (props) => {
    const { item } = props;
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

    const ParentRef = useRef<HTMLUListElement>(null);
    return (
        <li className="group relative z-30 pb-2">
            <a
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setOpenMenu(!isOpenMenu);
                }}
                href="#"
                className="flex flex-row max-h-[28px] gap-4 z-20"
            >
                <span className="capitalize">{item.name}</span>
            </a>
            {/* FIXING */}
            <ul
                style={
                    isOpenMenu
                        ? {
                              height: ParentRef.current?.scrollHeight + 'px',
                              marginTop: '0.5rem',
                          }
                        : {
                              height: '0px',
                              marginTop: '0rem',
                          }
                }
                className="text-white/80 shadow-lg px-2 text-base overflow-hidden transition-[margin_height] ease-in duration-75"
                ref={ParentRef}
            >
                {item.subMenu?.map((subItem) => {
                    return (
                        <li key={subItem.id.toString()}>
                            <a href={`/${subItem.id.toString()}`}>
                                <span className="capitalize">{subItem.name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
};

export default ResponsiveSubMenu;

/*

className="px-2 text-base mx-2 my-2 border-l-2 absolute group-hover:relative
                            invisible group-hover:visible
                            transition-transform group-hover:ease-in duration-[300ms] -z-20"

*/
