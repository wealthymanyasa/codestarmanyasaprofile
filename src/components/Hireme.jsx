import React from "react";
import { motion } from "framer-motion";
import hireMe from "../assets/images/hero.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 60
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 90 } }
};

const Hireme = () => {
  return (
    <motion.section
      id="hireme"
      className="py-16 px-3 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated accent blobs */}
      <motion.div
        className="absolute -top-16 -left-20 w-60 h-60 bg-cyan-700 rounded-full opacity-20 blur-3xl z-0"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-14 -right-24 w-72 h-72 bg-cyan-400 rounded-full opacity-15 blur-3xl z-0"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />
      <div className="text-center z-10 relative">
        <motion.h3
          className="text-4xl font-semibold"
          variants={itemVariants}
        >
          Hire <span className="text-cyan-400">Me</span>
        </motion.h3>
        <motion.p
          className="text-gray-300 mt-3 text-lg"
          variants={itemVariants}
        >
          I am open for work. I also work on freelance projects.
        </motion.p>
      </div>
      <motion.div
        className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center shadow-2xl z-10"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold"
            variants={itemVariants}
          >
            Do you have a project idea? If so, please ping me
          </motion.h2>
          <motion.p
            className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6"
            variants={itemVariants}
          >
            I have experience working in companies as well as working on freelance work.
            To satisfy my clients I employ my technical knowledge and my eagerness to learn.
          </motion.p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=263779050634"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, backgroundColor: "#0ea5e9", color: "#fff", boxShadow: "0 4px 32px #06b6d4aa" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-10 px-10 py-3 rounded-full text-lg font-bold shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200 border-none text-white tracking-wide"
            variants={itemVariants}
          >
            <span className="flex items-center gap-2"><ion-icon name="rocket-outline"></ion-icon>Hire me</span>
          </motion.a>
        </motion.div>
        <motion.div
          className="flex-1 flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.92, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 90 }}
          viewport={{ once: true }}
        >
          {/* Animated glassy floating accent behind the image */}
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-gradient-to-br from-cyan-400/40 to-blue-600/30 rounded-full opacity-30 blur-2xl z-0 shadow-2xl backdrop-blur-md"
            animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.img
            src={hireMe}
            alt="Hire Obert Manyasa"
            className="relative rounded-2xl h-80 shadow-2xl rotate-12 object-cover border-4 border-white/10 z-10 bg-gradient-to-br from-cyan-700/30 to-blue-900/20"
            initial={{ filter: "grayscale(70%)" }}
            whileInView={{ filter: "grayscale(0%)" }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.04, filter: "grayscale(0%) brightness(1.1)" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hireme;
