import React from 'react';

import './main.styles.scss';

import Header from '../../components/header/header.component'
import scrambler from '../../assets/scrambler.jpg'

const Main = () => {

    return (
        <div className='main-container'>
            <Header />
            <h2>Rowdy Moto</h2>
            <p>this is text.</p>
            <div className='container'>
                <h4>hello world</h4>

                <div className='card'>
                    <div className='card-title'>
                        <div className='img'>
                            <img src={scrambler} alt="scrambler" className='scr'/>
                        </div>
                    </div>

                    <div className='card-title'>
                        <div className='img'>
                            <img src={scrambler} alt="scrambler" className='scr'/>
                        </div>
                    </div>
                </div>

                {/* <div className='card-title'>
                        <div className='img'>
                            <img src={scrambler} alt="scrambler" className='scr'/>
                        </div>
                    </div> */}

            </div>
        </div>
    )
}

export default Main;