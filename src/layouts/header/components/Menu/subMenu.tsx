import { IListProps } from '@/asserts/contants/contants';
import ListItem from '@/components/ListItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface ISubMenuProps {
    subMenu?: IListProps[];
}

const SubMenu: React.FunctionComponent<ISubMenuProps> = (props) => {
    const { subMenu } = props;
    return (
        <>
            {subMenu && (
                <div className="absolute z-10 bg-stone-chocolate top-10 left-2 right-0 min-w-[9rem] invisible group-hover:visible rounded-md">
                    <ListItem
                        className="text-white text-lg px-4 py-2 flex flex-col text-start"
                        items={subMenu}
                        renderItem={(item) => {
                            return (
                                <Link to={`${item.url}`} key={item.id}>
                                    <span className="capitalize text-base">{item.name}</span>
                                </Link>
                            );
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default SubMenu;

{
    /* <ul className="text-white text-lg px-4 py-2 flex flex-col text-start">
                {subMenu?.map((item) => {
                    return (
                        <a href={`/${item.id.toString()}`} key={item.id}>
                            <span className="capitalize text-base">{item.name}</span>
                        </a>
                    );
                })}
            </ul> */
}
