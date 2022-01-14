import React from "react";

import './header.styles.scss';

import bike from '../../assets/bike.svg';

const Header = () => {
    return(

        <header>
            <div className="header">
                <div className="home-button-container">
                <img src={bike} alt='home-button' />
                </div>
                <p>hello world.</p>
            </div>
        </header>

    )
}

export default Header;