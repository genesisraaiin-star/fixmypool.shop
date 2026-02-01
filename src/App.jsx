import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Classic Logo Tee",
      price: 29.99,
      category: "Apparel",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23ffffff'/%3E%3Cg transform='translate(200,200) scale(0.6)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["S", "M", "L", "XL", "2XL"]
    },
    {
      id: 2,
      name: "Premium Hoodie",
      price: 54.99,
      category: "Apparel",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23000000'/%3E%3Cg transform='translate(200,180) scale(0.5)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["S", "M", "L", "XL", "2XL"]
    },
    {
      id: 3,
      name: "Snapback Hat",
      price: 24.99,
      category: "Accessories",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23000000'/%3E%3Cellipse cx='200' cy='280' rx='150' ry='40' fill='%23333'/%3E%3Crect x='50' y='150' width='300' height='130' rx='20' fill='%23000'/%3E%3Cg transform='translate(200,200) scale(0.35)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["One Size"]
    },
    {
      id: 4,
      name: "Sticker Pack",
      price: 9.99,
      category: "Accessories",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23f5f5f5'/%3E%3Cg transform='translate(120,120) scale(0.4)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3Cg transform='translate(280,250) scale(0.35) rotate(15)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3C/g%3E%3Cg transform='translate(150,280) scale(0.3) rotate(-10)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["Pack of 5"]
    },
    {
      id: 5,
      name: "Water Bottle",
      price: 19.99,
      category: "Accessories",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23ffffff'/%3E%3Crect x='140' y='80' width='120' height='30' rx='5' fill='%23333'/%3E%3Crect x='130' y='110' width='140' height='240' rx='15' fill='%234169E1' opacity='0.3'/%3E%3Crect x='135' y='115' width='130' height='230' rx='12' fill='none' stroke='%234169E1' stroke-width='3'/%3E%3Cg transform='translate(200,220) scale(0.35)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%23ffffff' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%23ffffff' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%23ffffff' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%23ffffff'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["32oz"]
    },
    {
      id: 6,
      name: "Tote Bag",
      price: 16.99,
      category: "Accessories",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23f5f5f5'/%3E%3Cpath d='M 120 120 L 100 100 Q 100 80 120 80 L 200 80 Q 200 60 220 60 Q 240 60 240 80 L 280 80 Q 300 80 300 100 L 280 120 Z' fill='%23000'/%3E%3Crect x='100' y='120' width='200' height='220' fill='%23ffffff'/%3E%3Crect x='105' y='125' width='190' height='210' fill='none' stroke='%23000' stroke-width='2'/%3E%3Cg transform='translate(200,220) scale(0.4)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["One Size"]
    },
    {
      id: 7,
      name: "Phone Case",
      price: 22.99,
      category: "Tech",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23f0f0f0'/%3E%3Crect x='120' y='50' width='160' height='300' rx='20' fill='%23000000'/%3E%3Crect x='130' y='70' width='140' height='260' rx='10' fill='%234169E1' opacity='0.2'/%3E%3Cg transform='translate(200,180) scale(0.4)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%234169E1' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%234169E1' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%234169E1'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%234169E1'/%3E%3C/g%3E%3Ccircle cx='200' cy='320' r='8' fill='%23333'/%3E%3C/svg%3E",
      sizes: ["iPhone", "Samsung"]
    },
    {
      id: 8,
      name: "Crewneck Sweatshirt",
      price: 44.99,
      category: "Apparel",
      image: "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%234169E1'/%3E%3Cg transform='translate(200,180) scale(0.5)'%3E%3Ccircle cx='-80' cy='0' r='70' fill='none' stroke='%23ffffff' stroke-width='20'/%3E%3Ccircle cx='80' cy='0' r='70' fill='none' stroke='%23ffffff' stroke-width='20'/%3E%3Ccircle cx='-80' cy='10' r='25' fill='%2387CEEB'/%3E%3Ccircle cx='80' cy='10' r='25' fill='%2387CEEB'/%3E%3Cpath d='M -120 60 Q 0 120 120 60' fill='none' stroke='%23ffffff' stroke-width='15' stroke-linecap='round'/%3E%3Ccircle cx='-130' cy='60' r='12' fill='%23ffffff'/%3E%3Ccircle cx='130' cy='60' r='12' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E",
      sizes: ["S", "M", "L", "XL", "2XL"]
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="50" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                  <circle cx="150" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                  <circle cx="50" cy="85" r="12" fill="#87CEEB"/>
                  <circle cx="150" cy="85" r="12" fill="#87CEEB"/>
                  <path d="M 20 120 Q 100 160 180 120" fill="none" stroke="#4169E1" strokeWidth="8" strokeLinecap="round"/>
                  <circle cx="15" cy="120" r="6" fill="#4169E1"/>
                  <circle cx="185" cy="120" r="6" fill="#4169E1"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">MERCH</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Shop All</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Apparel</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Accessories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            </nav>

            {/* Cart */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-blue-600">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Shop All</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Apparel</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Accessories</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="50" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                  <circle cx="150" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                  <circle cx="50" cy="85" r="12" fill="#87CEEB"/>
                  <circle cx="150" cy="85" r="12" fill="#87CEEB"/>
                  <path d="M 20 120 Q 100 160 180 120" fill="none" stroke="#4169E1" strokeWidth="8" strokeLinecap="round"/>
                  <circle cx="15" cy="120" r="6" fill="#4169E1"/>
                  <circle cx="185" cy="120" r="6" fill="#4169E1"/>
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Wear the Smile
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Premium merch featuring our iconic logo. Express yourself with quality apparel and accessories.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
            <option>All Products</option>
            <option>Apparel</option>
            <option>Accessories</option>
            <option>Tech</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-500">{product.sizes[0]}</span>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and printing for lasting wear</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy on all items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="50" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                    <circle cx="150" cy="80" r="35" fill="none" stroke="#4169E1" strokeWidth="10"/>
                    <circle cx="50" cy="85" r="12" fill="#87CEEB"/>
                    <circle cx="150" cy="85" r="12" fill="#87CEEB"/>
                    <path d="M 20 120 Q 100 160 180 120" fill="none" stroke="#4169E1" strokeWidth="8" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-lg font-bold">MERCH</span>
              </div>
              <p className="text-gray-400 text-sm">Express yourself with our iconic logo</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">Apparel</a></li>
                <li><a href="#" className="hover:text-white">Accessories</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">Get updates on new drops and exclusive deals</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 text-sm"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Merch Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
