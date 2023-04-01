import React from 'react';
import './Bookmarks.css'

const Bookmarks = (props) => {
    const bookmarks = props.bookmarks;
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
                title.map(t => <p id='single-bookmark'>{t} </p>)
            }

        </div>
    );
};

export default Bookmarks;