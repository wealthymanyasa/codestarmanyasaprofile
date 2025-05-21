import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import project1 from "../assets/images/careers.png";
import project2 from "../assets/images/angular-shop.png";
import project3 from "../assets/images/responsive.png";
import project4 from "../assets/images/landing-page.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/prime-health.png";
import standup1 from "../assets/images/standup1.png";
import project7 from "../assets/images/CodeCrew.png";

import project_person from "../assets/images/projects.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      img: standup1,
      name: "Nextjs Video Conferencing WebApp",
      github_link: "https://github.com/wealthymanyasa/standup-video-conferencing.git",
      live_link: "https://standup-video-conferencing-nextjs.vercel.app/",
      tech: ["Next.js", "WebRTC", "Tailwind"]
    },
    {
      img: project1,
      name: "Laravel Job Portal",
      github_link: "https://github.com/wealthymanyasa/ericcareers",
      live_link: "https://ericcareers.000webhostapp.com/",
      tech: ["Laravel", "PHP", "MySQL"]
    },
    {
      img: project7,
      name: "CodeCrew React Engineering Website UI",
      github_link: "https://github.com/wealthymanyasa/codecrew",
      live_link: "https://codecrew-six.vercel.app/",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      img: project2,
      name: "Angular Shopping Cart",
      github_link: "https://github.com/wealthymanyasa/angular-cart",
      live_link: "https://angular-cart-82b4a.web.app/",
      tech: ["Angular", "Firebase", "TypeScript"]
    },
    {
      img: project3,
      name: "Single Page Responsive",
      github_link: "https://github.com/wealthymanyasa/manyasaprofile",
      live_link: "https://manyasaprofile-c3597.web.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      img: project4,
      name: "Tailwind landing page",
      github_link: "https://github.com/wealthymanyasa/landingpage-tailwind",
      live_link: "https://wealthymanyasa.github.io/landingpage-tailwind/",
      tech: ["Tailwind", "HTML", "JavaScript"]
    },
    {
      img: project5,
      name: "Cloud App React Tailwind",
      github_link: "https://github.com/wealthymanyasa/cloud-app-tailwind-react",
      live_link: "https://cloud-app-tailwind-react.vercel.app",
      tech: ["React", "Tailwind", "JavaScript"]
    },
    {
      img: project6,
      name: "Prime-Health React Tailwind",
      github_link: "https://github.com/wealthymanyasa/prime-health-responsive-landing-page",
      live_link: "https://prime-health-tailwind.web.app/",
      tech: ["React", "Tailwind", "Firebase"]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div 
        className="text-center mb-12"
        variants={titleVariants}
      >
        <motion.h3 
          className="text-5xl font-bold mb-3 relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          My <span className="text-cyan-500">Projects</span>
          <motion.div 
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h3>
        <motion.p 
          className="text-gray-300 mt-4 text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore my portfolio of web development projects
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex max-w-6xl mx-auto items-center relative px-5"
        variants={sectionVariants}
      >
        <div className="w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i} className="pb-12 my-4">
                <motion.div 
                  className="h-fit w-full p-0 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl"
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative overflow-hidden group">
                    <img 
                      src={project_info.img} 
                      alt={project_info.name} 
                      className="w-full h-52 object-cover object-top" 
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-center w-full">
                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                          {project_info.tech.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-cyan-600/80 text-white text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-cyan-50">{project_info.name}</h3>
                    <div className="flex gap-3 justify-between">
                      <motion.a
                        href={project_info.github_link}
                        target="_blank" 
                        rel="noreferrer"
                        className="text-cyan-400 border border-cyan-400 rounded-full px-4 py-2 flex-1 text-center transition-all hover:bg-cyan-400 hover:text-slate-900 font-medium text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Github
                      </motion.a>
                      <motion.a
                        href={project_info.live_link}
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-4 py-2 flex-1 text-center font-medium text-sm"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      <motion.div
        className="mt-20 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-3xl font-bold text-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          Projects <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Directory</span>
        </motion.h3>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-2 p-4">
          {projects.map((project_info, i) => (
            <motion.div 
              key={i}
              className="p-2 sm:w-1/2 w-full"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.a 
                href={project_info.live_link} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${hoveredIndex === i ? 'from-slate-800 to-slate-700' : 'from-slate-900 to-slate-800'} rounded-lg flex p-4 h-full items-center border border-slate-700 shadow-lg transition-all duration-300`}
                  animate={{ 
                    y: hoveredIndex === i ? -5 : 0,
                    boxShadow: hoveredIndex === i ? "0 10px 25px -5px rgba(6, 182, 212, 0.2)" : "0 0 0 0 rgba(0, 0, 0, 0)" 
                  }}
                >
                  <motion.svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2"
                    className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: hoveredIndex === i ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </motion.svg>
                  <span className="font-medium text-gray-200 hover:text-cyan-300 transition-colors duration-200">
                    {project_info.name}
                  </span>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .text-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .swiper-pagination-bullet {
          background-color: #06b6d4 !important;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #0ea5e9 !important;
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;
