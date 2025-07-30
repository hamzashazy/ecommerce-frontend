import React from "react";

const Contact = () => {
  return (
    <main className="bg-[#1e293b] text-white min-h-screen py-10 px-4 font-sans">
      {/* Header */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-cyan-400">Contact Us</h2>
        <p className="text-gray-300 mt-2">
          We'd love to hear from you! Reach out for any queries or suggestions.
        </p>
      </section>

      {/* Contact Form + Info */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-[#0f172a] rounded-xl p-6 shadow-md">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-[#0f172a] rounded-xl p-6 shadow-md space-y-4 text-gray-300">
          <h3 className="text-2xl font-bold text-cyan-400">Our Info</h3>
          <p><span className="font-semibold text-white">Email:</span> hamzashazy@gmail.com</p>
          <p><span className="font-semibold text-white">Phone:</span> +92-xxx-xxxxxxx</p>
          <p><span className="font-semibold text-white">Location:</span> Islamabad, Pakistan</p>
          <p>
            <span className="font-semibold text-white">Website:</span>{" "}
            <a href="https://www.hamzashazy.com" className="text-cyan-300 underline">
              www.hamzashazy.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
