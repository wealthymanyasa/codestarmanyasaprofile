import React from "react";
import hero from "../assets/images/obert.jpg";
const Hero = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full ">
                <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                    <img
                        src={hero}
                        alt=""
                        className="w-full object-cover bg- -600 rounded-xl"
                    />
                </div>
                {/* <img src={hero} alt="" className="md:w-11/12 h-auto object-cover rounded-full" /> */}
            </div>

            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hi There!
                            <br />
                        </span>
                        I'm <span>Obert Manyasa</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
                            <span class="relative text-white">Full-Stack</span>
                        </span>
                        &#160; Software Engineer
                    </h4>
                    <a href="https://api.whatsapp.com/send?phone=263779050634" target="_blank">  <button className="btn-primary mt-8 hover:bg-sky-700 ">Contact Me</button></a>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        <a href="https://github.com/wealthymanyasa" target="_blank">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/obertmanyasa" target="_blank">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://twitter.com/ManyasaObert" target="_blank">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
