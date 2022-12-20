import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../redux/thunk/blogs/loadBlogsData';
import Header from '../Header/Header';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const blogs = useSelector((state) =>state.blogs)
    console.log(blogs);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadBlogsData())
    },[])
    return (
        <div>
         <Header/>
        <div className="grid grid-cols-3 gap-8 justify-items-center mt-8">
        {
            blogs.map(blog => <Blogs blog={blog} key={blog._id}/> )
         }
        </div>
  
        </div>
    );
};

export default Home;