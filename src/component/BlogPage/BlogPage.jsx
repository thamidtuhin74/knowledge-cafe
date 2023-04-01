import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import "./BlogPage.css";
import Sidebar from './Sidebar/Sidebar';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const BlogPage = () => {

    const [blogs,setBlogs] = useState([]);

    
    useEffect(()=>{
        fetch("/faka-data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    //reading time calculation
    const storedTime2 = JSON.parse(localStorage.getItem('total-time'));
    const [totalTime,setTotalTime] = useState(storedTime2);

    const [clickedTime,setclickedTime] = useState(0);

    const markAsReadhandler = (blog) =>{
        setclickedTime(parseInt(blog.time))
        const storedTime2 = JSON.parse(localStorage.getItem('total-time'));
        setTotalTime(storedTime2+parseInt(blog.time));
        // const storedTime2 = JSON.parse(localStorage.getItem('total-time'));
        // setTotalTime(storedTime2+parseInt(blog.time));
    }
    console.log('THis is clicked time', clickedTime)
    useEffect(()=>{
        const storedTime = JSON.parse(localStorage.getItem('total-time'));
        let time  =  storedTime + clickedTime;
        localStorage.setItem('total-time', JSON.stringify(time));

    },[totalTime])
    

    const [bookmarks,setBookmarks] = useState([]);

    useEffect(()=>{
        const storedBookmark = getShoppingCart();
        console.log('storedBookmark: ',storedBookmark);
        const savedBookmark = [];
        //step-1: get id
        for(const id in storedBookmark){
            //step-2: get product details using id
            const addedBookmark = blogs.find(blog=>blog.id===id);
            //step-3: set no of quantity that is added to cart 
            if(addedBookmark){
                const quantity = storedBookmark[id];
                addedBookmark.quantity = quantity;
                //step-4: Add the addedBookmark to the savedProduct
                savedBookmark.push(addedBookmark);
            }
            console.log('addedBookmark: ',addedBookmark);
            console.log('savedBookmark: ',savedBookmark);
        }
        //step-5: set the cart
        setBookmarks(savedBookmark)
    },[blogs])


    const bookmarkHandler = (blog)=>{
        console.log('clicked : ',blog.title);
        console.log('Quantity' ,blog.quantity);
        // setBookmarks(blog.title);

        // const addedBlogTitle = blog.title;

        const newBookmark = [...bookmarks,blog];
        setBookmarks(newBookmark);
        addToDb(blog.id);
    }
    

    

    return (
        <div className='blog-page-container'>
            <div className="blogs">
                {
                    blogs.map(blog=> <Blog
                         blog = {blog}
                         key = {blogs.id}
                         markAsReadhandler = {markAsReadhandler}
                         bookmarkHandler = {bookmarkHandler}
                         
                         ></Blog>)
                }
            </div>
            <div className="sidebar">
                <Sidebar 
                totalTime = {totalTime}
                bookmarks = {bookmarks}
                addedBlogTitle = {blogs.title}
                key = {blogs.id}
                
                ></Sidebar>
            </div>
            
        </div>
    );
};

export default BlogPage;