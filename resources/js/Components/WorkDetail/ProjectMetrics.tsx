import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Metric {
    label: string;
    value: string;
}

interface ProjectMetricsProps {
    metrics: Metric[];
}

const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
    return (
        <section className="space-y-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center"
            >
                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Impact</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:border-[#915eff]/50 transition-all duration-300 group overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#915eff]/20 to-[#00cea8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8] mb-4">
                                {metric.value}
                            </div>
                            <div className="text-xl font-semibold text-white">
                                {metric.label}
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#915eff]/30 to-[#00cea8]/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectMetrics;
