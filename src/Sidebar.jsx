import React from 'react'
import logo from "./assets/logo.png"
import {social,links} from "./data"
import {FaTimes} from "react-icons/fa"
import {useGlobalContext} from "./context"
const Sidebar = () => {
   const{isSideBarOpen,closeSideBar} = useGlobalContext()
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
<div className="sidebar-header">
    <img src={logo} alt="logo" className="logo"/>
    <button className="close-btn" onClick={closeSideBar} >
        <FaTimes/>
    </button>
</div>
<ul className="links">
    {links.map((link)=>{
        const {id,url,text,icon} = link
        return <li key={id} >
            <a href={url} >{icon}{text}</a>
        </li>
    })}
</ul>
<ul className="social-links">
    {social.map((link)=>{
        const {id,url,icon} = link
        return <li key={id} >
            <a href={url} target='_blank'>{icon}</a>
        </li>
    })}
</ul>
    </aside>
  )
}

export default Sidebar