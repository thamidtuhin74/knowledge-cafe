import React from 'react';
import Timer from './Timer/Timer';
import Bookmarks from './Bookmarks/Bookmarks'
import './Sidebar.css'

const Sidebar = (props) => {
    console.log('sidebar total time : ', props.totalTime);
    return (
        <div className='sidebar-main'>
            <Timer totalTime={props.totalTime}></Timer>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Sidebar;