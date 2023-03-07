import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import GuestLayout from './layout/GuestLayout';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './views/Login';
import Signup from './views/Signup';
import NotFound from './views/NotFound.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/dashboard', element: <Dashboard /> },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
    { path: '*', element: <NotFound />}
]);
