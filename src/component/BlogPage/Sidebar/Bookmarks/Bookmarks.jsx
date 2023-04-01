import React from 'react';
import './Bookmarks.css'

const Bookmarks = (props) => {
    const bookmarks = props.bookmarks;
    // addedBlogTitle = props.addedBlogTitle
    console.log()

    console.log('bookmarked : ',bookmarks);
    
    let title = [];
    let quantity = 0;
    for(const bookmark of bookmarks){
        if(bookmark.quantity===0)
        {
            bookmark.quantity=1;
            title.push(bookmark.title);
        }
        
        quantity = quantity + 1 ;
        title.push(bookmark.title);
    }
    console.log('Total quantity: ', quantity);
    console.log('total Title :', title.length)

    return (
        <div className='bookmarks'>
            <h3>Bookmarked Blogs : {quantity}</h3>
            {
                bookmarks.map(bookmark =>{
                    console.log('mapped title: ',bookmark.title);
                    <p id='single-bookmark'>{props.addedBlogTitle}</p>

                })};
            {
                title.map(t => <p id='single-bookmark'>{t} </p>)
            }
            <p id='single-bookmark'>{props.addedBlogTitle}</p>
            {/* <p id='single-bookmark'>{bookmarks.title}</p> */}

            
            <p id='single-bookmark'>trrtryerr </p>

        </div>
    );
};

export default Bookmarks;