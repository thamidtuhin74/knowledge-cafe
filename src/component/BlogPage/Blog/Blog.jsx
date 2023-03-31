import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = () => {

    const [blog,setBlog] = useState([]);

    useEffect(()=>{
        fetch("/public/faka-data.json")
        .then(res => res.json())
        .then(data => setBlog(data))

    },[])

    console.log('blog :',blog);
    return (
        <div className='blog-wrapper'>
            {/* <img res={}/> */}
            
        </div>
    );
};

export default Blog;