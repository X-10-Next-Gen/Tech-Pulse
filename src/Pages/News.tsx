import { motion } from "framer-motion";

const newsItems = [
  {
    title: "AI Breakthroughs in 2025",
    image: "https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",
    description: "New AI models are transforming industries at an unprecedented pace.",
    link: "#",
  },
  {
    title: "Quantum Computing Advances",
    image: "https://www.ncsa.illinois.edu/wp-content/uploads/2024/08/Quantum-computing.jpg",
    description: "Researchers make significant strides in quantum processing power.",
    link: "#",
  },
  {
    title: "Web3 and Blockchain Growth",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE2LWJhbm5lci0wOS5qcGc.jpg",
    description: "Decentralized applications are reshaping the internet as we know it.",
    link: "#",
  },
  {
    title: "Cybersecurity in a Digital Age",
    image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/cyber-security-free-image.jpeg?w",
    description: "Companies double down on protecting user data against rising cyber threats.",
    link: "#",
  },
  {
    title: "Metaverse Developments",
    image: "https://static.vecteezy.com/system/resources/previews/008/196/414/non_2x/boy-with-vr-glasses-from-his-room-touches-the-metaverse-with-his-hand-copy-space-on-blue-background-photo.jpg",
    description: "New virtual reality experiences are emerging with real-world applications.",
    link: "#",
  },
  {
    title: "The Future of 5G and Beyond",
    image: "https://i.pcmag.com/imagery/articles/01BGW1evAIWa3DvjJdSWRaJ-34..v1629994908.jpg",
    description: "High-speed networks are enabling faster and more efficient global connectivity.",
    link: "#",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-cyan-950 text-white py-12 px-6 text-center">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tech News
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <motion.div
            key={index}
            className="bg-cyan-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-300 mb-4">{news.description}</p>
            <a
              href={news.link}
              className="text-blue-400 hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
