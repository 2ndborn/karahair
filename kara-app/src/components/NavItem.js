import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavItem = ({to, label, delay}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
            whileHover={{scale: 1.2}}
            style={{ marginBottom: 10 }}
        >
            <NavLink to={to} className={`${styles.NavLink} px-2`}>{label}</NavLink>
        </motion.div>
    )
}

export default NavItem