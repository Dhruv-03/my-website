import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos molestiae iusto fuga harum deserunt sint eius veniam neque a."
    },
    {
        id: 2,
        title: "NextJS Blog",
        img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos molestiae iusto fuga harum deserunt sint eius veniam neque a."
    },
    {
        id: 3,
        title: "Vanilla JS New",
        img: "https://images.unsplash.com/photo-1719253479632-61b2fdc77a65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos molestiae iusto fuga harum deserunt sint eius veniam neque a."
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.unsplash.com/photo-1693434998054-2784e49ca563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos molestiae iusto fuga harum deserunt sint eius veniam neque a."
    }
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref});

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);


    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>

                <img src={item.img} alt="" />
                </div>
                <motion.div style={{y}} className="textContainer">
                    <h2  >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>

                </motion.div>
            </div>
        </div>
    </section>

}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar">
            </motion.div>
        </div>
        {items.map((item) => {
            return <Single item={item} key={item.id} />
        })}

    </div>
}

export default Portfolio;