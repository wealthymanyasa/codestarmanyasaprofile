import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/careers.png";
import project2 from "../assets/images/angular-shop.png";
import project3 from "../assets/images/responsive.png";

import project_person from "../assets/images/hireme.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Laravel Job Portal",
      github_link: "https://github.com/wealthymanyasa/ericcareers",
      live_link: "https://eric-career-portal.herokuapp.com/",
    },
    {
      img: project2,
      name: "Angular Shopping Cart",
      github_link: "https://github.com/wealthymanyasa/angular-cart",
      live_link: "https://angular-add-to-cart.herokuapp.com/",
    },
    {
      img: project3,
      name: "Single Page Responsive",
      github_link: "https://github.com/wealthymanyasa/manyasaprofile",
      live_link: "https://manyasaprofile-c3597.web.app/",
    },
   
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Check out my awesome work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" className="rounded-l-full"/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
