import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import BookPage from './components/bookPage/bookPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:name" element={<BookPage/>}/>
        </Routes>
       </BrowserRouter>
    </Provider>
);

reportWebVitals();
