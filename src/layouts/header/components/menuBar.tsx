import ListItem from '@/components/ListItem';
import * as React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogIn, BiSearchAlt2 } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { HeaderContext } from '..';

interface IMenuBarProps {
    isOpenMenu: boolean;
    handleOnMenu: (e: React.MouseEvent) => void;
}

const MenuBar: React.FunctionComponent<IMenuBarProps> = (props) => {
    const { isOpenMenu, handleOnMenu } = props;
    const { MenuList } = React.useContext(HeaderContext);
    return (
        <>
            <nav
                onClick={() => {
                    console.log('you are click in nav bar');
                }}
                className={`${
                    isOpenMenu ? 'translate-x-0' : 'translate-x-[-14rem]'
                } fixed top-16 bottom-0 left-0 right-0 z-[-10] bg-gray-400 h-full w-56 text-xl font-oswald duration-200 visible up-tablet:invisible`}
            >
                <ul className="text-start px-4 pb-4 border-b-2 relative ">
                    <li className="py-2">
                        <a href="#" className="flex flex-row max-h-[28px] gap-4">
                            <AiOutlineHome size={'28px'} />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#" className="flex flex-row max-h-[28px] gap-4">
                            <MdExplore size={'28px'} />
                            <p>Explore</p>
                        </a>
                    </li>

                    <li className="py-2">
                        <a href="#" className="flex flex-row max-h-[28px] gap-4">
                            <BiSearchAlt2 size={'28px'} />
                            <p>Search</p>
                        </a>
                    </li>
                </ul>

                <ul className="text-xl font-oswald text-start px-4 py-4 border-b-2 relative z-30">
                    {MenuList.map((item) => {
                        return (
                            <li className="group relative z-30 pb-2" key={item.id}>
                                <a href="#" className="flex flex-row max-h-[28px] gap-4 z-20">
                                    <span className="capitalize">{item.name}</span>
                                </a>
                                <div
                                    className="mx-2 my-2 border-l-2 absolute group-hover:relative
                            invisible group-hover:visible translate-y-[-30px] group-hover:translate-y-0
                            transition-transform group-hover:ease-in duration-[300ms] -z-20
                            "
                                >
                                    <ul className="px-2 text-base">
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
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="py-4 px-4 flex justify-start">
                    <a className="flex flex-row max-h-[28px] gap-4">
                        {/* <BiLogOut size={'28px'} />
                            <p>Log Out</p> */}
                        <BiLogIn size={'28px'} />
                        <p>Login</p>
                    </a>
                </div>
            </nav>
            <div
                onClick={handleOnMenu}
                className={`${
                    isOpenMenu ? 'visible' : 'invisible'
                } z-[-20] fixed inset-0 backdrop-blur-sm bg-gray-700/40 up-tablet:hidden`}
            ></div>
        </>
    );
};

export default MenuBar;
