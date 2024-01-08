import React ,{ useRef }from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import profile from '../assets/images/profile.jpg'
import {FcCheckmark } from "react-icons/fc"


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
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-cyan-100 border-2 border-cyan-300 shadow-cyan-900 animate-bounce shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
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
              <FcCheckmark/>
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
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
           <span className="text-cyan-600">Contact</span>  Me
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail} >
            <input type="text" required name="user_name" placeholder="Your Name" />
            <input type="email" required name="user_email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" required name="message" rows={10}></textarea>
            <button type="submit" className="focus:ring focus:ring-violet-300 btn-primary w-fit hover:bg-sky-700"> Send Message</button>
            <Toaster />
            <span class="flex h-3 w-3">
</span>
           
        
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
           
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
