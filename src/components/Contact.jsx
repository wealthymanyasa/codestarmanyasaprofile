import React ,{ useRef }from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import profile from '../assets/images/profile.jpg'
import {FcCheckmark } from "react-icons/fc"

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.17,
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

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "omanyasa@yahoo.com" },
    { logo: "logo-whatsapp", text: "+263 779 050 634" },
    {
      logo: "location",
      text: "Newlands Harare, Zimbabwe",
    },
  ];
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_g92j7cz', 'template_brlrber', form.current, '6oBnk3QfeH_zESzWQ')
      .then((result) => {
        toast.custom((t) => (
          <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-cyan-100 border-2 border-cyan-300 shadow-cyan-900 animate-bounce shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profile}
                    alt="profile"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Hi there
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Thank you for your message see you soon!!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <FcCheckmark />
                </div>
              </div>
            </div>

          </div>
        ))
      }, (error) => {
        // show the user an error

        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-red-100 border-2 border-red-300 shadow-red-900 animate-bounce shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profile}
                    alt="profile"
                  />
                </div>
                <div className=" flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Message sending failed.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Please try again later!!
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))
        console.log(error.text);

      });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-3 text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      {/* Animated accent blob */}
      <motion.div
        className="absolute -top-24 left-1/3 w-96 h-96 bg-cyan-700 rounded-full opacity-20 blur-3xl z-0"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />
      <div className="text-center mt-8 z-10 relative">
        <motion.h3
          className="text-4xl font-semibold"
          variants={itemVariants}
        >
          <span className="text-cyan-400">Contact</span> Me
        </motion.h3>
        <motion.p
          className="text-gray-300 mt-3 text-lg"
          variants={itemVariants}
        >
          Get in touch
        </motion.p>
        <motion.div
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800/90 md:p-8 p-3 rounded-2xl mx-auto shadow-xl z-10"
          variants={containerVariants}
        >
          <motion.form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              required
              name="user_name"
              placeholder="Your Name"
              className="rounded-lg py-3 px-4 bg-slate-900/80 border border-cyan-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-300 text-lg shadow-sm transition-all"
              variants={itemVariants}
            />
            <motion.input
              type="email"
              required
              name="user_email"
              placeholder="Your Email Address"
              className="rounded-lg py-3 px-4 bg-slate-900/80 border border-cyan-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-300 text-lg shadow-sm transition-all"
              variants={itemVariants}
            />
            <motion.textarea
              placeholder="Your Message"
              required
              name="message"
              rows={8}
              className="rounded-lg py-3 px-4 bg-slate-900/80 border border-cyan-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-300 text-lg shadow-sm transition-all resize-none"
              variants={itemVariants}
            />
            <motion.button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full text-lg font-bold shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200 border-none text-white tracking-wide flex items-center gap-2"
              whileHover={{ scale: 1.07, backgroundColor: "#06b6d4", color: "#fff", boxShadow: "0 4px 32px #06b6d4aa" }}
              whileTap={{ scale: 0.97 }}
              variants={itemVariants}
            >
              <ion-icon name="send"></ion-icon> Send Message
            </motion.button>
            <Toaster />
          </motion.form>
          <motion.div
            className="flex flex-col gap-7 justify-center md:pl-6"
            variants={containerVariants}
          >
            {contact_info.map((contact, i) => (
              <motion.div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 group-hover:bg-cyan-800 transition-colors rounded-full shadow-md">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words text-cyan-100">
                  {contact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
