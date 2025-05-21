import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Matambanadzo",
    role: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&q=80",
    text: "Obert is a true standout in the tech industry. His ability to deliver high-quality code while maintaining exceptional attention to detail is rare. His innovative solutions have significantly improved our product's performance and user experience.",
  },
  {
    name: "Michael Chemhere",
    role: "Engineering Manager WorthTech Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&q=80",
    text: "I've had the pleasure of working with Obert on multiple complex projects. His technical expertise in modern web technologies is outstanding, and his ability to solve complex problems quickly is exceptional. Any company would be lucky to have him on their team.",
  },
  {
    name: "Emily Roberts",
    role: "Product Lead NashCans Ltd",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&q=80",
    text: "Obert's work ethic and passion for technology are truly inspiring. He consistently delivers results that exceed expectations and brings innovative solutions to the table. His portfolio showcases his exceptional skills and attention to detail.",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          What People Say
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-2 border-cyan-500 shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-cyan-500 rounded-full w-5 h-5 border-2 border-white"></div>
                </div>
                <p className="text-gray-400 italic text-center max-w-md px-4">"{testimonial.text}"</p>
                <div className="flex flex-col items-center space-y-1">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
