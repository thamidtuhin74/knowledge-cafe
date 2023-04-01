import React from 'react';
import Timer from './Timer/Timer';
import Bookmarks from './Bookmarks/Bookmarks'
import './Sidebar.css'

const Sidebar = (props) => {
    
    console.log('sidebar bookmarks : ', props.bookmarks);
    console.log('sidebar total time : ', props.totalTime);


   
    // let quantity = 0;
    // for(const bookmark of bookmarks){
    //     if(bookmark.quantity == 0){
    //         bookmark.quantity = 1;
    //     }
    //     else{
    //         quantity = quantity + 1; 
    //     }
    // }

    return (
        <div className='sidebar-main'>
            <Timer totalTime={props.totalTime}></Timer>
            <Bookmarks bookmarks={props.bookmarks} addedBlogTitle = {props.addedBlogTitle}></Bookmarks>
        </div>
    );
};

export default Sidebar;