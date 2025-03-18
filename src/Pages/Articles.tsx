import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "AI Revolution: What's Next?",
    image: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
    description: "Explore the latest advancements in artificial intelligence and how they impact the future."
  },
  {
    id: 2,
    title: "Web 3.0: The Future of Internet?",
    image: "https://exeedcollege.com/wp-content/uploads/2023/07/web3-scaled.jpg",
    description: "A deep dive into decentralized technology and its potential to reshape the web."
  },
  {
    id: 3,
    title: "Cybersecurity in 2025",
    image: "https://senlainc.com/wp-content/webp-express/webp-images/uploads/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-2560%D1%851600.jpg.webp",
    description: "Learn about the top threats and security measures you should take to stay safe online."
  },
  {
    id: 4,
    title: "The Rise of Quantum Computing",
    image: "https://www.einfochips.com/wp-content/uploads/2023/03/Quantum_Computing_in_Artificial_Intelligence_Around_the_Corner_Blog_Featured_Image-scaled-1.jpg",
    description: "How quantum computers are changing the tech landscape and what it means for businesses."
  },
  {
    id: 5,
    title: "Top 10 Programming Languages in 2025",
    image: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",
    description: "A ranking of the most in-demand programming languages for developers."
  },
  {
    id: 6,
    title: "Blockchain Beyond Crypto",
    image: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    description: "Exploring real-world applications of blockchain outside of cryptocurrency."
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-cyan-950 text-white p-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Latest Articles
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="bg-cyan-900 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-cyan-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-300">{article.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
