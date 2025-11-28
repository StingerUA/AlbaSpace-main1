
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import PlaceholderPage from './pages/PlaceholderPage';
import { secondaryNavLinks, modelData } from './constants';

const AppRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                {secondaryNavLinks.map(link => (
                    <Route
                        key={link.path}
                        path={link.path}
                        element={link.path === '/shop' ? <Shop /> : <PlaceholderPage title={link.label} />}
                    />
                ))}
                {Object.keys(modelData).map(modelId => (
                    <Route
                        key={modelId}
                        path={`/${modelId}`}
                        element={<ModelPage />}
                    />
                ))}
                <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
            </Routes>
        </AnimatePresence>
    );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div 
        className="flex flex-col min-h-screen font-sans bg-black"
        style={{
          backgroundImage: "url('https://i.imgur.com/gK2xR5w.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;