import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import doubleLayer from "../assets/Double layer.png";
import doubleLayer2 from "../assets/Double layer 2.png";

export default function FeaturedFlavors() {
  // Use only last two images for carousel
 const products = [
    {
      id: 1,
      name: "Single Layer Tiramisu",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      description: "Our signature flavor combines mascarpone, espresso, and cocoa for an authentic Italian experience.",
    },
    {
      id: 2,
      name: "Double Layer",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      description: "Fresh strawberries blended into our creamy base, creating a perfect balance of sweetness and tang.",
    },
    {
      id: 3,
      name: "Single Layer",
      price: 5.49,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      description: "Rich chocolate gelato with roasted hazelnuts, inspired by Italy's favorite chocolate spread.",
    },
     {
      id: 3,
      name: "Single Layer",
      price: 5.49,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      description: "Rich chocolate gelato with roasted hazelnuts, inspired by Italy's favorite chocolate spread.",
    }
  ]

  return (
    <section className="py-12 bg-[#f7f7f7] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Where every bite tells a story</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
      <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
        Handcrafted with love and premium ingredients, our gelato brings the authentic taste of Italy to your
        doorstep.
      </p>
     <div className="grid  grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-48 gap-10 p-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image with Quick View */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
      </div>
            </div>
          ))}
        </div>
    </section>
  );
}