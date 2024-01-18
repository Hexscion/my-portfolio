import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Root from './src/pages/Root';
import Home from './src/pages/Home';
import Projects from './src/pages/Projects';
import ProjectView from './src/pages/ProjectView';
import Admin from './src/pages/Admin';
import AddProject from './src/pages/AddProject';
import AddCertificate from './src/pages/AddCertificate';
import Error from './src/pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div className='status-message'>Error: Please try again</div>,
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
            },
            {
                path: 'admin',
                element: <Admin />
            },
            {
                path: 'add-project',
                element: <AddProject />
            },
            {
                path: 'add-certificate',
                element: <AddCertificate />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
