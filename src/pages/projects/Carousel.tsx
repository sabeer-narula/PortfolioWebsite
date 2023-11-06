import { useState } from "react";
import { Modal } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

type CarouselProp = {
  images: string[];
  isMobile: boolean;
};

function Carousel({ images, isMobile }: CarouselProp) {
  const [selectedImg, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const slides = images.map((image: string, index: number) => (
    <SwiperSlide
      tag="li"
      key={`carousel-img-${index}`}
      onClick={() => {
        handleOpen();
        setSelectedImage(image);
      }}
      className="flex justify-center items-center h-[500px]"
    >
      <img
        src={image}
        className="rounded-lg shadow-lg max-w-full max-h-[400px]"
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectCreative]}
        tag="section"
        wrapperTag="ul"
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: ["-120%", 0, -500],
          },
          next: {
            translate: ["120%", 0, -500],
          },
        }}
        grabCursor={true}
        loop={true}
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
      >
        {slides}
      </Swiper>
      <Modal
        open={open}
        onClose={handleClose}
        className={`${
          isMobile ? "p-10" : "p-40"
        } flex items-center justify-center`}
      >
        <img
          src={selectedImg}
          className="rounded-lg shadow-lg max-w-full max-h-full"
        />
      </Modal>
    </>
  );
}

export default Carousel;
