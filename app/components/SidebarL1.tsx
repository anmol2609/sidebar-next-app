"use client"
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { FiHome, FiSettings, FiUser, FiLayers,FiBarChart2, FiMessageCircle,FiGrid,FiRepeat } from "react-icons/fi";
import { GiSunflower } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import ThemeContext from "./../ThemeContext";
const SidebarL1 = () => {
  
  //const[theme,setTheme]=useState("light")
  const {theme, setTheme} = useContext(ThemeContext);

  //console.log(data,"sdfsaf")
  
  return (
    <aside className={clsx(
      "h-screen w-[100px] p-2 bg-gray-200 border-r shadow-2xl rounded-lg ",
      theme === "light" ? "bg-white text-gray-800" : "text-white bg-gray-800"
    )}>
        <nav className="h-full flex flex-col ">
        <div className="ml-auto mr-auto cursor-pointer">
          <GiSunflower size={"80px"} color={theme == "dark" ? "yellow" : "black"} onClick={()=>setTheme(theme === "light" ? "dark" : "light")}/>
        </div>
        <ul className="flex-1 ml-auto mr-auto mt-4">
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><Link href="/home"><FiHome size={"30px"}/></Link></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><FiMessageCircle  size={"30px"}/></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><FiGrid   size={"30px"}/></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><LuUsers2  size={"30px"}/></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><FiLayers size={"30px"}/></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><FiSettings size={"30px"}/></li>
          <li className=" cursor-pointer hover:bg-slate-400 p-4 rounded-md"><FiBarChart2  size={"30px"}/></li>
        </ul>
        <div className=" border-t p-3 flex">
          <ul className=" ml-auto mr-auto mt-4">
            <li><FiRepeat className=" mt-4" size={"30px"}/></li>
            <li><FiMessageCircle className=" mt-4" size={"30px"}/></li>
            <li><CgProfile className=" mt-4"  size={"30px"}/></li>
          </ul>
        </div>
          
        </nav>
    </aside>
);
};

export default SidebarL1;
