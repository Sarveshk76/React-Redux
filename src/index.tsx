import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "*",
    element: <div className='d-flex justify-content-center align-items-center m-5'>Not Found</div>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Navbar/>
        <Provider store={store}>
        <RouterProvider router={router}/>
        </Provider>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
