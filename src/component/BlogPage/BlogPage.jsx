import React from 'react';
import Blog from './Blog/Blog';
import "./BlogPage.css";

const BlogPage = () => {
    return (
        <div className='blog-page-container'>
            <div className="blogs">
                <Blog></Blog>
            </div>
            <div className="sidebar">
                sidebar
            </div>
            
        </div>
    );
};

export default BlogPage;