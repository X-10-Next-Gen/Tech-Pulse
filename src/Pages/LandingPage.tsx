import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-cyan-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-4" style={{ color: "#00FFFF" }}>
          Stay Ahead in Tech!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Get the latest tech trends, news, and tutorials straight to your inbox.
        </p>
        <button className="relative flex items-center self-center justify-self-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Get Started
          </span>
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-8 py-12 bg-cyan-900">
        <div className="p-6 border rounded-lg bg-cyan-800" data-aos="fade-down">
          <h3 className="text-2xl font-bold mb-2">Tech News</h3>
          <p className="text-gray-300">Stay updated with the latest industry insights.</p>
        </div>
        <div className="p-6 border rounded-lg bg-cyan-800" data-aos="zoom-in">
          <h3 className="text-2xl font-bold mb-2">Tutorials</h3>
          <p className="text-gray-300">Learn new skills with easy-to-follow guides.</p>
        </div>
        <div className="p-6 border rounded-lg bg-cyan-800" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-2">Community</h3>
          <p className="text-gray-300">Engage with other tech enthusiasts.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="text-center py-16 px-6 bg-cyan-900" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tech Pulse is your go-to platform for the latest trends, insights, and tutorials in technology.
        </p>
      </section>

      {/* Categories Section */}
      <section className="text-center py-12 px-6 bg-cyan-800" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Explore Categories</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500 px-4 py-2 rounded-md">AI</span>
          <span className="bg-blue-500 px-4 py-2 rounded-md">Web Development</span>
          <span className="bg-blue-500 px-4 py-2 rounded-md">Cybersecurity</span>
          <span className="bg-blue-500 px-4 py-2 rounded-md">Blockchain</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center py-16 px-6 bg-cyan-900" data-aos="zoom-in">
        <h3 className="text-3xl font-bold mb-4">What Our Users Say</h3>
        <p className="text-lg text-gray-300 italic">"Tech Pulse keeps me ahead of the curve!" - Alex J.</p>
      </section>

      {/* FAQ */}
      <section className="text-center py-12 px-6 bg-cyan-800" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
        <p className="text-gray-300">How do I subscribe? Click the 'Get Started' button to join.</p>
      </section>

      {/* Contact Us */}
      <section className="text-center py-16 px-6 bg-cyan-900" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="text-lg text-gray-300">Reach us at support@techpulse.com</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-cyan-900" >
        <p className="text-gray-400">&copy; 2025 Tech Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
