import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/careers.png";
import project2 from "../assets/images/angular-shop.png";
import project3 from "../assets/images/responsive.png";
import project4 from "../assets/images/landing-page.png"
import project5 from "../assets/images/project5.png"
import project6 from "../assets/images/prime-health.png"

import project_person from "../assets/images/projects.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: "Laravel Job Portal",
      github_link: "https://github.com/wealthymanyasa/ericcareers",
      live_link: "https://ericcareers.000webhostapp.com/",
    },
    {
      img: project2,
      name: "Angular Shopping Cart",
      github_link: "https://github.com/wealthymanyasa/angular-cart",
      live_link: "https://angular-cart-82b4a.web.app/",
    },
    {
      img: project3,
      name: "Single Page Responsive",
      github_link: "https://github.com/wealthymanyasa/manyasaprofile",
      live_link: "https://manyasaprofile-c3597.web.app/",
    },
    {
      img: project4,
      name: "Tailwind landing page",
      github_link: "https://github.com/wealthymanyasa/landingpage-tailwind",
      live_link: "https://wealthymanyasa.github.io/landingpage-tailwind/",
    },
    {
      img: project5,
      name: "Cloud App React Tailwind",
      github_link: "https://github.com/wealthymanyasa/cloud-app-tailwind-react",
      live_link: "https://cloud-app-tailwind-react.vercel.app",
    },
    {
      img: project6,
      name: "Prime-Health React Tailwind",
      github_link: "https://github.com/wealthymanyasa/prime-health-responsive-landing-page",
      live_link: "https://prime-health-tailwind.web.app/",
    }

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
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
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
                      target="_blank" rel="noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank" rel="noreferrer"
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
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" className="rounded-l-full"/>
        </div> */}
      </div>

      <h3 className="text-4xl font-semibold pt-10">

        <h1 className="text-center">Projects <span className="text-cyan-600 ">Links List</span> </h1>
      </h3>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
        {projects.map((project_info, i) => (
          <a href={project_info.live_link} class="p-2 sm:w-1/2 w-full" target="_blank" rel="noreferrer">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
                <i class="font-medium text-indigo-600">{project_info.live_link}</i>
            </div>
          </a>
        ))}


      </div>
    </section>
  );
};

export default Projects;
