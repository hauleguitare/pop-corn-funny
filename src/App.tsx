import Footer from './layouts/footer';
import Header from './layouts/header';
import ClientRoutes from './pages/routes';
import GenreProvider from './shared/Context/GenreProvider';

function App() {
    return (
        <div className="App bg-stone-dark-lighting">
            <GenreProvider>
                <Header />
                <ClientRoutes />
                <Footer />
            </GenreProvider>
        </div>
    );
}

export default App;
