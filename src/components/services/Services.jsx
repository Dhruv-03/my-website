import "./services.scss";
import { animate, motion } from "framer-motion";

const variants = {
    inital: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}
// initial="inital" whileInView="animate"
const Services = () => {
    return <motion.div className="services" variants={variants} initial="inital" whileInView="animate" >
        <motion.div className="textContainer" variants={variants} >
            <p>
                I focus on helping your brand grow
                <br /> and move forward.
            </p>
            <hr />
        </motion.div>
      
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae accusantium eos culpa est, autem minima, provident repudiandae vero dignissimos optio nobis doloremque dolores id, hic placeat et quibusdam deleniti.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae accusantium eos culpa est, autem minima, provident repudiandae vero dignissimos optio nobis doloremque dolores id, hic placeat et quibusdam deleniti.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae accusantium eos culpa est, autem minima, provident repudiandae vero dignissimos optio nobis doloremque dolores id, hic placeat et quibusdam deleniti.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae accusantium eos culpa est, autem minima, provident repudiandae vero dignissimos optio nobis doloremque dolores id, hic placeat et quibusdam deleniti.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
}

export default Services;