import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/images/obert.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 70 }
  })
};

const Hero = () => {

    return (
        <motion.section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Animated background blobs */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-cyan-600 rounded-full opacity-20 blur-3xl z-0 animate-pulse"
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl z-0 animate-pulse"
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <div className="flex-1 flex items-center justify-center h-full z-10">
                <motion.div
                    className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 80 }}
                    whileHover={{ scale: 1.04, rotate: 2 }}
                >
                    <motion.img
                        src={hero}
                        alt="Obert Manyasa"
                        className="w-full object-cover rounded-2xl border-4 border-cyan-600 shadow-xl"
                        initial={{ filter: "grayscale(80%)" }}
                        animate={{ filter: "grayscale(0%)" }}
                        transition={{ duration: 1.2 }}
                        whileHover={{ scale: 1.06, filter: "grayscale(0%) brightness(1.1)" }}
                    />
                </motion.div>
            </div>

            <div className="flex-1 z-10">
                <div className="md:text-left text-center">
                    <motion.h1
                        className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold mb-2"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        <span className="text-cyan-400 md:text-6xl text-5xl drop-shadow-lg">
                            Hi There!
                            <br />
                        </span>
                        I'm <span className="text-cyan-100">Obert Manyasa</span>
                    </motion.h1>
                    <motion.h4
                        className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-200"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        <span className="relative inline-block">
                            <span className="relative text-white px-2 py-1 rounded bg-gradient-to-r from-violet-500 to-cyan-600 shadow-md animate-gradient-x">Full-Stack</span>
                        </span>
                        &nbsp;Software Engineer
                    </motion.h4>
                    <motion.a
                        href="https://api.whatsapp.com/send?phone=263779050634"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.08, backgroundColor: "#06b6d4", color: "#fff" }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-block mt-8 px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold shadow-lg hover:bg-cyan-700 transition-all duration-200 text-lg"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                    >
                        Contact Me
                    </motion.a>
                    <motion.div
                        className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-7"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    >
                        <motion.a
                            href="https://github.com/wealthymanyasa"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-cyan-400 transition-colors duration-200"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/obertmanyasa"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, color: "#0e76a8" }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-cyan-400 transition-colors duration-200"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/ManyasaObert"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, color: "#1da1f2" }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-cyan-400 transition-colors duration-200"
                        >
                            <ion-icon name="logo-twitter"></ion-icon>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 4s ease infinite;
                }
                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </motion.section>
    );
};

export default Hero;
