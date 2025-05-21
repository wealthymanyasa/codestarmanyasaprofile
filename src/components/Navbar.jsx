import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "GITHUB STATS", link: "#stats" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 80 }}
      className={`fixed w-full left-0 top-0 z-[999] transition-colors duration-300 ${
        sticky ? "bg-white/80 backdrop-blur-md shadow-md text-gray-900" : "text-white"
      }`}
      style={{ boxShadow: sticky ? "0 2px 16px rgba(6,182,212,0.07)" : "none" }}
    >
      <div className="flex items-center justify-between px-2 md:px-7 py-2">
        <motion.div
          className="mx-3 md:mx-7"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <a href="#" className="text-4xl uppercase font-bold tracking-tight select-none">
            Code
            <span className="text-cyan-600">
              St<motion.span
                whileHover={{ rotate: 20, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              ><ion-icon name="star-outline"></ion-icon></motion.span>r
            </span>
          </a>
        </motion.div>
        <motion.div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <motion.li
                key={i}
                className="px-3 relative group cursor-pointer"
                whileHover={{ y: -2, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={menu?.link} className="hover:text-cyan-600 transition-colors duration-200">
                  {menu?.name}
                  <motion.span
                    className="block h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                    layoutId="underline"
                  />
                </a>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="https://www.dropbox.com/s/3w4emnjp0jxm0ns/omanyasa.cv%20%281%29.pdf?dl=1"
                download
                className="btn-primary hover:bg-sky-700 h-10 uppercase shadow-md transition-all duration-200"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </motion.div>
        {/* Mobile menu icon */}
        <motion.div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5 cursor-pointer`}
          whileTap={{ scale: 0.9, rotate: 20 }}
        >
          <ion-icon name="menu"></ion-icon>
        </motion.div>
        {/* Animated mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0 shadow-2xl z-[998]`}
              style={{ borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }}
            >
              <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                {menuLinks?.map((menu, i) => (
                  <motion.li
                    onClick={() => setOpen(false)}
                    key={i}
                    className="px-6 hover:text-cyan-600 cursor-pointer"
                    whileHover={{ scale: 1.07, x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={menu?.link}>{menu?.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
