import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import './scss/app.scss';


import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
    // const pathname = window.location.pathname;

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
