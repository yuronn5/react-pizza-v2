import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import './scss/app.scss';


import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export const SearchContext = React.createContext();

function App() {
    // const pathname = window.location.pathname;
    const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue, "Input Changed");

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
