import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import ProjectHero from "../Components/WorkDetail/ProjectHero";
import ProjectOverview from "../Components/WorkDetail/ProjectOverview";
import TechStackGrid from "../Components/WorkDetail/TechStackGrid";
import ImageGallery from "../Components/WorkDetail/ImageGallery";
import ChallengesTimeline from "../Components/WorkDetail/ChallengesTimeline";
import ContributionsSection from "../Components/WorkDetail/ContributionsSection";
import ProjectMetrics from "../Components/WorkDetail/ProjectMetrics";

interface TechCategory {
    category: string;
    items: string[];
}

interface Challenge {
    title: string;
    description: string;
    decision: string;
}

interface Metric {
    label: string;
    value: string;
}

interface Work {
    id: number;
    name: string;
    description: string;
    full_description: string;
    problem: string;
    solution: string;
    role: string;
    contributions: string[];
    tech_stack: TechCategory[];
    challenges: Challenge[];
    images_urls: string[];
    metrics?: Metric[];
    tags: { name: string; color: string }[];
    main_image_url: string;
    source_code_link: string;
    duration: string;
    team_size?: string;
}

interface WorkDetailProps {
    work: Work;
}

const WorkDetail = ({ work }: WorkDetailProps) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-primary min-h-screen relative">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-tertiary z-50">
                <div
                    className="h-full bg-gradient-to-r from-[#915eff] to-[#00cea8] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Back Button */}
            <Link
                href="/"
                className="fixed top-8 left-8 z-40 bg-tertiary/80 backdrop-blur-sm hover:bg-tertiary transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 group"
            >
                <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Home
            </Link>

            {/* Hero Section */}
            <ProjectHero
                name={work.name}
                description={work.description}
                mainImage={work.main_image_url}
                duration={work.duration}
                teamSize={work.team_size}
                techCount={work.tech_stack.reduce((acc, cat) => acc + cat.items.length, 0)}
                role={work.role}
            />

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 sm:px-16 py-20 space-y-32">
                {/* Overview Section */}
                <ProjectOverview problem={work.problem} solution={work.solution} />

                {/* Contributions Section */}
                <ContributionsSection role={work.role} contributions={work.contributions} />

                {/* Tech Stack Section */}
                <TechStackGrid techStack={work.tech_stack} />

                {/* Metrics Section (if available) */}
                {work.metrics && work.metrics.length > 0 && (
                    <ProjectMetrics metrics={work.metrics} />
                )}

                {/* Image Gallery Section */}
                {work.images_urls && work.images_urls.length > 0 && (
                    <ImageGallery images={work.images_urls} projectName={work.name} />
                )}

                {/* Challenges Timeline Section */}
                {work.challenges && work.challenges.length > 0 && (
                    <ChallengesTimeline challenges={work.challenges} />
                )}

                {/* Source Code Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a
                        href={work.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#915eff] to-[#00cea8] hover:from-[#00cea8] hover:to-[#915eff] transition-all duration-500 px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-3 group"
                    >
                        <svg
                            className="w-6 h-6 group-hover:rotate-12 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source Code
                    </a>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-[#915eff] hover:bg-[#00cea8] transition-all duration-300 p-4 rounded-full text-white shadow-lg z-40"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </motion.button>
            )}
        </div>
    );
};

export default WorkDetail;
