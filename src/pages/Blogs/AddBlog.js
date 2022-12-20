import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addNewBlog from '../../redux/thunk/blogs/addNewBlog';
import './Blog.css'
const AddBlog = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSumbit = (data) => {
        const blog = {
            title: data.title,
            description: data.description,
            img: data.image,
         
          };
          dispatch(addNewBlog(blog))
          console.log(data);
    };

  
    return (
   <div className="bg-black py-16">
       <form onSubmit={handleSubmit(onSumbit)}>
        <h1 className="text-2xl font-medium text-white text-center">Post a blog</h1>
        <label>Blog Title</label>
        <input {...register("title")} />
        <label>Picture</label>
        <input {...register("image")} />
  
        <label>Description</label>
        <textarea className="w-full h-24 rounded"  {...register("description")} />
        <input type="submit" />
      </form>
   </div>
    );
};

export default AddBlog;