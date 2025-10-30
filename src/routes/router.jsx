import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../pages/Home/Home';
import Root from '../Root/Root';
import NewsCategory from '../pages/Category/NewsCategory';
import Login from '../pages/LoginPage/Login';
import Registration from '../pages/Registration/Registration';
import AuthLayouts from '../components/AuthLayouts/AuthLayouts';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch("/news.json")
      },
      {
        path: '/category/:id',
        Component: NewsCategory,
        loader: () => fetch("/news.json")
      }
    ]
  },

  {
    path: '/auth',
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/registration',
        Component: Registration
      }
    ]
  }
]);

export default router;