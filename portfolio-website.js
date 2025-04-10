import React from 'react';
import Navbar from '../../components/Navbar';

export default function PortfolioWebsite() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-900">



      <nav className="mb-10 flex justify-center space-x-8 text-sm font-medium">
            <Link href="/projects" className="text-pink-600 hover:underline">Projects</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About</Link>
            <Link href="/pricing" className="text-pink-600 hover:underline">Pricing</Link>
            <Link href="/contact" className="text-pink-600 hover:underline">Contact</Link>
          </nav>
        {/* Hero Section */}
        <section className="hero bg-cover bg-center text-center py-32" style={{ backgroundImage: "url('/images/photographer-106821.jpg')" }}>
          <div className="overlay bg-black opacity-10 absolute inset-0"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Capturing Moments, Creating Memories
            </h1>
            <p className="text-lg text-white mb-8">
              Professional photography services tailored to your vision.
            </p>
            <a href="#portfolio" className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition">
              View Portfolio
            </a>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio py-20 px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div className="portfolio-item overflow-hidden rounded-lg shadow-lg">
              <img src="/images/brazil-1842203.jpg" alt="Featured Photo 1" className="w-full h-full object-cover" />
            </div>
            {/* Photo 2 */}
            <div className="portfolio-item overflow-hidden rounded-lg shadow-lg">
              <img src="/images/edge-3528319.jpg" alt="Featured Photo 2" className="w-full h-full object-cover" />
            </div>
            {/* Photo 3 */}
            <div className="portfolio-item overflow-hidden rounded-lg shadow-lg">
              <img src="/images/buildings-1840621.jpg" alt="Featured Photo 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about py-20 bg-teal-100 text-center">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>
          <p className="text-lg mb-8">
            I am a passionate photographer specializing in portrait, landscape, and event photography. With an eye for detail and a love for storytelling, I bring your vision to life through my lens.
          </p>
          <a href="#contact" className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition">
            Book a Session
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact py-20 text-center bg-gray-100">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">Interested in booking a shoot or learning more about my services? Contact me today!</p>
          <a href="mailto:info@photographer.com" className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition">
            Contact Me
          </a>
        </section>
      </main>
    </>
  );
}
