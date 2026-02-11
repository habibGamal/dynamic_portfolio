import React from "react";
import { motion } from "framer-motion";

interface TechCategory {
    category: string;
    items: string[];
}

interface TechStackGridProps {
    techStack: TechCategory[];
}

const categoryColors: Record<string, string> = {
    Backend: "from-blue-500 to-blue-700",
    Frontend: "from-purple-500 to-purple-700",
    Mobile: "from-pink-500 to-pink-700",
    Infrastructure: "from-green-500 to-green-700",
    "Development Tools": "from-orange-500 to-orange-700",
    Database: "from-cyan-500 to-cyan-700",
};

const TechStackGrid = ({ techStack }: TechStackGridProps) => {
    return (
        <section className="space-y-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white text-center"
            >
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00cea8]">Stack</span>
            </motion.h2>

            <div className="space-y-12">
                {techStack.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 }}
                        className="space-y-6"
                    >
                        {/* Category Title */}
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${categoryColors[category.category] || 'from-gray-500 to-gray-700'}`} />
                            {category.category}
                        </h3>

                        {/* Tech Items Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {category.items.map((tech, techIndex) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className={`relative bg-gradient-to-br ${categoryColors[category.category] || 'from-gray-500 to-gray-700'} bg-opacity-10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-white/30 transition-all duration-300 group cursor-pointer`}
                                >
                                    <div className="text-white font-semibold">{tech}</div>

                                    {/* Glow Effect on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category.category] || 'from-gray-500 to-gray-700'} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStackGrid;
