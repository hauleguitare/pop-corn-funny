import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './layouts/footer';
import Header from './layouts/header';
import ClientRoutes from './pages/routes';

function App() {
    return (
        <div className="App bg-stone-dark-lighting">
            <Header />
            <ClientRoutes />
            <Footer />
        </div>
    );
}

export default App;
