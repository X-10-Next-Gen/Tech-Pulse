import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Articles from './Pages/Articles';
import News from './Pages/News';
import Tutorials from './Pages/Tutorials';
import Loader from './Components/Loader';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates a loading delay

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <Router>
      <div className="bg-cyan-950 text-white min-h-screen">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <Loader />
          </div>
        ) : (
          <div className="opacity-100 transition-opacity duration-700">
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/news" element={<News />} />
              <Route path="/tutorials" element={<Tutorials />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
