import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
    return (
        <div className="flex flex-wrap gap-10">
            {technologies.map((technology, index) => (
                <div className="w-28 h-28" key={index}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
