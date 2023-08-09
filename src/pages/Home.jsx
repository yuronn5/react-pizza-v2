import React, {useEffect, useState} from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import qs from 'qs';
import {Link, useNavigate} from 'react-router-dom';
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    const {searchValue} = React.useContext(SearchContext);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePage = (num) => {
        dispatch(setCurrentPage(num))
    }

    // const categoryId = useSelector((state) => state.filter.categoryId);
    // const sortType = useSelector((state) => state.filter.sort.sortProperty);

    // two in one
    const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        // fetch(
        //     `https://64cabcd0700d50e3c7053f8d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        // )
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((arr) => {
        //         setItems(arr);
        //         setIsLoading(false);
        //     });
        axios.get(
            `https://64cabcd0700d50e3c7053f8d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
            .then(response => {
                console.log(response);
                setItems(response.data);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage])
    // https://630b496bed18e8251650f470.mockapi.io/items


    React.useEffect(() => {
        const queryString = qs.stringify({
            sortType: sort.sortProperty,
            categoryId,
            currentPage
        })

        console.log(queryString);
        navigate(`?${queryString}`);
    }, [categoryId, sortType, currentPage])

    const pizzas = items.map((obj) => <Link key={obj.id} to={`/pizza/${obj.id}`}><PizzaBlock  { ...obj } /></Link>);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory } />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons :
                        pizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    );
}

export default Home;