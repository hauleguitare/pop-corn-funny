import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import GenresPage from './genres';
import HomePage from './home';
import NotFoundPage from './not-found';

interface IClientRoutesProps {}

const ClientRoutes: React.FunctionComponent<IClientRoutesProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:genre" element={<GenresPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default ClientRoutes;
