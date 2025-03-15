import image1 from "../images/image1.jpeg"
import image2 from "../images/image2.jpeg"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import image5 from "../images/image5.jpeg"
import image6 from "../images/image6.avif"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.webp"
import image10 from "../images/image10.jpg"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const images = [
  { src: image1, title: "1" },
  { src: image2, title: "2" },
  { src: image3, title: "3" },
  { src: image4, title: "4" },
  { src: image5, title: "5" },
  { src: image6, title: "6" },
  { src: image7, title: "7" },
  { src: image8, title: "8" },
  { src: image9, title: "9" },
  { src: image10, title: "10" },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesPerSlide, setImagesPerSlide] = useState(5)

  useEffect(() => {
    const updateImagesPerSlide = () => {
      setImagesPerSlide(innerWidth < 768 ? 2 : 5)
    }

    updateImagesPerSlide()
    addEventListener("resize", updateImagesPerSlide)
    return () => removeEventListener("resize", updateImagesPerSlide)
  }, [])

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + imagesPerSlide
  )

  const nextSlide = () => {
    if (currentIndex + 5 < images.length) {
      setCurrentIndex(currentIndex + imagesPerSlide)
    } else {
      setCurrentIndex(images.length - imagesPerSlide) // Ensures last images are displayed
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(currentIndex - imagesPerSlide, 0))
    }
  }

  return (
    <div className="relative items-center flex flex-row w-full  ">
      <div className=" flex flex-row w-full h-60 space-x-8">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer flex flex-row w-[90%] sm:w-[70%] md:w-[30%] h-full "
          >
            {/* Image  */}
            <motion.img
              src={image.src}
              alt="Pictures"
              className="w-full h-full object-cover rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1, stiffness: 300 }}
            />
            <div className="absolute bottom-2 -left-2 md:-left-6">
              <h1 className="text-4xl md:text-8xl font-bold  text-stroke">
                {image.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`absolute rounded-full h-16 md:h-20 hover:bg-[#333333]
            bg-[#1a1b1b] text-white p-2 
            transform -translate-y-1/2 top-1/2 -left-4 md:-left-8
             cursor-pointer
                `}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className={`absolute rounded-full h-16 md:h-20 hover:bg-[#333333]
            bg-[#1a1b1b] text-white p-2 
            transform top-1/2 -translate-y-1/2 -right-4 md:-right-8 
             cursor-pointer
                `}
      >
        &#10095;
      </button>
    </div>
  )
}

export default Carousel
