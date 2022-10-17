import React from "react";
import hireMe from "../assets/images/hero.jpg";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">I am open for work. I also work on freelance projects.</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you have a project idea? If so, please ping me
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I have experience working in companies as well as working on freelance work.
            To satisfy my clients I employ my technical knowledge and my eargerness to learn.
            
          </p>
          <a href="https://api.whatsapp.com/send?phone=263779050634" target="_blank"><button  className="btn-primary mt-10 hover:bg-sky-700">Hire me</button></a>
          {/* <div className="animate-pulse text-purple-500">
          <ion-icon name="rocket-outline"></ion-icon>
          </div> */}
        </div>
        <div className="bg-green-500">

  
        <img
          src={hireMe}
          alt=""
          className="rounded-xl h-80 shadow-2xl rotate-12 lg:absolute -right-6 -bottom-6  object-cover"
        />
         <div class="absolute h-14 w-14 -left-6 rounded-full -top-6  bg-cyan-600"></div>
         <div class="absolute h-14 w-14 -right-6 rounded-full -top-6  bg-cyan-600"></div>

        </div>
      </div>
    </section>
  );
};

export default Hireme;
