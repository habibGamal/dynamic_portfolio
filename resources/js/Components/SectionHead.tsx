import React from "react";
import { styles } from "../utils/styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

interface SectionHeadProps {
    title: string;
    subTitle: string;
}

export default function SectionHead({ title, subTitle }: SectionHeadProps) {
    return (
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>{subTitle}</p>
            <h2 className={`${styles.sectionHeadText}`}>{title}</h2>
        </motion.div>
    );
}
