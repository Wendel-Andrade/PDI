import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.tsx';
import QuickStart from './pages/QuickStart/QuickStart.tsx';
import AddingInteractivity from './pages/AddingInteractivity/AddingInteractivity.tsx';
import ManagingState from './pages/ManagingState/ManagingState.tsx';
import EscapeHatches from './pages/EscapeHatches/EscapeHatches.tsx';
import RickAndMorty from './pages/RickAndMorty/RickAndMorty.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'quick-start',
        element: <QuickStart />,
      },
      {
        path: 'adding-interactivity',
        element: <AddingInteractivity />,
      },
      {
        path: 'managing-state',
        element: <ManagingState />,
      },
      {
        path: 'escape-hatches',
        element: <EscapeHatches />,
      },
      {
        path: 'rick-and-morty',
        element: <RickAndMorty />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
