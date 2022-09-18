import Logo from '@/components/Logo';
import * as React from 'react';
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiCopyrightLine } from 'react-icons/ri';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <footer
            className={
                'bg-gradient-to-br to-stone-darkest via-blue-primary/5 from-blue-primary/10 backdrop-blur-lg mt-8'
            }
        >
            <div className="container max-w-7xl flex flex-col up-tablet:flex-row py-16 gap-4 up-tablet:gap-0 justify-between">
                <div className="mx-auto up-tablet:mx-0">
                    <Logo title="POPCORN" className="text-4xl up-tablet:text-start text-center" />
                    <span className="text-xl font-oswald text-white/60 text-center">Let's enjoy the best movies!</span>
                </div>
                <ul className="flex flex-row gap-6 my-auto mx-auto up-tablet:mx-0">
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=100009432061184"
                            target={'_blank'}
                            rel={'noreferrer noopener'}
                        >
                            <BsFacebook className="w-10 h-10 fill-white hover:fill-stone-light-chocolate duration-150 transition-colors ease-in" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hauleguitare" target={'_blank'} rel={'noreferrer noopener'}>
                            <BsGithub className="w-10 h-10 fill-white hover:fill-stone-light-chocolate duration-150 transition-colors ease-in" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/HauleGuitare" target={'_blank'} rel={'noreferrer noopener'}>
                            <BsTwitter className="w-10 h-10 fill-white hover:fill-stone-light-chocolate duration-150 transition-colors ease-in" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsYoutube className="w-10 h-10 fill-white hover:fill-stone-light-chocolate duration-150 transition-colors ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row items-center w-full justify-center">
                <RiCopyrightLine className="fill-white mx-1" />
                <a className="text-base text-white font-roboto">Copyright Hau Le</a>
            </div>
        </footer>
    );
};

export default Footer;
