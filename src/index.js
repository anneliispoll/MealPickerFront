import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import MealPicker from './MealPicker';
import YourMeals from './YourMeals';
import NewMeal from './NewMeal';


function AuthGuard({ element }) {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? element : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
      },

  {

    path: "/login",
    element: <App/>
  },

  {

    path: "/mealpicker",
    element: <AuthGuard element={<MealPicker />} />
  },
  {

    path: "/newmeal",
    element: <AuthGuard element={<NewMeal />} />
  },
  {

    path: "/yourmeals",
    element: <AuthGuard element={<YourMeals/>} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
