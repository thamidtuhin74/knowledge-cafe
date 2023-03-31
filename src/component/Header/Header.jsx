import React from 'react';
import "./Header.css";
// import {logo} from '../../../public/cptutors.png';
import logo from '../../../public/cptutors.png'
import siteAuthor from '../../../public/thamidtuhin74.png'
const Header = () => {
    return (
        <div className='header-container'>
            <a href="/home" target="_blank">
                <img src={logo} className="logo" alt="Knowdledge logo" />
            </a>
            <div className="link-wrapper">
                <a href="/blog">Blog</a>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={siteAuthor} className="site-author" alt="Knowdledge logo" />
                </a>
            </div>
        </div>
    );
};

export default Header;