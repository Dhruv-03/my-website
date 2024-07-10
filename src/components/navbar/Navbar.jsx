import React from "react";
import "./navbar.scss";
import "../sidebar/Sidebar"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar  = () =>{
    return <div className="navbar" >
        {/* {Sidebar} */}
        <Sidebar />
        <div className="wrapper">
        <motion.span
        initial = {{opacity:0, scale: 0.5}}
        animate = {{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}>
            DHRUV
        </motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/dhruv-kumar-singh-11054822b/" target="_blank"><img src="/linkedin.png" alt="" /></a>
            <a href="https://github.com/Dhruv-03" target="_blank"><img src="/github.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="https://www.geeksforgeeks.org/user/dhruvks650/" target="_blank"><img src="/gfg.png" alt="" /></a>
        </div>
        </div>
        
    </div>
}

export default Navbar;