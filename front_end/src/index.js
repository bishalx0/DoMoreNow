import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Todo from './Components/Todo/Todo';
import Pomodoro from './Components/Pomodoro/Pomodoro';
import RoutinePlus from './Components/RoutinePlus/RoutinePlus';
import Main from './Components/Main/Main';
import Dashboard from './Components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <h2>Oops</h2>
  },
  // {
  //   path: "/todo",
  //   element: <Todo />,
  // },
  // {
  //   path: "/pomodoro",
  //   element: <Pomodoro />,
  // },
  // {
  //   path: "/routineplus",
  //   element: <RoutinePlus />,
  // },
  {
    path : '/main',
    element : <Main />
  },
  // {
  //   path : '/dashboard',
  //   element : <Dashboard />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
