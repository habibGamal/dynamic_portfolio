import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar, Hero, About, Contact, Experience, Feedbacks, Works } from "../Components";

interface Work {
    id: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    main_image: string;
    source_code_link: string;
}

interface WelcomeProps {
    works: Work[];
}

function Welcome({ works }: WelcomeProps) {
    return (
        <BrowserRouter>
            <div className="bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Works works={works} />
                <Experience />
                <Feedbacks />
                <div className="relative z-0 overflow-hidden">
                    <motion.img
                        animate={{
                            x: [0, 200, 0],
                            y: [0, 10, 0],
                            transition: { duration: 30, repeat: Infinity },
                        }}
                        className="w-full h-full object-cover absolute inset-0 z-[-1]"
                        src="/sky-stars.png"
                    />
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Welcome;
