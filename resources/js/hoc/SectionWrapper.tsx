import { motion } from "framer-motion";
import { styles } from "../utils/styles";
import { staggerContainer } from "../utils/motion";

export default function SectionWrapper<P extends object>(
    Component: React.ComponentType<P>,
    idName: string
) {
    return function HOC(props: P) {
        return (
            <motion.section
                variants={staggerContainer(undefined, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component {...props} />
            </motion.section>
        );
    };
}
