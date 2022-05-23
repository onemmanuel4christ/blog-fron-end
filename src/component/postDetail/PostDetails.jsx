import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './postdetail.css'
import axios from '../../axios'
import { Context } from '../../context/Context';

const PostDetails = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState([]);
  const PF = "http://localhost:5000/images/"
  const { user } = useContext(Context);
  const [ title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(()=>{
    const getPost = async () =>{
      const res = await axios.get(`/posts/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    } 
    getPost()
  }, [path]);

  const handleDelete = async () => {
    try {
        await axios.delete(`/posts/${post._id}`, {
          data:{username:user.username}
        });
        window.location.replace("/")
    } catch (error) {
      
    }
  };
  const handleUpdate = async () =>{
    try {
      await axios.put(`/posts/${post._id}`, {
        username:user.username, 
        title, 
        desc,
      });
      // window.location.reload();
      setUpdateMode(false)
  } catch (error) {
    
  }
  }

  return (
    <div className='singlepost'>
       <div className="singlepostWrapper">
         {post.photo && (
            <img src={PF +post.photo} 
              alt="" 
              className="singlepostImg" />
         )}
          {
            updateMode ? 
            <input 
                  type="text" 
                  value={title} 
                  className="singlepostTitleInput"
                  autoFocus
                  onChange={(e) =>setTitle (e.target.value)}

              /> 
            : 
            (

                <h1 className="singlepostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() =>setUpdateMode(true)}></i>
                        <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                        </div>                

                    )}
              </h1>
              )
          }
            <div className="singlePostInfo">
              <Link  to={`/?user=${post.username}`} className="link">
                  <span className="singlePostAuthor">Author: <b>{ post.username }</b></span>
              </Link>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea className='singlePostDescInput' value={desc}
            onChange={(e) =>setDesc(e.target.value)}
            />: 
              <p className="singlePostDesc"> { desc } </p>
            }
            {updateMode &&(
              <button className='singlePostButton' onClick={handleUpdate}>Update</button>
            )
            }
        </div>
    </div>
  )
}

export default PostDetails