import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import "./BlogPage.css";

// import React, { useEffect, useState } from 'react';


const BlogPage = () => {

    const [blogs,setBlogs] = useState([]);

    // useEffect
    useEffect(()=>{
        fetch("/public/faka-data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
        // .then(data => console.log(data));

    },[])

    

    return (
        <div className='blog-page-container'>
            <div className="blogs">
                {
                    blogs.map(blog=> <Blog blog={blog}></Blog>)
                }
            </div>
            <div className="sidebar">
                sidebar
            </div>
            
        </div>
    );
};

export default BlogPage;