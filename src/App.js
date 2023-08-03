import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import './scss/app.scss';


import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
    // const pathname = window.location.pathname;
    const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue, "Input Changed");

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home searchValue={searchValue} />}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
