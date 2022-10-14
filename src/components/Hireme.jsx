import React from "react";
import hireMe from "../assets/images/hireme.jpg";
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
          <button className="btn-primary mt-10 ">Hire me</button>
          {/* <div className="animate-pulse text-purple-500">
          <ion-icon name="rocket-outline"></ion-icon>
          </div> */}
        </div>
        <img
          src={hireMe}
          alt=""
          className="rounded-xl shadow-2xl lg:absolute -right-6 -bottom-6  object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
