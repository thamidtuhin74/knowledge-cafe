import React, { useEffect, useState } from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log('Props :',props);
    console.log('blog :',props.blog);

    const markAsReadhandler = props.markAsReadhandler;
    const bookmarkHandler = props.bookmarkHandler;
    const {title, img,author, authorImg,date,time,tags,id} = props.blog; 
    
    return (
        <div className='blog-wrapper'>
            {

                <div>
                    <img src={img} alt="" />
                
                    <div className='blog-header'>
                        <div className='blog-header-left'>
                            <img src={authorImg}/>
                            <div className='author-date'>
                                <h3>{author}</h3>
                                <p>{date}</p>
                            </div>
                        </div>
                        <p>{time} min read <FontAwesomeIcon onClick={()=> bookmarkHandler(props.blog)} icon={faBookmark} /></p>
                    </div>
                
                    <h3 id='blog-title'>{title}</h3>
                    <p id='tags'>#{tags.join('  #')}</p>
                    
                    <button className='btn-markAsRead' onClick={()=>{markAsReadhandler(props.blog)}} href='/'>Mark as Read</button>

                </div>
                
                
            }
            
        </div>
    );
};

export default Blog;