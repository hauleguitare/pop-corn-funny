import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IGenres } from './@types/global/ButtonProps';
import { fetchGenres } from './api/fetchGenres';
import Footer from './layouts/footer';
import Header from './layouts/header';
import ClientRoutes from './pages/routes';

interface GenresContext {
    [K: string]: IGenres[];
}

const initialGenresContext: GenresContext = {
    movie: [
        {
            id: 'null',
            name: 'null',
        },
    ],
    tv: [
        {
            id: 'null',
            name: 'null',
        },
    ],
};

const GenresRequest = () => {
    let init: GenresContext = {
        movie: [],
        tv: [],
    };
    const movie = fetchGenres('movie');
    const tv = fetchGenres('tv');
    Promise.all([movie, tv])
        .then((res) => {
            init.movie = res[0].genres;
            init.tv = res[1].genres;
        })
        .catch((err) => {
            console.log('error: ', err);
        });
    return init;
};
export const GenresContext = createContext(initialGenresContext);
function App() {
    return (
        <GenresContext.Provider value={GenresRequest()}>
            <div className="App bg-stone-dark-lighting">
                <Header />
                <ClientRoutes />
                <Footer />
            </div>
        </GenresContext.Provider>
    );
}

export default App;
