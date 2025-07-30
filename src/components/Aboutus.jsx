import React from "react";

const Aboutus = () => {
  return (
    <section className="bg-[#1e293b] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">About Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Welcome to <span className="text-cyan-300 font-semibold">Sastay.pk</span> —
            your go-to destination for stylish footwear and comfort. We're a passionate team committed to bringing you the best in shoes, joggers, and sneakers with a seamless online experience.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white text-black rounded-2xl p-6 shadow-lg flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
              alt="Our Mission"
              className="rounded-xl w-full h-64 object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold text-cyan-600">Our Mission</h2>
            <p className="text-gray-700">
              At Sastay.pk, our mission is to redefine how you shop for footwear — combining top-quality products with user-friendly design and unmatched customer service.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white text-black rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-600 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4">
            We're a small but passionate team of designers, developers, and dreamers who love great shoes and clean code. Together, we craft experiences that help you discover, explore, and enjoy every pair you wear.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["Hamza", "Ayesha", "Ali"].map((member, i) => (
              <div
                key={i}
                className="bg-cyan-100 text-cyan-900 p-4 rounded-xl shadow text-center"
              >
                <div className="w-24 h-24 mx-auto mb-3 bg-cyan-300 rounded-full" />
                <h3 className="font-semibold text-lg">{member}</h3>
                <p className="text-sm">Frontend Developer</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Get In Touch</h2>
          <p className="text-gray-300 mb-4">Have questions or feedback? We'd love to hear from you.</p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-full transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
