import { React, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Title from '../components/Title';
import AnimateImages from '../components/AnimateImages';


const Gallery = () => {

  const [showImage, setShowImage] = useState({img: "", i: 0})

  const handleClick = (img, i) => {
    setShowImage({img, i})
    console.log(img, i)
  }

  const handleClose = () => {
    setShowImage({img: "", i: 0})
  }

  const handleNext = () => {
    const nextIndex = showImage.i + 1;
    if (nextIndex < images.length) {
      setShowImage({ img: images[nextIndex], i: nextIndex });
    }
  }

  const handlePrev = () => {
    const prevIndex = showImage.i - 1;
    if (prevIndex < images.length) {
      setShowImage({ img: images[prevIndex], i: prevIndex });
    }
  }

  const images = [
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/multicolor_svp5oc.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/roc_ateauu.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/peachone_yonh67.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/ginger_nh9idb.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/demon_slayer_caw97w.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/scarlet_lqwfrp.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/red_cbgvq9.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/millie_jc7krg.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/straight_ho5xgi.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/blonde_rnpnsi.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/cathy.jpg_k2tit9.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/alex_a5okil.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251022-WA0039_rt9pvu",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251022-WA0042_esavhf",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/purple_o8a8on",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251105-WA0003_fer8af",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251102-WA0001_cjzvvo",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251105-WA0001_ybju0c",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0017_aivgyu",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0016_n0c7rg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0006_fuiv5r",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0007_nzqgfp",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0004_qvjozu",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0003_huswfn",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/IMG-20251024-WA0013_z1jbgh",
  ]

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return(
    <>
    <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, easeOut: "easeOut" }}
      >
      <Title title="THE" subtitle="GALLERY" />
      <AnimatePresence mode='wait'>
      {showImage.img &&
        <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
          height: "100vh", width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: 'hidden',
          zIndex: 9999
        }}>
          <button
            onClick={handleClose}
            style={{
              position: 'absolute', top: 5, right: 24, color: "#fff", background: "transparent", border: "none", fontSize: "2rem", cursor: "pointer", zIndex: 10000
            }}
            aria-label="Close overlay"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button onClick={handlePrev}
            style={{ position: "absolute", top: "50%", left: "10%", color: "#fff", fontSize: "2rem", cursor: "pointer", zIndex: 10000 }}>
            <i className="fa-solid fa-less-than"></i>
          </button>
          <button onClick={handleNext} style={{ position: "absolute", top: "50%", right: "10%", color: "#fff", fontSize: "2rem", cursor: "pointer", zIndex: 10000 }}>
            <i class="fa-solid fa-greater-than"></i>
          </button>
          <img src={showImage.img} style={{ width: "auto", maxWidth: "90vw", maxHeight: "85vh", borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.7)" }} alt='' />
        </motion.div>
      }
      </AnimatePresence>
      <div style={{ padding: "1rem", marginBottom: "50px" }} id='next-section'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            {images.map((src, i) => (
              <AnimateImages key={i} src={src} delay={i * 0.1} onClick={() => handleClick(src, i)} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      </motion.div>
    </>
  )
}

export default Gallery