import React from 'react';
import Timer from './Timer/Timer';
import Bookmarks from './Bookmarks/Bookmarks'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <Timer></Timer>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Sidebar;