import {motion} from "framer-motion";

const Togglebutton = (props) => {
    return <button onClick={() => props.setOpen((prev) => !prev)}>
        <svg width="23" height="23" viewBox="0 0 23 23" >
            <motion.path  d="M4 18L20 18" stroke="black" stroke-width="4" stroke-linecap="round" 
            variants={
                {closed: {d: "M 2 2.5 L 20 2.5"},
                open: {d: "M 3 16.5 L 17 2.5"}
                }}/>
            <motion.path d="M 2 9.423 L 20 9.423" stroke="#000000" stroke-width="4" stroke-linecap="round"
            variants={
                {closed: {opacity: 1},
                open: {opacity: 0}
                }} />
            <motion.path d="M4 6L20 6" stroke="#000000" stroke-width="4" stroke-linecap="round" 
            variants={
                {closed: {d: "M 2 16.346 L 20 16.346"},
                open: {d: "M 3 2.5 L 17 16.346"}
                }} />
        </svg>
    </button>
}

export default Togglebutton;