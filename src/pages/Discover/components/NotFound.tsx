import * as React from 'react';

interface IDiscoverNotFoundProps extends React.HTMLAttributes<HTMLDivElement> {}

const DiscoverNotFound: React.FunctionComponent<IDiscoverNotFoundProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={className}>
            <p>Sorry, don't have movie you results, please try again!</p>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-with-binoculars-in-sunny-day-5705945-4759558.png" />
            {children}
        </div>
    );
};

export default DiscoverNotFound;
