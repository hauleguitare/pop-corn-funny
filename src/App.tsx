import { createContext } from 'react';
import { IGenres } from './@types/global/SectionType';
import { fetchGenres } from './api/fetchGenres';
import Footer from './layouts/footer';
import Header from './layouts/header';
import ClientRoutes from './pages/routes';

const initialGenresContext: Array<IGenres> = [];

const GenresRequest = () => {
    let init: Array<IGenres> = [];
    const movie = fetchGenres('movie');
    const tv = fetchGenres('tv');
    Promise.all([movie, tv])
        .then((res) => {
            var tempArr: IGenres[] = [];
            tempArr.push(...res[0].genres);
            tempArr.push(...res[1].genres);
            const filterArr = tempArr.filter((val, idx, arr) => {
                return arr.findIndex((v) => v.id === val.id && v.name === val.name) === idx;
            });
            init.push(...filterArr);
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
