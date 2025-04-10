import React from 'react';
import Navbar from '../../components/Navbar';  // assuming you have Navbar component

export default function EcommerceWebsite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 text-gray-900">

      <nav className="mb-10 flex justify-center space-x-8 text-sm font-medium">
            <Link href="/projects" className="text-pink-600 hover:underline">Projects</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About</Link>
            <Link href="/pricing" className="text-pink-600 hover:underline">Pricing</Link>
            <Link href="/contact" className="text-pink-600 hover:underline">Contact</Link>
          </nav>
        
        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-32 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-6">Shop the best products for your everyday needs</p>
          <a
            href="/products"
            className="bg-black text-white py-2 px-6 rounded-full hover:bg-pink-700 transition"
          >
            Shop Now
          </a>
        </section>

        {/* Products Showcase Section */}
        <section id="products" className="products py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Sample Product 1 */}
            <div className="product-card bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/checkers515Wx515H-10866367EA.webp" alt="Product 1" className="w-half center h-40 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heinz Ketchup</h3>
              <p className="text-gray-500 mb-4">Known for its rich, tangy flavor and smooth texture.</p>
              <p className="text-xl font-bold text-pink-500">R29.99</p>
              <a
                href="/"
                className="inline-block text-blue-500 hover:text-blue-700 mt-4"
              >
                View Product
              </a>
            </div>

            {/* Sample Product 2 */}
            <div className="product-card bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/silo-product-image-v2-16Mar2023-185331-6009710390177-Straight_on-108988-12399_400Wx400H.jfif" alt="Product 2" className="w-half h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stork Country 40% Fat Spred 1kg</h3>
              <p className="text-gray-500 mb-4">Known for its creamy texture and mild flavor.</p>
              <p className="text-xl font-bold text-pink-500">R49.99</p>
              <a
                href="/"
                className="inline-block text-blue-500 hover:text-blue-700 mt-4"
              >
                View Product
              </a>
            </div>

            {/* Sample Product 3 */}
            <div className="product-card bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/10124889EA-checkers300Wx300H.png" alt="Product 3" className="w-half h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Darling Freh Full Cream Milk Satchel 1L</h3>
              <p className="text-gray-500 mb-4">Rich and creamy milk that offers a smooth, delicious taste.</p>
              <p className="text-xl font-bold text-pink-500">R15.99</p>
              <a
                href="/"
                className="inline-block text-blue-500 hover:text-blue-700 mt-4"
              >
                View Product
              </a>
            </div>

            {/* Sample Product 4 */}
            <div className="product-card bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/checkers300Wx300H-medias-10646920EA-en-shopriteGlobalProductCatalog-20250210012753.png" alt="Product 4" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eggs Galore Candy Coated Hollow Bantam Eggs 6 Pack</h3>
              <p className="text-gray-500 mb-4">Fun and festive treat, perfect for celebrations or as a sweet indulgence..</p>
              <p className="text-xl font-bold text-pink-500">R29.99</p>
              <a
                href="/"
                className="inline-block text-blue-500 hover:text-blue-700 mt-4"
              >
                View Product
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features bg-gray-200 py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-gray-500">We offer free shipping on all orders above R1000.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-500">Your payment information is always secure with us.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-500">We are here to help you with any questions or concerns.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta bg-black text-white py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Start Shopping Now!</h2>
          <a
            href="/products"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Browse Products
          </a>
        </section>
      </main>
    </>
  );
}
