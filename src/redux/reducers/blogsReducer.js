import { ADD_BLOG, GET_BLOGS, REMOVE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
  };

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
        return {
          ...state,
          blogs: action.payload,
        }
        case ADD_BLOG:
          return {
            ...state,
            blogs: [...state.blogs, action.payload],
          }
        case REMOVE_BLOG:
          return {
            ...state,
            blogs: state.blogs.filter(
              (blog) => blog._id !== action.payload
            ),
          };
        default:
            return state;
  }
}

export default blogReducer;