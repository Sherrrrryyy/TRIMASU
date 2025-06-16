"use client"

import { useState, useContext } from "react"
import Single from '../assets/SINGLE layer 2.png'
import Double from '../assets/Double layer 3.png'
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { CartContext } from "../context/CartContext.jsx"; // Import CartContext

export default function ShopPage() {
  // State for quick view modal
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const { addToCart } = useContext(CartContext); // Access addToCart function from context

  // Product data
  const products = [
    {
      id: 1,
      name: "Single Layer Tiramisu",
      price: 865,
      image: Single,
      description: "Our signature flavor combines mascarpone, espresso, and cocoa for an authentic Italian experience.",
    },
    {
      id: 2,
      name: "Double Layer Tiramisu",
      price: 1050,
      image: Double,
      description: "Fresh strawberries blended into our creamy base, creating a perfect balance of sweetness and tang.",
    },

  ]

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart from context
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <Navbar />
      {/* Shop Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 mb-10 mt-16">
        <div className="container mx-auto px-4 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our TIRAMISU Shop</h1>
          <p className="text-lg mx-auto">
            Explore with more sweetness our handcrafted Italian gelato made with premium ingredients and traditional recipes.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

                {/* Quick View Button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="bg-white text-slate-800 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                  <span className="font-bold text-pink-500">Rs.{product.price}</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    handleAddToCart(product);
                    setQuickViewProduct(null); // Close quick view after adding to cart
                  }}
                  className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setQuickViewProduct(null)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 z-10 hover:bg-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Product Image */}
            <div className="md:w-1/2">
              <img
                src={quickViewProduct.image || "/placeholder.svg"}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{quickViewProduct.name}</h2>
              <p className="text-2xl font-bold text-pink-500 mb-6">Rs. {quickViewProduct.price}</p>

              <p className="text-slate-600 mb-8">{quickViewProduct.description}</p>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-slate-700 font-medium mb-2">Quantity</label>
                <div className="flex items-center">
                  <button className="w-10 h-10 bg-slate-100 rounded-l-lg flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 h-10 border-y border-slate-200 text-center text-slate-700 focus:outline-none"
                  />
                  <button className="w-10 h-10 bg-slate-100 rounded-r-lg flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  handleAddToCart(quickViewProduct)
                  setQuickViewProduct(null)
                }}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
