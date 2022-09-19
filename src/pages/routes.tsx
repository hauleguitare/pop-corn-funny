import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import DetailsMoviePage from './details-movie';
import GenresPage from './Discover';
import HomePage from './home';
import NotFoundPage from './not-found';
import SearchPage from './Search';

interface IClientRoutesProps {}

const ClientRoutes: React.FunctionComponent<IClientRoutesProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/movie" element={<GenresPage type={'movie'} />}>
                <Route path="movie/:movie_id" element={<DetailsMoviePage />} />
            </Route>

            <Route path="/tv" element={<GenresPage type={'tv'} />}>
                <Route path="tv/:movie_id" element={<DetailsMoviePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default ClientRoutes;
