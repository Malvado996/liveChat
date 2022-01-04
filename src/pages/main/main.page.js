import React from 'react';

import Header from '../../components/header/header.component';

import './main.styles.scss';


const Main = () => {
    return (
        <div className='main-container'>
            <Header />
            <h1 className='title'>Rowdy Moto</h1>
            <p className='subtitle'>Motorcycle trading for things.</p>
        </div>
    )
}

export default Main;