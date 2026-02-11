import React from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../utils/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { fadeIn } from "../utils/motion";

const code = `const project = 'idea';

const developer = execute(project);

if(developer === 'Habib') console.log("Together, we can bring your vision to life!");

else console.log("Don't let your vision be compromised. Choose the right developer!");

console.log("What are you waiting for?");
`;

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scaleEffect = useTransform(scrollYProgress, [0, 0.06, 0.12], [0.6, 1, 1], { ease: easeInOut });
    const yEffect = useTransform(scrollYProgress, [0, 0.3], [0, -100], { ease: easeInOut });

    return (
        <section className="w-full">
            <div className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-16`}>
                <motion.div
                    variants={fadeIn("up", "spring", 0.1, 0.75)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center items-center mt-5"
                >
                    <div className="w-5 h-5 rounded-full bg-indigoo shadow-lg shadow-indigoo/50" />
                    <div className="w-1 sm:h-80 h-40 modern-gradient pulse-glow" />
                </motion.div>
                <div>
                    <h1 className={` heroHeadText text-white`}>
                        Hi, I'm <span className="gradient-text font-extrabold">Habib</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop user interfaces,
                        <br className="sm:block hidden" /> web, mobile and desktop applications.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-8">
                <a
                    href="#about"
                    className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/50 glass-effect flex justify-center items-start p-2 transition-all duration-300 hover:border-indigoo hover:shadow-lg hover:shadow-indigoo/30 hover:scale-110"
                >
                    <motion.div
                        animate={{ y: [0, 24, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4 rounded-full bg-gradient-to-b from-indigoo to-secondary shadow-lg"
                    />
                </a>
            </div>
            <motion.div
                style={{ scale: scaleEffect, y: yEffect }}
                className="bg-black/80 glass-effect max-w-[90%] md:max-w-7xl text-lg sm:text-2xl rounded-xl mx-auto overflow-hidden shadow-2xl shadow-indigoo/20 border border-white/5"
            >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 w-full h-2 p-4 flex flex-row-reverse gap-4 border-b border-white/5">
                    <div className="rounded-full h-2 w-2 bg-red-500 shadow-lg shadow-red-500/50"></div>
                    <div className="rounded-full h-2 w-2 bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                    <div className="rounded-full h-2 w-2 bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                <SyntaxHighlighter
                    customStyle={{ height: "100%", padding: "2rem", background: "transparent" }}
                    wrapLongLines
                    language="javascript"
                    style={atomOneDark}
                >
                    {code}
                </SyntaxHighlighter>
                <div className="bg-gradient-to-r from-indigoo via-purple-500 to-cyan-500 w-full h-1 shadow-lg shadow-indigoo/50" />
            </motion.div>
            {/* <ComputersCanvas /> */}
        </section>
    );
};

export default Hero;
