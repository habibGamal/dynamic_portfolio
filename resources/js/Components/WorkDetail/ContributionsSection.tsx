import React from "react";
import { motion } from "framer-motion";

interface ContributionsSectionProps {
    role: string;
    contributions: string[];
}

const ContributionsSection = ({ role, contributions }: ContributionsSectionProps) => {
    return (
        <section className="space-y-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center"
            >
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Role</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#915eff]/10 to-[#00cea8]/10 backdrop-blur-sm border-l-4 border-[#915eff] rounded-2xl p-8"
            >
                <p className="text-lg text-white mb-8 leading-relaxed">
                    {role}
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">Key Contributions</h3>

                <div className="space-y-4">
                    {contributions.map((contribution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            {/* Check Icon */}
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#915eff] to-[#00cea8] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <p className="text-secondary flex-1 group-hover:text-white transition-colors">
                                {contribution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ContributionsSection;
