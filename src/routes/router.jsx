import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home';
import Root from '../Root/Root';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        }
    ]
  },
]);

export default router;