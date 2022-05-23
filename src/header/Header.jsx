import "./header.css"

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Rect and Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" className="headerImg" />
    </div>
  )
}

export default Header