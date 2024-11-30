"use client"
import React, { useState,useContext } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { FiPlus, FiHome, FiSettings, FiUser, FiLayers,FiBarChart2, FiMessageCircle,FiGrid,FiRepeat, FiMinus } from "react-icons/fi";
import { GiSunflower } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FcCandleSticks, FcSerialTasks } from "react-icons/fc";
import { RiTaskLine } from "react-icons/ri";
import { BsFillProjectorFill } from "react-icons/bs";
import { GoProjectSymlink, GoProjectTemplate } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import ThemeContext from "./../ThemeContext";
const SidebarL2 = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [homeAccordian,setHomeAccordian]=useState(false)
    const [dashboardAccordian,setDashboardAccordian]=useState(false)
    const [projectsAccordian,setProjectsAccordian]=useState(false)
    const [tasksAccordian,setTasksAccordian]=useState(false)
    const [settingsAccordian,setSettingsAccordian]=useState(false)
    const [tabChange,setTabChange]=useState(false)
    const onHomeAccordianHandler = () => {
        // Toggle accordion state
        setHomeAccordian(!homeAccordian);
    };
    const onDashboardAccordianHandler = () => {
        // Toggle accordion state
        setDashboardAccordian(!dashboardAccordian);
    };
    const onProjectsAccordianHandler = () => {
        // Toggle accordion state
        setProjectsAccordian(!projectsAccordian);
    };
    const onTasksAccordianHandler = () => {
        // Toggle accordion state
        setTasksAccordian(!tasksAccordian);
    };
    const onSettingsAccordianHandler = () => {
        // Toggle accordion state
        setSettingsAccordian(!settingsAccordian);
    };

    const onTabChangeHandle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>,val: number) => {
        // Toggle accordion state
        val == 1 && setTabChange(false);
        val == 2 && setTabChange(true);
    };

  return (
    <aside 
    className={clsx(
        "h-screen w-[350px] p-2 bg-gray-200 border-r shadow-2xl rounded-lg ",
        theme === "light" ? "bg-white text-gray-800" : "text-white bg-gray-800"
      )}>
        <nav className="h-full flex flex-col ">
        <div className="flex">
          <p className="text-2xl font-bold">Overview</p>
        </div>
        <div className="p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
          />
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="me-2" onClick={(e)=>onTabChangeHandle(e,1)}>
                    <a href="#" className= {clsx("inline-block p-4" ,tabChange ? " border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-slate-300 dark:hover:text-slate-300" : "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500")}>My Account</a>
                </li>
                <li className="me-2" onClick={(e)=>onTabChangeHandle(e,2)}>
                    <a href="#" className= {clsx("inline-block p-4" ,!tabChange ? " border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-slate-300 dark:hover:text-slate-300" : "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500")} aria-current="page">Shared with me</a>
                </li>
            </ul>
        </div>
        {
        !tabChange ?
        <ul className="flex-1 p-2">
          <li className="">
            <Link href="/home">
            <div className={clsx("flex justify-between",homeAccordian && "bg-gray-200 cursor-pointer hover:bg-slate-300 rounded-md")}>
                <div className="flex" onClick={onHomeAccordianHandler}>
                <FiHome className="m-2" size={"30px"}/><p className="m-2 font-bold text-xl"> Home </p>
                </div>
                {!homeAccordian ? <FiPlus className="m-2" size={"30px"} /> : <FiMinus className=" m-2" size={"30px"} />}
            </div>
            </Link>
            {
                homeAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <Link href="/home/sub-menu-1"><p className="pl-4 mt-4"> Sub Menu Item </p></Link>
                        </li>
                        <li>
                            <Link href="/home/sub-menu-2"><p className="pl-4 mt-4"> Sub Menu Item </p></Link>
                        </li>
                        
                    </ul>
                )
            }
          </li>
          <li className="">
            <div className={clsx("flex justify-between",dashboardAccordian && "bg-gray-200 cursor-pointer hover:bg-slate-300 rounded-md")}>
                <div className="flex" onClick={onDashboardAccordianHandler}>
                <MdOutlineSpaceDashboard className="m-2" size={"30px"}/><p className="m-2 font-bold text-xl"> Dashboard </p>
                </div>
                {!dashboardAccordian ? <FiPlus className="m-2" size={"30px"} /> : <FiMinus className="m-2" size={"30px"} />}
            </div>
            
            <div>
            {
                dashboardAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className={clsx("flex justify-between",projectsAccordian && "bg-gray-200 cursor-pointer hover:bg-slate-300 rounded-md")}>
                <div className="flex" onClick={onProjectsAccordianHandler}>
                <GoProjectSymlink className=" m-2" size={"30px"}/><p className=" m-2 font-bold text-xl"> Projects </p>
                </div>
                {!projectsAccordian ? <FiPlus className=" m-2" size={"30px"} /> : <FiMinus className=" m-2" size={"30px"} />}
            </div>
            
            <div>
            {
                projectsAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <Link href="/tasks">
                <div className={clsx("flex justify-between",tasksAccordian && "bg-gray-200 cursor-pointer hover:bg-slate-300 rounded-md")}>
                    <div className="flex" onClick={onTasksAccordianHandler}>
                    <RiTaskLine className="m-2" size={"30px"}/><p className="m-2 font-bold text-xl"> Tasks </p>
                    </div>
                    {!tasksAccordian ? <FiPlus className="m-2" size={"30px"} /> : <FiMinus className="m-2" size={"30px"} />}
                </div>
            </Link>
            <div>
            {
                tasksAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className={clsx("flex justify-between",settingsAccordian && "bg-gray-200 cursor-pointer hover:bg-slate-300 rounded-md")}>
                <div className="flex" onClick={onSettingsAccordianHandler}>
                <FiSettings className=" m-2" size={"30px"}/><p className=" m-2 font-bold text-xl"> Settings </p>
                </div>
                {!settingsAccordian ? <FiPlus className=" m-2" size={"30px"} /> : <FiMinus className=" m-2" size={"30px"} />}
            </div>
            
            <div>
            {
                settingsAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
        </ul>
        :
        <ul className="flex-1 p-2">
          <li className="">
            <div className=" flex justify-between ">
                <div className="flex" onClick={onHomeAccordianHandler}>
                <FiHome className=" mt-4" size={"30px"}/><p className="pl-4 mt-4 font-bold text-xl"> Home with me </p>
                </div>
                {!homeAccordian ? <FiPlus className=" mt-4" size={"30px"} /> : <FiMinus className=" mt-4" size={"30px"} />}
            </div>
            
            <div>
            {
                homeAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className=" flex justify-between ">
                <div className="flex" onClick={onDashboardAccordianHandler}>
                <MdOutlineSpaceDashboard className=" mt-4" size={"30px"}/><p className="pl-4 mt-4 font-bold text-xl"> Dashboard me </p>
                </div>
                {!dashboardAccordian ? <FiPlus className=" mt-4" size={"30px"} /> : <FiMinus className=" mt-4" size={"30px"} />}
            </div>
            
            <div>
            {
                dashboardAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className=" flex justify-between ">
                <div className="flex" onClick={onProjectsAccordianHandler}>
                <GoProjectSymlink className=" mt-4" size={"30px"}/><p className="pl-4 mt-4 font-bold text-xl"> Projects with me</p>
                </div>
                {!projectsAccordian ? <FiPlus className=" mt-4" size={"30px"} /> : <FiMinus className=" mt-4" size={"30px"} />}
            </div>
            
            <div>
            {
                projectsAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className=" flex justify-between ">
                <div className="flex" onClick={onTasksAccordianHandler}>
                <RiTaskLine className=" mt-4" size={"30px"}/><p className="pl-4 mt-4 font-bold text-xl"> Tasks with me</p>
                </div>
                {!tasksAccordian ? <FiPlus className=" mt-4" size={"30px"} /> : <FiMinus className=" mt-4" size={"30px"} />}
            </div>
            
            <div>
            {
                tasksAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
          <li className="">
            <div className=" flex justify-between ">
                <div className="flex" onClick={onSettingsAccordianHandler}>
                <FiSettings className=" mt-4" size={"30px"}/><p className="pl-4 mt-4 font-bold text-xl"> Settings with me</p>
                </div>
                {!settingsAccordian ? <FiPlus className=" mt-4" size={"30px"} /> : <FiMinus className=" mt-4" size={"30px"} />}
            </div>
            
            <div>
            {
                settingsAccordian && (
                    <ul className="pl-4">
                        <li className="flex justify-between items-center">
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        <li>
                            <p className="pl-4 mt-4"> Sub Menu Item </p>
                        </li>
                        
                    </ul>
                )
            }
            </div>
          </li>
        </ul>
        }
        
        
        </nav>
    </aside>
);
};

export default SidebarL2;
