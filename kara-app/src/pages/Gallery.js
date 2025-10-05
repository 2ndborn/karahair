import { React} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Gallery = () => {

  const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/multicolor_oyeevr.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/alex_a5okil.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/roc_ateauu.jpg",
    "https://res.cloudinary.com/ddfubj6vf/image/upload/q_auto,f_auto,w_600,c_fill,g_face/alex_a5okil.jpg",
  ]

  return(
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Gallery