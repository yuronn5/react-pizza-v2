import React from "react";

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return (
        <div>
            <h1 className={styles.root}>
                <span>🧐</span>
                <br />
                Nothing found here
            </h1>
            <p className={styles.description}>We cant find any data here</p>
        </div>

    )
}

export default NotFoundBlock