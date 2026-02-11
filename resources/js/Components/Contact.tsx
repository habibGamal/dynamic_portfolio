import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import SectionHead from "./SectionHead";

interface ContactData {
    icon: string;
    link: string;
    title: string;
}

const contactData: ContactData[] = [
    {
        icon: "/facebook-icon.png",
        link: "https://www.facebook.com/profile.php?id=100094350934368",
        title: "Programming Studio",
    },
    {
        icon: "/whatsapp-icon.png",
        link: "https://wa.me/+201021153539",
        title: "Call me any time",
    },
    {
        icon: "/linkedin-icon.png",
        link: "https://www.linkedin.com/in/habib-gamal/",
        title: "Visit my linkedin",
    },
    {
        icon: "/github-icon.png",
        link: "https://github.com/habibGamal",
        title: "Come to my github",
    },
];

const Contact = () => {
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <div className="bg-black-100 flex-[0.75] min-w-[40%] rounded-2xl p-8">
                <SectionHead title="Contact." subTitle="Get in touch" />
                <div className="mt-12 flex flex-col gap-8 text-xl">
                    {contactData.map((contact, index) => (
                        <div key={index} className="flex gap-8 items-center ">
                            <img src={contact.icon} alt="" />
                            <a className="hover:text-blue-500 underline" href={contact.link}>
                                {contact.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] md:w-[400px] h-[350px] w-[250px] mx-auto overflow-hidden"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
