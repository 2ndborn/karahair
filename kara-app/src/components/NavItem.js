import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavItem = ({to, label, delay}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
        >
            <NavLink to={to} className={styles.NavLink}>{label}</NavLink>
        </motion.div>
    )
}

export default NavItem