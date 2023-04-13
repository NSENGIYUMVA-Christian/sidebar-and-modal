import React from 'react'
import { useGlobalContext } from './context'
import {FaBars} from "react-icons/fa"
const Home = () => {
const {openModal,openSideBar} = useGlobalContext()


  return (
    <main>
        <button onClick={openSideBar} className="sidebar-toggle" ><FaBars/>
        </button>
        <button onClick={openModal} className="btn" >Show modal
        </button>
    </main>
  )
}

export default Home