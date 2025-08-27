import { useRef } from "react";
import {useScroll, useTransform, useSpring} from "framer-motion";

export function useScrollFade(offset = ["start end, end start"], range = [0, 1]) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset});

    const rawOpacity = useTransform(scrollYProgress, range, [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 30,
        damping: 25,
        mass:1.2,
    })

    return { ref, opacity }
}