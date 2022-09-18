import * as React from 'react';
import { AiOutlineQuestion } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface INotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
    return (
        <div className="flex flex-col max-w-7xl items-center mx-auto mt-8">
            <div className="my-auto mx-auto flex flex-col items-center">
                <p className="text-white font-merriweather text-[100px] text-center">404</p>
                <p className="text-white font-oswald text-5xl text-center">Oops! Page not found</p>
                <div className="relative">
                    <AiOutlineQuestion className="absolute top-0 left-0 w-28 h-28 -rotate-45 fill-white animate-ping" />
                    <AiOutlineQuestion className="absolute top-0 right-0 w-28 h-28 rotate-45 fill-white animate-ping" />
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-looking-through-binoculars-4393616-3646084.png" />
                </div>
                <Link
                    to={'/'}
                    className="px-2 py-4 bg-stone-500 text-white hover:bg-stone-200 hover:text-black transition-all duration-150 text-4xl rounded-lg font-oswald"
                >
                    Return Home Page
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
