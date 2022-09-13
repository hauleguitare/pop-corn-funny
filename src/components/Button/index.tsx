import * as React from 'react';
import './button.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    active?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { className, active, children, ...rest } = props;
    return (
        <button
            className={`transition-all duration-300 opacity-80 hover:opacity-100 px-2 py-2 ${className} ${
                active ? 'button-active' : ''
            }`}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    active: false,
};

export default Button;
