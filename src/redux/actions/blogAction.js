import {  ADD_BLOG, GET_BLOGS, REMOVE_BLOG,  } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type : GET_BLOGS,
        payload : data
    }
}
export const addBlog = (blog) => {
    return {
        type : ADD_BLOG,
        payload : blog
    }
}
export const removeBlog = (id) => {
    return {
        type : REMOVE_BLOG,
        payload : id
    }
}