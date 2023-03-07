import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import GuestLayout from './layout/GuestLayout';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './views/Login';
import Signup from './views/Signup';
import NotFound from './views/NotFound.js';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <App /> },
            { path: '/about', element: <About /> },
            { path: '/dashboard', element: <Dashboard /> },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/Signup', element: <Signup /> },
        ]
    },
    { path: '*', element: <NotFound />}
]);

export default router;
