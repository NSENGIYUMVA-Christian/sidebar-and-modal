
import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children})=>{
    // state to manage sidebar 
 const [isSideBarOpen, setIsSideBarOpen] = useState(false)
 // state to manage modal
 const [isModalOpen, setIsModalOpen] = useState(false)

 // functionality to handle open sidebar
 const openSideBar = ()=>{
    setIsSideBarOpen(true)
 }

  // functionality to handle close sidebar
  const closeSideBar = ()=>{
    setIsSideBarOpen(false)
 }
 // functionality to handle open modal
 const openModal = ()=>{
    setIsModalOpen(true)
 }

  // functionality to handle close modal
  const closeModal = ()=>{
    setIsModalOpen(false)
 }

    return <AppContext.Provider value={{isSideBarOpen,isModalOpen,openModal,openSideBar,closeModal,closeSideBar}} >
   {children}
    </AppContext.Provider>
}

// our custom hook
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}