import React from 'react';

import Header from '../../components/header/header.component';

import './sales.styles.scss';

const Sales = () => {
    return(
        <div className='sales-container'>
            <Header />
            <h3>Motorcycles for sale</h3>
            <div className='flex-container'></div>
        </div>

    )
}

export default Sales;