import Post from '../post/Post'
import './blogpost.css'

const BlogPost = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map((p) =>(
       <Post post={p}/>
      ))}

    </div>
  ) 
}

export default BlogPost