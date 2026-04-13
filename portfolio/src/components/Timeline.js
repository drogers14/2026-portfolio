import '../styling/experience.scss';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaBug, FaBriefcase } from "react-icons/fa";

const experience = [
    {
        role: "Quality Automation Engineer",
        company: "Estée Lauder Companies via HireTalent",
        date: "July 2023 - ",
        description: "Tested websites and automated workflows.",
        type: "qa",
    },
    {
        role: "Software Engineer (Release/Test)",
        company: "Twitter, Inc.",
        date: "May 2021 – January 2023",
        description: "Tested web apps and automated workflows.",
        type: "qa",
    },
    {
        role: "Software Engineer (DevOps / Intern)",
        company: "Hewlett Packard Enterprise",
        date: "May 2020 – April 2021",
        description: "Tested web apps and automated workflows.",
        type: "dev",
    },
    {
        role: "Intern",
        company: "Hewlett Packard Enterprise",
        date: "May 2020 – Jan 2021",
        description: "Supported engineering team with feature development.",
        type: "intern",
    },
];
function getIcon(type) {
    switch (type) {
        case "dev":
            return <FaCode />;
        case "qa":
            return <FaBug />;
        default:
            return <FaBriefcase />;
    }
}

export default function Timeline() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.2"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="timeline-wrapper" ref={containerRef}>
            {/* animated vertical line */}
            <motion.div className="timeline-line" style={{ scaleY }} />
            <div className="timeline">
                {experience.map((item, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1, // stagger effect
                            ease: "easeOut",
                        }}
                    >
                        {/* dot + icon */}
                        <div className="timeline-marker">
                            <div className="timeline-dot" />
                            <div className="timeline-icon">{getIcon(item.type)}</div>
                        </div>

                        <div className="timeline-content">
                            <h3>
                                {item.role} <span>@ {item.company}</span>
                            </h3>
                            <p className="timeline-date">{item.date}</p>
                            <p className="timeline-desc">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* </motion.div> */}
        </div>

    );
}