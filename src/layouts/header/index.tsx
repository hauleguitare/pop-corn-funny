import { LoginList, MenuList } from '@/asserts/contants/contants';
import ProfileGuest from '@/asserts/images/ProfileGuest.png';
import Logo from '@/components/Logo';
import SearchBar from '@/components/SearchBar';
import { useScrollEvent } from '@/hooks/useScrollEvent';
import * as React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import GroupMenu from './components/Menu/groupMenu';
import ResponsiveMenuBar from './components/Responsive/menuBar';

interface IHeaderProps {}

export const HeaderContext = React.createContext({ MenuList, LoginList });
const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    const [scrollPos] = useScrollEvent();
    const handleOpenMenu = (e: React.MouseEvent) => {
        setOpenMenu(!openMenu);
    };
    return (
        <header
            className={`sticky top-0 left-0 right-0 z-10 ${
                scrollPos > 0 ? 'up-tablet:bg-stone-darkest/30 opacity-80' : 'up-tablet:bg-stone-darkest opacity-100'
            } bg-stone-darkest transition-all ease-linear duration-200 hover:bg-stone-darkest hover:opacity-100`}
        >
            <HeaderContext.Provider value={{ MenuList, LoginList }}>
                <div className="container flex up-tablet:justify-between justify-start items-center h-16 max-w-7xl max-h-16">
                    <div className="mx-2 up-tablet:hidden">
                        <button onClick={handleOpenMenu}>
                            <BiMenuAltLeft size={'40px'} className="fill-white" />
                        </button>
                    </div>
                    <div className="flex flex-row items-center">
                        <Logo title="POPCORN" className="text-2xl" />
                        <GroupMenu />
                    </div>
                    <div className="hidden text-white up-tablet:flex flex-row font-oswald">
                        <div className="px-2 py-2 relative">
                            <SearchBar />
                        </div>
                        <div className="px-2 py-2 relative group">
                            <a href="#">
                                <img src={ProfileGuest} className="max-h-8 ring-2 rounded-full ring-white" />
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <a href="#" className="px-2 py-2 relative group">
                                <p>Login</p>
                            </a>
                        </div>
                    </div>
                </div>
                <ResponsiveMenuBar isOpenMenu={openMenu} handleOnMenu={handleOpenMenu} />
            </HeaderContext.Provider>
        </header>
    );
};

export default Header;
