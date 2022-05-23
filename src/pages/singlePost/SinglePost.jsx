import BlogSide from "../../component/BlogSide"
import PostDetails from "../../component/postDetail/PostDetails"
import "./singlePost.css"


const SinglePost = () => {
  return (
    <div className="single">
   <PostDetails /> 
   <BlogSide /> 
  </div>
  )
}

export default SinglePost