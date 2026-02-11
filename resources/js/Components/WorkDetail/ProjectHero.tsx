import React from "react";
import { motion } from "framer-motion";

interface ProjectHeroProps {
    name: string;
    description: string;
    mainImage: string;
    duration: string;
    teamSize?: string;
    techCount: number;
    role: string;
}

const ProjectHero = ({
    name,
    description,
    mainImage,
    duration,
    teamSize,
    techCount,
    role,
}: ProjectHeroProps) => {
    console.log(mainImage)
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${mainImage})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary" />
                {/* Mesh Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </motion.div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-16 text-center">
                {/* Title with Gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-white to-[#00cea8] mb-6"
                >
                    {name}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg sm:text-xl text-secondary max-w-3xl mb-12"
                >
                    {description}
                </motion.p>

                {/* Metadata Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    {/* Duration Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                        <div className="text-sm text-secondary">Duration</div>
                        <div className="text-xl font-bold text-white">{duration}</div>
                    </div>

                    {/* Tech Count Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                        <div className="text-sm text-secondary">Technologies</div>
                        <div className="text-xl font-bold text-white">{techCount}+</div>
                    </div>

                    {/* Team Size Card (if available) */}
                    {teamSize && (
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                            <div className="text-sm text-secondary">Team</div>
                            <div className="text-xl font-bold text-white">{teamSize}</div>
                        </div>
                    )}

                    {/* Role Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 transition-all duration-300">
                        <div className="text-sm text-secondary">Role</div>
                        <div className="text-xl font-bold text-white">{role.split('–')[0].trim()}</div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-secondary text-sm">Scroll to explore</span>
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectHero;
