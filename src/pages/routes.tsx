import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import DetailsMoviePage from './details-movie';
import GenresPage from './genres';
import HomePage from './home';
import NotFoundPage from './not-found';

interface IClientRoutesProps {}

const ClientRoutes: React.FunctionComponent<IClientRoutesProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<GenresPage genre={'movie'} />}>
                <Route path="movie/:movie_id" element={<DetailsMoviePage />} />
            </Route>
            <Route path="/tv" element={<GenresPage genre={'tv'} />}>
                <Route path="tv/:movie_id" element={<DetailsMoviePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default ClientRoutes;
