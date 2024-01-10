import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './src/pages/Root';
import Home from './src/pages/Home';
import Projects from './src/pages/Projects';
import ProjectView from './src/pages/ProjectView';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'projects/:id',
                element: <ProjectView />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
