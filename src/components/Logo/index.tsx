import * as React from 'react';
import { Link } from 'react-router-dom';

interface ILogoProps {
    title?: string;
    className?: string;
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
    const { title, className } = props;
    return (
        <Link to={'/'} className={`${className} text-yellow-500 font-merriweather font-bold`}>
            <p>{title}</p>
        </Link>
    );
};

Logo.defaultProps = {
    title: 'POPCORN',
};

export default Logo;
