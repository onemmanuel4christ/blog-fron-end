import { useEffect, useState } from 'react'
import './blogside.css'
import axios from '../axios'
import { Link } from 'react-router-dom'

const BlogSide = () => {
  const [cats, setCats] = useState([])

  useEffect(() =>{
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <div className='side'>
       <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://media.istockphoto.com/photos/hello-can-i-help-you-picture-id1187582500?k=20&m=1187582500&s=612x612&w=0&h=GcmFEJ4QQXhASaI7mn-6ofYUIR7AY8PcZcuQ2FXdlng=" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere quas officiis natus nam eveniet rerum quo a quisquam nulla cumque aliquam ipsum, 
         </p>   
      </div>
      <div className="sidebarItem">
      <div className="sidebarTitle">CATEGORIES</div>
          <ul className="sidebarList">
              {cats.map(c =>(
                <Link to={`/cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
                </Link>
              ))}
          </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default BlogSide