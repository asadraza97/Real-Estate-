import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";


const Navbar = ()=>{
    
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow= "hidden"
        }else{
            document.body.style.overflow= "auto"

        }

        return ()=>{
            document.body.style.overflow= "auto"

        }
    }, [showMobileMenu])
    return (
        <div className=" absolute top-0 left-0 w-full z-10">
            <div className=" container mx-auto flex justify-between items-center py-4 px-5 md:px-20 lg:px-32 bg-transparent ">
                <img src={assets.logo} alt="" />
            <ul className="hidden md:flex gap-7 text-white">
                <a href="#Header" className=" cursor-pointer hover:text-gray-400"> Home</a>
                <a href="#about" className=" cursor-pointer hover:text-gray-400"> About</a>
                <a href="#project" className=" cursor-pointer hover:text-gray-400"> Project</a>
                <a href="#testimonials" className=" cursor-pointer hover:text-gray-400"> Testimonials</a>
            </ul>
            <button className=" hidden md:block bg-white px-8 py-2 rounded-full"> Sign Up</button>
            <img src={assets.menu_icon} onClick={()=>setShowMobileMenu(true)} className=" md:hidden w-7 cursor-pointer" alt="" />
            
            </div>

            {/* Mobile Menu  */}

            <div className={`md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-zinc-600 transition-all ${showMobileMenu ? "fixed w-full" : "h-0 w-0"}`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className=" w-6 " alt="" />
                </div>
                <ul className=" flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <a onClick={()=> setShowMobileMenu(false)} href="#Home" className=" px-4 py-2 rounded-full inline-block text-white"> Home</a>
                    <a onClick={()=> setShowMobileMenu(false)} href="#About" className=" px-4 py-2 rounded-full inline-block  text-white"> About</a>
                    <a onClick={()=> setShowMobileMenu(false)} href="#Project" className=" px-4 py-2 rounded-full inline-block  text-white"> Project</a>
                    <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className=" px-4 py-2 rounded-full inline-block  text-white"> Testimonials</a>
                </ul>
            </div>




        </div>
    
    )
}
export default Navbar