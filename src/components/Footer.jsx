import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#0f172a] text-white pt-12 pb-8 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Logo and Tagline */}
    <div>
      <h4 className="text-2xl font-bold text-cyan-400 mb-3">Your Logo</h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        Empowering your fashion with comfort and style.
      </p>
    </div>

    {/* Information */}
    <div>
      <h5 className="text-lg font-semibold text-cyan-300 mb-4">Information</h5>
      <ul className="space-y-2">
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">About Us</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Contact Us</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Events</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Blogs</a></li>
      </ul>
    </div>

    {/* Helpful Links */}
    <div>
      <h5 className="text-lg font-semibold text-cyan-300 mb-4">Helpful Links</h5>
      <ul className="space-y-2">
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Sources</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Supports</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Terms & Conditions</a></li>
        <li><a href="#" className="no-underline text-gray-300 hover:text-cyan-400 transition">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h5 className="text-lg font-semibold text-cyan-300 mb-4">Contact Us</h5>
      <p className="text-gray-300 text-sm">Hamza Shahzad</p>
      <p className="text-gray-300 text-sm">Islamabad, Pakistan</p>
      <p className="text-gray-300 text-sm">hamzashazy@gmail.com</p>
      <p className="text-gray-300 text-sm">www.hamzashazy.com</p>
    </div>
  </div>

  {/* Subscribe Section */}
  <div className="mt-12 border-t border-white/10 pt-8 text-center">
    <p className="text-cyan-300 font-semibold mb-4">Subscribe For More Info</p>
    <form className="flex justify-center items-center gap-3 flex-wrap">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-64 px-4 py-2 rounded-md bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-md shadow-md transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</footer>
  )
}

export default Footer
