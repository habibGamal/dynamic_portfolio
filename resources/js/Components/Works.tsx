import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import SectionHead from "./SectionHead";
import { github } from "../assets";

interface ProjectTag {
    name: string;
    color: string;
}

interface Project {
    id: number;
    name: string;
    description: string;
    tags: ProjectTag[];
    main_image_url: string;
    source_code_link: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 0.015 * index, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <Tilt
                options={{ max: 30, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] group cursor-pointer"
            >
                <Link href={`/work/${project.id}`}>
                    <div className="relative w-full h-[230px]">
                        <img
                            src={project.main_image_url}
                            alt={project.name}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-lg font-bold">View Details</span>
                        </div>
                        <div className="black-gradient rounded-full w-10 h-10 absolute top-4 right-4 cursor-pointer grid place-items-center">
                            <img src={github} alt="github" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-white font-bold text-xl">
                            {project.name}
                        </h3>
                        <p className="mt-2 text-secondary">{project.description}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className={`${tag.color}`}>#{tag.name}</span>
                        ))}
                    </div>
                </Link>
            </Tilt>
        </motion.div>
    );
};

interface WorksProps {
    works: Project[];
}

const Works = ({ works }: WorksProps) => {
    return (
        <>
            <SectionHead title="Projects." subTitle="My work" />
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-secondary text-lg max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and knowledge in web
                    development. I have used various technologies to build these
                    projects.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {works.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        index={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");
