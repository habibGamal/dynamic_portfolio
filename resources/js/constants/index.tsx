import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

interface NavLink {
    id: string;
    title: string;
}

interface Service {
    title: string;
    icon: string;
}

interface Technology {
    name: string;
    icon: string;
}

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

interface Testimonial {
    testimonial: React.ReactNode;
    name: string;
    designation: string;
    company: string;
    image: string;
}

interface ProjectTag {
    name: string;
    color: string;
}

interface Project {
    name: React.ReactNode;
    description: string;
    tags: ProjectTag[];
    image: string;
    source_code_link: string;
}

export const navLinks: NavLink[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services: Service[] = [
    {
        title: "Web Developer",
        icon: "/web-icon.png",
    },
    {
        title: "Mobile Developer",
        icon: "/mobile-icon.png",
    },
    {
        title: "Desktop Developer",
        icon: "/desktop-icon.png",
    },
    {
        title: "Server Handling",
        icon: "/deploy-icon.png",
    },
];

const technologies: Technology[] = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences: Experience[] = [
    {
        title: "Develop Cashier System",
        company_name: "POS System",
        icon: "/system-icon.png",
        iconBg: "#383E56",
        date: "March 2023 - Present",
        points: [
            "Casher System: Comprehensive POS system for business operations.",
            "Efficient product management: Add products, create groups, track details, handle expiration, manage opening stocks.",
            "Easy stock management: Add stocks, track inventory, manage losses, transfer between locations.",
            "Invoicing feature: Create buying/selling invoices, handle return transactions.",
        ],
    },
    {
        title: "Alottopics",
        company_name: "Wordpress Website",
        icon: "/wordpress-icon.png",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Alottopics: Fashion design WordPress website for training through videos and tasks.",
            "Instructional videos and exercises: Enhance fashion design skills through dedicated section.",
            "Gallery section: Showcases users' works",
            "Sharing functionality: Easily share works, promote collaboration and interaction.",
            "Supportive community: Learn from others, exchange ideas in a creative environment.",
        ],
    },
    {
        title: "CounteryVoice",
        company_name: "Desktop Application",
        icon: "/desktop-icon.png",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - March 2023",
        points: [
            "CounteryVoice: Feature-rich desktop application for learning country music theories.",
            "Practice section: Apply learned theories, wide range of controllers, editable music notes.",
            "Test section: Assess understanding and application of country music theories.",
        ],
    },
    {
        title: "Diet4underweight",
        company_name: "Mobile Application",
        icon: "/mobile-icon.png",
        iconBg: "#383E56",
        date: "Nov 2022 - Dec 2022",
        points: [
            "Diet4underweight: Mobile app for personalized nutrition plans for underweight individuals.",
            "BMR calculator: Determine suitable calorie intake based on Basal Metabolic Rate.",
            "Create nutrition plan: Calculate calories for each meal, distribute over main meals and snacks.",
            "Meal schedule alarm: Timely reminders to consume meals, consistent adherence.",
            "Nutrition library: Access educational resources on nutrition-related topics. ",
        ],
    },
];

const testimonials: Testimonial[] = [
    {
        testimonial: "يجنن حلو اوي ❤️ تسلم ايديك بجد",
        name: "Dr. Maha Ahmed",
        designation: "Assistant Lecturer",
        company: "the Department of Musical Education",
        image: "/girl-icon.png",
    },
    {
        testimonial: (
            <>
                الله ينور يا بيبو ياجامد❤️❤️❤️
                <br />
                لا انا بقيت واثقة معاك مفيش مستحيل 💪🏻💪🏻💪🏻
            </>
        ),
        name: "Dr. Youstina Victor",
        designation: "Assistant Lecturer",
        company: "the Department of Musical Education",
        image: "/girl-icon.png",
    },
    {
        testimonial: " حلو اوي ❤️ تسلم ايديك",
        name: "Dr. Nada",
        designation: "Assistant Lecturer",
        company: "the Department of Economy",
        image: "/girl-icon.png",
    },
];

const projects: Project[] = [
    {
        name: (
            <>
                <a className="hover:text-blue-500" href="https://learning-piano-online.net/">
                    Learning Piano Online
                </a>
            </>
        ),
        description:
            "The project is an online learning platform that facilitates virtual education and collaboration. It includes features such as scheduling Zoom meetings, publishing articles, and...",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "typescript",
                color: "text-blue-700",
            },
            {
                name: "tailwind",
                color: "text-green-400",
            },
            {
                name: "laravel",
                color: "text-red-500",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: "/projects/lpo/main.jpg",
        source_code_link: "https://github.com/habibGamal/LPO_NEW",
    },
    {
        name: (
            <>
                <a className="hover:text-blue-500" href="https://aichesusc.org/">
                    AIChE
                </a>
            </>
        ),
        description:
            "The project is a student activity website that serves as a platform for publishing articles and sharing various materials such as images and PDF documents. The system's content is organized into...",
        tags: [
            {
                name: "react",
                color: "text-blue-500",
            },
            {
                name: "typescript",
                color: "text-blue-700",
            },
            {
                name: "tailwind",
                color: "text-green-400",
            },
            {
                name: "laravel",
                color: "text-red-500",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: "/projects/aiche/main.jpg",
        source_code_link: "https://github.com/habibGamal/aiche-remaster",
    },
    {
        name: "Expense Tracker",
        description:
            "The project consists of three main components: Expense Planning, Money Management, and Savings. Expense Planning allows users to create personalized expense plans based on requested data and personal...",
        tags: [
            {
                name: "flutter",
                color: "text-sky-500",
            },
        ],
        image: "/projects/money_app/main.jpg",
        source_code_link: "https://github.com/habibGamal/money_app",
    },
];

export { services, technologies, experiences, testimonials, projects };
