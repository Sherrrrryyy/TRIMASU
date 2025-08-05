import 'swiper/css';
import 'swiper/css/pagination';
import DoubleLayer3 from '../assets/Double layer 3.png';
import Product3 from '../assets/product 3.png';

export default function FeaturedFlavors() {

 const products = [
    {
      id: 1,
      name: "Single Layer Tiramisu",
      price: 5.99,
      image: DoubleLayer3,
      description: "Our signature flavor combines mascarpone, espresso, and cocoa for an authentic Italian experience.",
    },
    {
      id: 2,
      name: "Double Layer",
      price: 4.99,
      image: Product3,
      description: "Fresh strawberries blended into our creamy base, creating a perfect balance of sweetness and tang.",
    },
     {
      id: 2,
      name: "Double Layer",
      price: 4.99,
      image: Product3,
      description: "Fresh strawberries blended into our creamy base, creating a perfect balance of sweetness and tang.",
    }

  ]

  return (
   <section className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">NEW FLAVORS</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 justify-center">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Price Tag */}
              <span className="absolute bottom-4 left-4 bg-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold shadow-lg border-4 border-white">
                ${product.price}
              </span>
              {/* Product Image */}
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ background: "transparent" }}
              />
            </div>
            {/* Buy Now Button */}
            <button
              className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}