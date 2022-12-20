
import { addBlog } from "../../actions/blogAction"

const addNewBlog = (blog) => {
    return async(dispatch, getState) => {
        const res = await fetch('http://localhost:5000/add-blog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = await res.json()
        if(data.acknowledged){
            dispatch(addBlog({
                _id : data.insertedId,
                ...blog
            }))
        }
    }
}

export default addNewBlog;