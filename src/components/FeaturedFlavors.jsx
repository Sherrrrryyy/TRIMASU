import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import doubleLayer from "../assets/Double layer.png";
import doubleLayer2 from "../assets/Double layer 2.png";

export default function FeaturedFlavors() {
  // Use only last two images for carousel
  const images = [
    { id: 1, image: doubleLayer },
    { id: 2, image: doubleLayer2 },
  ];

  return (
    <section className="py-12 bg-[#f7f7f7] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Where every bite tells a story</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
      <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
        Handcrafted with love and premium ingredients, our gelato brings the authentic taste of Italy to your
        doorstep.
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0} // No space between slides
        className="w-screen h-screen mx-auto" // Full width and height
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <img
              src={item.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover" // Full width and height with proper scaling
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}