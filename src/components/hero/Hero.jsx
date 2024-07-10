import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
    initial:{
      x: -500,
      opacity: 0
    },
    animate:{
      x: 0,
      opacity: 1,
      transition:{
        duration: 1,
        staggerChildren: 0.1,  
      }
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
  };
const sliderVariants = {
    initial:{
      x: 0,
      
    },
    animate:{
      x: "-238%",
      transition:{
        repeat: Infinity,
        duration: 15,
        repeatType: "mirror"
      }
    },
   
  };

const Hero = ()=>{
    return <div className="hero">
        <div className="wrapper">

        <motion.div className="textContainer" variants = {textVariants} initial="initial" animate="animate">
            <motion.h2 variants = {textVariants} >DHRUV KUMAR SINGH</motion.h2>
            <motion.h1 variants = {textVariants} >Front-End Developer</motion.h1>
            <motion.div variants = {textVariants} className="buttons">
                <motion.button variants = {textVariants}> <a href="#Projects">See the latest works</a> </motion.button>
                <motion.button variants = {textVariants}><a href="#Contact">Contact Me</a></motion.button>
            </motion.div>
            <motion.img variants = {textVariants} src="/scroll.png" alt="" animate="scrollButton" />
        </motion.div>
        </div>
        <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
            Front End Developer
        </motion.div>
        <div className="imageContainer">
            <img src="/developer.png" alt="" />
        </div>
    </div>

}

export default Hero;