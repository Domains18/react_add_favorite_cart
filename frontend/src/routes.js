import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';


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
    }
]);
