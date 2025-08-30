import { useRef } from "react";
import {useInView} from "framer-motion";


export function useScrollReveal(margin = "-40% 0px -40% 0px", threshold = 0.1) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin, threshold });
    return { ref, inView }
}