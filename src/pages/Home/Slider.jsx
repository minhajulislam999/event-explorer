import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Discover Amazing Events",
    description: "Find the best tech, art, and sports events near you!",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
  },
  {
    id: 2,
    title: "Connect With Your Community",
    description: "Meet like-minded people and explore local happenings.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200",
  },
  {
    id: 3,
    title: "Never Miss An Event",
    description: "Stay updated with upcoming events in your city.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      className="w-full h-[500px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;