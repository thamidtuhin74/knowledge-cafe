import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import "./BlogPage.css";
import Sidebar from './Sidebar/Sidebar';



const BlogPage = () => {

    const [blogs,setBlogs] = useState([]);

    
    useEffect(()=>{
        fetch("/public/faka-data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    const [totalTime,setTotalTime] = useState(0);

    const markAsReadhandler = (blog) =>{
        setTotalTime(totalTime+parseInt(blog.time));
    }
    

    

    return (
        <div className='blog-page-container'>
            <div className="blogs">
                {
                    blogs.map(blog=> <Blog
                         blog={blog}
                         key = {blogs.id}
                         markAsReadhandler = {markAsReadhandler}
                         ></Blog>)
                }
            </div>
            <div className="sidebar">
                <Sidebar totalTime={totalTime}></Sidebar>
            </div>
            
        </div>
    );
};

export default BlogPage;