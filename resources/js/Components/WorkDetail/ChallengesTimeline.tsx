import React from "react";
import { motion } from "framer-motion";

interface Challenge {
    title: string;
    description: string;
    decision: string;
}

interface ChallengesTimelineProps {
    challenges: Challenge[];
}

const ChallengesTimeline = ({ challenges }: ChallengesTimelineProps) => {
    return (
        <section className="space-y-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center"
            >
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Challenges</span>
            </motion.h2>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#915eff] via-[#00cea8] to-[#915eff] hidden md:block" />

                <div className="space-y-16">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Content Card */}
                            <div className="flex-1 w-full">
                                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:border-[#915eff]/50 transition-all duration-300 group">
                                    {/* Challenge Number */}
                                    <div className="inline-block bg-gradient-to-r from-[#915eff] to-[#00cea8] text-white font-bold px-4 py-2 rounded-full mb-4">
                                        Challenge #{index + 1}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915eff] group-hover:to-[#00cea8] transition-all">
                                        {challenge.title}
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[#915eff] mb-2 uppercase tracking-wider">
                                                The Challenge
                                            </h4>
                                            <p className="text-secondary leading-relaxed">
                                                {challenge.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[#00cea8] mb-2 uppercase tracking-wider">
                                                The Decision
                                            </h4>
                                            <p className="text-secondary leading-relaxed">
                                                {challenge.decision}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="hidden md:block flex-shrink-0">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#915eff] to-[#00cea8] border-4 border-primary shadow-lg"
                                />
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesTimeline;
