import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '@components/Navbar/Navbar';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton';

import './App.css';

const titleMap: Record<string, string> = {
  'quick-start': 'Quick Start',
  'adding-interactivity': 'Adding Interactivity',
  'managing-state': 'Managing State',
  'escape-hatches': 'Escape Hatches',
  'rick-and-morty': 'Rick And Morty',
};

function App() {
  const location = useLocation();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const currentUrl = location.pathname;
    const urlParts = currentUrl.split('/');
    const url = urlParts[urlParts.length - 1];

    setTitle(() => titleMap[url] || '');
  }, [location]);

  return (
    <div className="app-main-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-container">
        <h1>{title}</h1>
        <Outlet />
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
