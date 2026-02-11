import React from "react";
import { motion } from "framer-motion";

interface ProjectOverviewProps {
    problem: string;
    solution: string;
}

const ProjectOverview = ({ problem, solution }: ProjectOverviewProps) => {
    return (
        <section className="space-y-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center mb-16"
            >
                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Overview</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Problem Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="group relative bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 hover:border-red-500/40 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Icon */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-2xl shadow-lg">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-6">The Problem</h3>
                    <p className="text-secondary leading-relaxed">{problem}</p>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Solution Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02, rotateY: -5 }}
                    className="group relative bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Icon */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-2xl shadow-lg">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 mt-6">The Solution</h3>
                    <p className="text-secondary leading-relaxed">{solution}</p>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectOverview;
