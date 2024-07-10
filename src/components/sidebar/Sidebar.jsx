import "./sidebar.scss"
import Link from "./link/Link"
import Togglebutton from "./togglebutton/Togglebutton"
import { useState } from "react"
import {motion} from "framer-motion";

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
            
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay: 0.1,
            type:"spring",
            stiffness: 500,
            damping: 50,
        }
    }
};
const Sidebar = ()=>{

    const [open, setOpen] = useState(false);


    return <motion.div className="sidebar" animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants} >
            <Link />
        </motion.div>
        <motion.div>
        <Togglebutton setOpen={setOpen} />
        </motion.div>
    </motion.div>
}

export default Sidebar;