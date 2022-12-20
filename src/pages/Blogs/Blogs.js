import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import deleteBlog from '../../redux/thunk/blogs/removeBlog';

const Blogs = ({blog}) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
const {_id, img, title , description} = blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0,250)}</p>
    <div className="card-actions justify-center">
    {!pathname.includes("manage-blogs") && (
          <button
            title='Add to wishlist'
            className='bg-gray-500  py-1 px-2 rounded-full'
          >
           Details
          </button>
        )}
        {pathname.includes("manage-blogs") && (
          <div className="flex justify-between gap-4">
            <button className="border-none px-3 bg-teal-500 text-white p-1  rounded-full">Update Post</button>
            <button
            
            onClick={() => dispatch(deleteBlog(_id))}
            className='border-none px-3 bg-red-500 text-white p-1 rounded-full'
          >
            <p>Remove</p>
          </button>

          </div>
        )}
    </div>
  </div>
</div>
    );
};

export default Blogs;