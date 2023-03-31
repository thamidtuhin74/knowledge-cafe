import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log('Props :',props);
    console.log('blog :',props.blog);
    // console.log('key :',props.key);
    const markAsReadhandler = props.markAsReadhandler;
    const {title, img,author, authorImg,date,time,tags,id} = props.blog; 
    // const markAsReadhandler = (blog) =>{
    //     console.log('post ID : ',blog.id);
    // }
    return (
        <div className='blog-wrapper'>
            {

                <div>
                    <h1>{id}</h1>
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
                    
                    <button onClick={()=>{markAsReadhandler(props.blog)}} href='/'>Mark as Read</button>

                </div>
                
                
            }
            
        </div>
    );
};

export default Blog;