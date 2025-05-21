import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/aboutme.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.7,
      type: "spring",
      stiffness: 60
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 80 } }
};

const About = () => {
  const info = [
    { text: "Years experience", count: "05" },
    { text: "Completed Projects", count: "18" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <motion.section
      id="about"
      className="py-16 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Animated accent blob */}
      <motion.div
        className="absolute -top-20 -left-32 w-96 h-96 bg-cyan-700 rounded-full opacity-20 blur-3xl z-0"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <div className="text-center mt-8 z-10 relative">
        <motion.h3
          className="text-4xl font-semibold mb-2"
          variants={itemVariants}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h3>
        <motion.p
          className="text-gray-300 my-3 text-lg"
          variants={itemVariants}
        >
          My introduction
        </motion.p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <motion.div
            className="p-2 flex-1"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-gray-300 my-3">
              <motion.p
                className="text-justify leading-7 w-11/12 mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I am a full-stack software engineer who is eager to learn and solve programming problems.
                I enjoy working with latest technologies and tools when developing software applications.
                I stay up to date with latest technology trends by reading technology documentation and 
                technology blogs as well as contributing to open source software development.
              </motion.p>
              <motion.div
                className="flex mt-10 items-center gap-7 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {info.map((content, i) => (
                  <motion.div
                    key={content.text}
                    className="bg-slate-800/80 rounded-xl px-6 py-3 shadow-md border border-slate-700"
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 32px rgba(6,182,212,0.13)" }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <h3 className="md:text-4xl text-2xl font-semibold text-white flex items-end">
                      {content.count}
                      <span className="text-cyan-400 text-2xl font-bold ml-1">+</span>
                    </h3>
                    <span className="md:text-base text-xs text-cyan-200">{content.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <br />
              <motion.a
                href="https://www.dropbox.com/s/3w4emnjp0jxm0ns/omanyasa.cv%20%281%29.pdf?dl=1"
                download
                whileHover={{ scale: 1.07, backgroundColor: "#06b6d4", color: "#fff" }}
                whileTap={{ scale: 0.96 }}
                className="inline-block mt-8 px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold shadow-lg hover:bg-cyan-700 transition-all duration-200 text-lg"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 md:mt-0 mt-6 flex justify-center items-center z-10"
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 90 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg shadow-2xl">
              <motion.img
                src={aboutImg}
                alt="About Obert Manyasa"
                className="w-full object-cover bg-cyan-600 rounded-xl border-4 border-cyan-600 shadow-xl"
                initial={{ filter: "grayscale(70%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.04, filter: "grayscale(0%) brightness(1.1)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
