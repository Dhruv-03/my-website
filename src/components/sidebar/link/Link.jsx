// import "../sidebar.scss";
import {motion} from "framer-motion";
const variants = {
    open:{
        transition:{
            staggerChildren: 0.15,
           
        }
    },
    closed: {
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open:{
        y:0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity:0
    }
}

const Link = ()=>{
    const linkitems = ["Homepage", "Services", "Projects", "Contact"];

    return <motion.div className="links" variants={variants}>
        {linkitems.map((item)=>{
            return <motion.a href={`#${item}`} key={item}  variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.95}} >{item}</motion.a>
        })}
    </motion.div>
}

export default Link;