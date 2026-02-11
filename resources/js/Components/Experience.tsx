import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/motion";
import SectionHead from "./SectionHead";
import useMediaQuery from "../hooks/useMediaQuery";

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-[42%16%42%]  justify-items-center work"
        >
            <div className="bg-[#1d1836] p-6 border-b-[3px] border-[#ddd] rounded w-full content">
                <h3 className="text-white text-xl font-bold">{experience.title}</h3>
                <p className="text-secondary font-medium my-4">{experience.company_name}</p>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li key={index} className="text-white-100 pl-1 tracking-wider">{point}</li>
                    ))}
                </ul>
            </div>
            <div className="grid place-items-center w-[75px] h-[75px] bg-gray-600 rounded-full border-4 border-white">
                <img src={experience.icon} className="w-[90%] h-[90%] object-contain" />
            </div>
            <div className="w-full pt-6 font-medium opacity-70 date">
                <span>{experience.date}</span>
            </div>
        </motion.div>
    );
};

const ExperienceCardForMobile = ({ experience }: ExperienceCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12"
        >
            <div className="flex gap-4 items-center mb-6">
                <div className="grid place-items-center w-[75px] h-[75px] bg-gray-600 rounded-full border-4 border-white">
                    <img src={experience.icon} className="w-[90%] h-[90%] object-contain" />
                </div>
                <div>
                    <h3 className="text-white text-xl font-bold">{experience.title}</h3>
                    <p className="text-secondary font-medium my-2">{experience.company_name}</p>
                </div>
            </div>
            <div className="bg-[#1d1836] p-6 border-b-[3px] border-[#ddd] rounded w-full content">
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li key={index} className="text-white-100 pl-1 tracking-wider">{point}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const smallDevice = useMediaQuery("(max-width: 1024px)");

    return (
        <>
            <SectionHead title="Work Experience." subTitle="What I have done so far" />
            <div className="flex flex-col gap-16 works relative mt-20">
                {experiences.map((experience, index) =>
                    smallDevice ? (
                        <ExperienceCardForMobile key={index} experience={experience} />
                    ) : (
                        <ExperienceCard key={index} experience={experience} />
                    )
                )}
                <div className="w-1 h-full bg-white absolute right-1/2 translate-x-1/2 z-[-1] hidden lg:block"></div>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
