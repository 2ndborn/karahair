import { useRef } from 'react';
import {useScroll, useTransform} from 'framer-motion';
import styles from '../styles/Gallery.module.css'

const ScrollAnimatedComponentTwo = ({
    content

}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0,1], [1,0.85]);
    const opacity = useTransform(scrollYProgress, [0,1], [1,0]);

    const {scrollYProgress: contentYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(contentYProgress, [0,1], [-250, 250]);
    const contentOpacity = useTransform(contentYProgress,[0.25,0.5,0.75], [0,1,0])

    return (
        <section className={styles.sec4} >
            <motion.div className={styles.imageContainer2} ref={sec4Ref} style={{ scale: sec4Scale }}>
                <img className={styles.curlyImage} src={content.image} alt='curly hair' />
                <motion.div className={styles.secFourOverlay} style={{ opacity: sec4Opacity }} />
            </motion.div>
            <motion.div
                className={styles.para4}
                style={{ y: paraY, opacity: paraYOpacity }}
            >
                <motion.div className={styles.innerContainer} style={{ opacity: sec4Opacity }}>
                    <p>
                        <strong>I’m all about pushing boundaries and raising
                            standards</strong> to ensure the future of hairdressing
                        is diverse, skilled, and fearless.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ScrollAnimatedComponentTwo