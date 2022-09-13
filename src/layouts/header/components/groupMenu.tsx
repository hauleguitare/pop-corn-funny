import { IListProps } from '@/asserts/contants/contants';
import ListItem from '@/components/ListItem';
import * as React from 'react';
import { HeaderContext } from '..';
import SubMenu from './subMenu';

interface IGroupMenuProps {}

const GroupMenu: React.FunctionComponent = (props) => {
    const { MenuList } = React.useContext(HeaderContext);
    return (
        <ListItem
            className="hidden up-tablet:flex flex-row text-white pl-4 font-oswald"
            items={MenuList}
            renderItem={(item) => {
                return (
                    <li className="px-2 py-2 relative group" key={item.id}>
                        <a href="#">
                            <span className="capitalize">{item.name}</span>
                        </a>
                        <SubMenu subMenu={item.subMenu} />
                    </li>
                );
            }}
        />
    );
};

export default GroupMenu;

// <ul className="hidden up-tablet:flex flex-row text-white pl-4 font-oswald">
//     {MenuProps.map((item) => {
//         return (
//             <li className="px-2 py-2 relative group" key={item.id}>
//                 <a href="#">
//                     <span className="capitalize">{item.name}</span>
//                 </a>
//                 <SubMenu subMenu={item.subMenu} />
//             </li>
//         );
//     })}
// </ul>
