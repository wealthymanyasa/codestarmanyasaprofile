import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 60
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 90 } }
};

const Skills = () => {
    const skills = [
        {
            logo: "logo-nodejs",
            level: "Intermediate",
            count: 65,
        },
        {
            logo: "logo-laravel",
            level: "intermediate",
            count: 60,
        },
        {

            logo: "logo-react",
            level: "Experienced",
            count: 50,
        },
        {
            logo: "logo-angular",
            level: "Advanced",
            count: 70,
        },


    ];
    return (
      <>
        {/* Animated accent blob */}
        <motion.section
          id="skills"
          className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div
            className="absolute -top-32 left-0 w-80 h-80 bg-cyan-700 rounded-full opacity-20 blur-3xl z-0"
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <div className="mt-8 text-gray-100 text-center z-10 relative">
            <motion.h3
              className="text-4xl font-semibold"
              variants={itemVariants}
            >
              My <span className="text-cyan-400">Skills</span>
            </motion.h3>
            <motion.p
              className="text-gray-400 mt-3 text-lg"
              variants={itemVariants}
            >
              My knowledge
            </motion.p>
            <motion.div
              className="flex items-center justify-center mt-12 gap-10 flex-wrap"
              variants={containerVariants}
            >
              {skills?.map((skill, i) => (
                <motion.div
                  key={i}
                  className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl shadow-lg hover:shadow-cyan-600/20 transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.06, boxShadow: "0 8px 32px rgba(6,182,212,0.13)" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    style={{
                      background: `conic-gradient(rgb(6,182,212) ${skill.count}%,#23272f ${skill.count}%)`,
                    }}
                    className="w-32 h-32 flex items-center justify-center rounded-full transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.07 }}
                  >
                    <motion.div
                      className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ color: "#06b6d4", scale: 1.12 }}
                    >
                      <ion-icon name={skill.logo}></ion-icon>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-xl mt-3 font-semibold text-cyan-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {skill.level}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* Github Statistics Section */}
        <motion.section
          id="stats"
          className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        >
          <div className="mt-8 text-gray-100 text-center z-10 relative">
            <motion.h3
              className="text-4xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-green-400">Github</span><span className="text-cyan-400"> Statistics</span>&#160;
              <a href="https://github.com/wealthymanyasa" className="mb-0" target="_blank" rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </motion.h3>
            <motion.div
              className="flex items-center justify-center mt-12 gap-10 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img src="https://github-readme-stats.vercel.app/api?username=wealthymanyasa&&show_icons=true&title_color=00ff99&icon_color=00ff33&text_color=ebebed&bg_color=000" alt="stats" className="rounded-xl shadow-md" />
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=wealthymanyasa&stroke=ffffff&background=000000&ring=00ff77&fire=00ff11&currStreakNum=ffffff&currStreakLabel=00ff44&sideNums=00ff77&sideLabels=ffffff&dates=ffffff&hide_border=true" alt="stats" className="rounded-xl shadow-md" />
            </motion.div>
          </div>
        </motion.section>
      </>
    );
};

export default Skills;
