// src/pages/projects/landing-page.js
import React from 'react';
import Navbar from '../../components/Navbar';  // Assuming you have Navbar

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white">


      <nav className="mb-10 flex justify-center space-x-8 text-sm font-medium">
            <Link href="/projects" className="text-pink-600 hover:underline">Projects</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About</Link>
            <Link href="/pricing" className="text-pink-600 hover:underline">Pricing</Link>
            <Link href="/contact" className="text-pink-600 hover:underline">Contact</Link>
          </nav>
        {/* Hero Section */}
        <section className="hero bg-cover bg-center text-center py-32 md:py-48 px-4" style={{ backgroundImage: "url('/images/pexels-luis-gomes-166706-546819.jpg')" }}>
  <div className="overlay bg-black opacity-10 absolute inset-0"></div>
  <div className="relative z-10 text-white">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-4">
      Welcome to Our Startup
    </h1>
    <p className="text-sm sm:text-lg md:text-xl mb-8">
      Transforming ideas into innovative solutions.
    </p>
    <a href="/contact" className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105 opacity-90 hover:opacity-100">
      Get Started
    </a>
  </div>
</section>



        {/* Features Section */}
        <section className="features py-20 px-8 text-center">
  <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Feature 1 */}
    <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
  <h3 className="text-xl font-bold mb-4">Feature One</h3>
  <p className="text-gray-400">
    We provide cutting-edge technology solutions to help businesses thrive in today's digital landscape.
  </p>
</div>

    {/* Feature 2 */}
    <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-4">Feature Two</h3>
      <p className="text-gray-400">
      Every solution is tailored to your specific needs. Whether you're a startup or an enterprise, we craft custom digital experiences that align with your vision.
      </p>
    </div>
    {/* Feature 3 */}
    <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-4">Feature Three</h3>
      <p className="text-gray-400">
      Our team is dedicated to providing continuous support. We’re always here to help you, ensuring your business runs smoothly and efficiently, day or night
      </p>
    </div>
  </div>
</section>


        {/* About Section */}
       
        {/* Contact Section */}
        <section className="about py-20 bg-gray-800 text-center">
  <h2 className="text-3xl font-semibold mb-8 text-white">About Us</h2>
  <p className="text-lg text-gray-400 mb-8">
    We are a passionate team dedicated to providing top-notch services to help your business thrive.
  </p>
  <a href="#contact" className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
    Learn More
  </a>
</section>

<section className="testimonials py-20 bg-gray-800 text-center">
  <h2 className="text-3xl font-semibold mb-12 text-white">What Our Clients Say</h2>
  <div className="flex justify-center gap-8">
    <div className="testimonial text-white">
      <p className="text-lg italic mb-4">"The best service I've ever used! Highly recommended."</p>
      <h3 className="font-bold">Infiniti Networks</h3>
      <p className="text-gray-400">RedWire Innovations</p>
    </div>
    <div className="testimonial text-white">
      <p className="text-lg italic mb-4">"Fantastic work, and the team really understood our needs."</p>
      <h3 className="font-bold">Alpha Industries</h3>
      <p className="text-gray-400">TechNova Solutions</p>
    </div>
  </div>
</section>


      </main>
    </>
  );
}
