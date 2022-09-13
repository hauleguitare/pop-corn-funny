import { Identification } from '@/@types/movies';
import React, { HTMLProps } from 'react';

interface IButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const ButtonGroup: React.FC<IButtonGroupProps> = (props) => {
    const { className, children, ...rest } = props;
    return (
        <div {...rest} className={className}>
            {children}
        </div>
    );
};

export default ButtonGroup;
