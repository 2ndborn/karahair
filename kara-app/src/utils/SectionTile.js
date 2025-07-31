import {motion} from 'framer-motion';

export const SectionTile = ({
    id,
    children,
    imageSrc, 
    onClick,
    tileClassName,
    imageClassName
}) => {
    return (
        <motion.div
            layoutId={id}
            onClick={() => onClick(id)}
            className={tileClassName}
        >
            <motion.img
                className={imageClassName}
                src={imageSrc}
                alt="Curly model"
                initial={{ scale: 1, opacity: 1 }}
                animate={isToggled === 'hair' ? { scale: 2, opacity: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
                {children}
        </motion.div>
    )
}