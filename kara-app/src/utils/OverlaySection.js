import { motion } from "framer-motion";
import styles from "../styles/Services.module.css";

export const OverlaySection = ({ id, children, onClose }) => {
    return (
        <motion.div>
            <motion.div
                layoutId={id}
                onClick={onClose}
                className={styles.overlay}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <motion.div className={styles.overlayContent}>
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}