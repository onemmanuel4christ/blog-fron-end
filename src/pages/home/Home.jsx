import Header  from "../../header/Header"
import "./home.css"

import React, { useEffect, useState } from 'react'
import BlogPost from "../../component/BlogPost"
import BlogSide from "../../component/BlogSide"
import axios from '../../axios'
import { useLocation } from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation()

  useEffect(()=>{
    const fetchPosts = async () =>{
     const res = await axios.get(`/posts/${search}`)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
      <Header  />
        <div className="home"> 
          <BlogPost posts={posts}/>
          <BlogSide />
        </div>
    </>
  )
}

export default Home