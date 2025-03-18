// import React from "react";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "Getting Started with React",
    description: "Learn the basics of React and how to set up your first project.",
    image: "https://i.ytimg.com/vi/xhAs3DY6xRU/hq720.jpg?sqp",
    link: "#"
  },
  {
    title: "Mastering Tailwind CSS",
    description: "A deep dive into Tailwind CSS and how to build responsive designs.",
    image: "https://i.ytimg.com/vi/ywLgqJjLUm4/mqdefault.jpg?sqp",
    link: "#"
  },
  {
    title: "JavaScript ES6 Features",
    description: "Explore the new features in ES6 and how they improve JavaScript development.",
    image: "https://www.infoworld.com/wp-content/uploads/2024/06/shutterstock_1361674454-100939444-orig.jpg?quality",
    link: "#"
  },
  {
    title: "Building a Full-Stack App",
    description: "Step-by-step guide on creating a full-stack application with MERN stack.",
    image: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
    link: "#"
  },
  {
    title: "Understanding Framer Motion",
    description: "Learn how to add smooth animations with Framer Motion in React.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmqHyAbOPjth1cgY7dUV-oaVjdZnR9l0thg8errG2Xg&usqp=CAE&s",
    link: "#"
  },
  {
    title: "Next.js for Beginners",
    description: "A beginner-friendly introduction to Next.js and its powerful features.",
    image: "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/next-js-image-component.png",
    link: "#"
  }
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-cyan-950 text-white p-6">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tutorials
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {tutorials.map((tutorial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={tutorial.image} alt={tutorial.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{tutorial.title}</h2>
              <p className="text-gray-300 mt-2">{tutorial.description}</p>
              <a
                href={tutorial.link}
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
