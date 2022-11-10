import React from "react";

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

            <section id="skills" className="py-10 bg-gray-800 relative">
                <div className="mt-8 text-gray-100 text-center">
                    <h3 className="text-4xl font-semibold ">
                        My <span className="text-cyan-600 ">Skills</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                    <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
                        {skills?.map((skill, i) => (
                            <div
                                key={i}
                                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                            >
                                <div
                                    style={{
                                        background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                    }}
                                    className="w-32 h-32 flex items-center justify-center rounded-full"
                                >
                                    <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                        <ion-icon name={skill.logo}></ion-icon>
                                    </div>
                                </div>
                                <p className="text-xl mt-3">{skill.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-800 relative">
                <div className="mt-8 text-gray-100 text-center">
                    <h3 className="text-4xl font-semibold ">
                        <span className="text-green-400">Github</span><span className="text-cyan-600"> Statistics</span>&#160;
                        <a href="https://github.com/wealthymanyasa" className="mb-0" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </h3>
                    <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
                        <img src="https://github-readme-stats.vercel.app/api?username=wealthymanyasa&&show_icons=true&title_color=00ff99&icon_color=00ff33&text_color=ebebed&bg_color=000" alt="stats" />
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=wealthymanyasa&stroke=ffffff&background=000000&ring=00ff77&fire=00ff11&currStreakNum=ffffff&currStreakLabel=00ff44&sideNums=00ff77&sideLabels=ffffff&dates=ffffff&hide_border=true" alt="stats" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Skills;
