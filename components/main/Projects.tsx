import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project-3.png"
          title="Digital Clock"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         demo="https://iboytech-music-app.vercel.app/"    
          github="https://iboytech-music-app.vercel.app/"
        />
        <ProjectCard
          src="/project-4.png"
          title="Mern Stack Music Application"
          description="This is s realtime music appication which enable uses whom have the admin priviledge to add and remove music ]. it is built with reactjs, nodejs, tailwindcss, firebase,expressjs and frame motion"
         demo="https://iboytech-music-app.vercel.app/"
          github="https://github.com/owolabijunior12/Mern-stack-music-app"
        />
        <ProjectCard
          src="/project-6.png"
          title="Real Time Muiltplayer Game"
          description="This is a realtime muilti player game that enable user to play and communication together. it is build using reactjs, nodejs, socket.io,and expressjs"
         demo="https://iboytech-game-rps.vercel.app/"
          github="https://github.com/owolabijunior12/Rock-papper-scissors-game"
        />
        <ProjectCard
          src="/project-7.png"
          title="Full Stack E-commerce Website"
          description="This is a full stack ecommerce website which enable uses to buy and make payment  for the product or make payment on delieverly. it is built reactjs ,nodejs ,expressjs ,paystack Api ,tailwindcss and frame motion"
         demo="https://iboytech-e-commerce.vercel.app/"
          github="https://github.com/owolabijunior12/personal-project"
        />
      </div>
    </div>
  );
};

export default Projects;
