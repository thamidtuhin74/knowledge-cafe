import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log('Props :',props);
    console.log('blog :',props.blog);

    const {title, img,author, authorImg,date,time,tags} = props.blog; 
    
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
                        <p>{time} min read</p>
                    </div>
                
                    <h3 id='blog-title'>{title}</h3>
                    <p id='tags'>{tags}</p>
                    <a href='#'>Mark as Read</a>

                </div>
                
                
            }
            
        </div>
    );
};

export default Blog;