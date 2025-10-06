import { React, useRef, useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Title from '../components/Title';
import AnimateImages from '../components/AnimateImages';


const Gallery = () => {

  const [showImage, setShowImage] = useState({img: "", i: 0})

  const handleClick = (img, i) => {
    setShowImage({img, i})
    console.log(img, i)
  }

  const images = [
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/multicolor_oyeevr.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/roc_ateauu.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/peachone_yonh67.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/blonde_cvvvc3.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/ginger_nh9idb.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/demon_slayer_caw97w.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/scarlet_lqwfrp.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/red_cbgvq9.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/millie_jc7krg.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/straight_ho5xgi.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/blonde_rnpnsi.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/cathy.jpg_k2tit9.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/alex_a5okil.jpg",
  ]

  return(
    <>
    <Title title="THE" subtitle="GALLERY" />
    {showImage.img && 
      <div style={{
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100vh", width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img src={showImage.img} style={{width: "auto", maxWidth: "90%", maxHeight: "90%"}} alt='' />
      </div>
    }
    <div style={{padding: "1rem"}}>
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
    </>
  )
}

export default Gallery