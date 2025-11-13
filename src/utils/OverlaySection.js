import { motion } from "framer-motion";
import styles from "../styles/Services.module.css";
import { useState } from "react";

export const OverlaySection = ({ id, children, onClose }) => {
    const [background, setBackground] = useState(false);

    const handleToggle = () => {
        setBackground(prev => !prev)
    }
    return (
        <motion.div>
            <motion.div
                layoutId={id}
                className={`${!background ? styles.overlay: styles.overlayLight}`}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <motion.div className={styles.overlayContent}>
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        type="button"
                        aria-label="Close overlay"
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                    <button
                        className={styles.lightButton}
                        onClick={handleToggle}
                        type="button"
                        aria-label={background ? "Switch to dark mode" : "Switch to light mode"}
                    >
                        {background ? (<i className="fa-solid fa-moon" aria-hidden="true"></i>) : (<i className="fa-solid fa-sun" aria-hidden="true"></i>)}
                    </button>
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}