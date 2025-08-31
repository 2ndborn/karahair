import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImagePanel = ({ paragraphs }) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const { scrollYProgress: scroll1 } = useScroll({ target: ref1, offset: ["start end", "end start"] });
    const { scrollYProgress: scroll2 } = useScroll({ target: ref2, offset: ["start end", "end start"] });
    const { scrollYProgress: scroll3 } = useScroll({ target: ref3, offset: ["start end", "end start"] });

    const opacity1 = useTransform(scroll1, [0, 0.5, 1], [0, 1, 0]);
    const opacity2 = useTransform(scroll2, [0, 0.5, 1], [0, 1, 0]);
    const opacity3 = useTransform(scroll3, [0, 0.5, 1], [0, 1, 0]);

    const combined = [
        { ...paragraphs[0], ref: ref1, opacity: opacity1 },
        { ...paragraphs[1], ref: ref2, opacity: opacity2 },
        { ...paragraphs[2], ref: ref3, opacity: opacity3 },
    ];

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {combined.map(({ id, image, opacity }) => (
                <motion.img
                    key={id}
                    src={image}
                    alt={`image-${id}`}
                    style={{
                        position: "absolute",
                        top: 0, left: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default ImagePanel