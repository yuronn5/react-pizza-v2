import React from "react";
import styles from './Search.module.scss'
import {SearchContext} from "../../App";

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    return (
        <div className={styles.root}>
            <input
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
                className={styles.input}
                type="text"
                placeholder="Пошук піцци...." />
        </div>
    );
}

export default Search