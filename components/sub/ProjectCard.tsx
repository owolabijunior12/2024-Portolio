  import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  demo:string;
  github:string;
}

const ProjectCard = ({ src, title, description,demo ,github }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex pt-5 gap-4">
                     <a href={github} target="_blink" >   <button type="button" className="border p-3 rounded-xl text-slate-200 font-mono font-semibold bg-slate-800">Github</button></a>
                <a href={demo} target="_blink" > <button type="button"  className="border p-3 rounded-xl text-slate-200 font-mono font-semibold bg-slate-800">Live</button></a>
                    </div>
      </div>
    </div>
  );
};

export default ProjectCard;
