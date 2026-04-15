import '../styling/App.scss';
import '../styling/education.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const coursework = {
    "🧠 AI / ML": [
        {
            name: "Applied Computer Vision",
            details: "Worked on image classification and feature detection.",
            projects: ["Familiarity with Linux Applied Computer Vision Fundamentals", "MPEG and Frame Capture with Edge Detection",
                "Threshold Analysis, Segmentation and Tracking", "Continuous Transformations for Scene Understanding",
                "Using Computer Vision to Aide in Self-Driving Vehicle through Advanced Pedestrian Detection"
            ],
        },
        {
            name: "Applied Machine Learning",
            details: "Worked on image classification and feature detection.",
            projects: ["Object detection model", "Image segmentation project"],
        },
    ],
    "⚙️ Systems & Infrastructure": [
        {
            name: "Scalable Software Systems",
            details: "Studied memory management, scheduling, and concurrency.",
            projects: ["Thread scheduler simulation"],
        },
        {
            name: "Network Forensics",
            details: "Analyzed network traffic and security vulnerabilities.",
            projects: ["Packet analysis with Wireshark"],
        },
    ],
    "🌐 Web & Application Development": [
        {
            name: "Web Technology",
            details: "Built full-stack applications using modern frameworks.",
            projects: ["React app with API integration"],
        },
        {
            name: "Client Side App Development",
            details: "Built full-stack applications using modern frameworks.",
            projects: ["React app with API integration"],
        },
    ],
    "💻 Software Engineering": [
        {
            name: "Software Design & Maintenance",
            details: "Built full-stack applications using modern frameworks.",
            projects: ["React app with API integration"],
        },
        {
            name: "Advanced Object-Oriented Programming",
            details: "Built full-stack applications using modern frameworks.",
            projects: ["React app with API integration"],
        },
    ],
};

export default function Education() {
    const [activeCourse, setActiveCourse] = useState(null);
    const toggleCourse = (name) => {
        setActiveCourse(activeCourse === name ? null : name);
    };
    return (
        <div className="education">
            {/* MASTERS CARD */}
            <div className="edu-card">
                <h2>🎓 M.S. Computer Science</h2>
                <div className="school-row">
                    <p className="school">California State University, Chico</p>

                    <div className="edu-meta">
                        <span className="dates">2024 – Present</span>
                        <span className="status-dot current"></span>
                    </div>
                </div>

                {Object.entries(coursework).map(([category, courses]) => (
                    <div key={category} className="course-section">
                        <h4>{category}</h4>

                        <div className="course-grid">
                            {courses.map((course) => (
                                <div key={course.name}>
                                    {/* CLICKABLE PILL */}
                                    <motion.div
                                        className="course-pill"
                                        onClick={() => toggleCourse(course.name)}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {course.name}
                                    </motion.div>

                                    {/* EXPANDABLE CONTENT */}
                                    <AnimatePresence>
                                        {activeCourse === course.name && (
                                            <motion.div
                                                className="course-expanded"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p>{course.details}</p>

                                                <ul>
                                                    {course.projects.map((p, i) => (
                                                        <li key={i}>{p}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Google Certfication */}
            <div className="edu-card">
                <h2>🎓 B.Sc Computer Science</h2>
                <div className="school-row">
                    <p className="school">California State University, Chico</p>

                    <div className="edu-meta">
                        <span className="dates">2016 - 2020</span>
                        <span className="status-dot past"></span>
                    </div>
                </div>
                <p className="edu-desc">
                {/* Understand foundational concepts in UX design, such as user-centered design, the design process, accessibility, and equity-focused design.  */}
                </p>

                <div className="edu-tags">
                    <span>Artificial Intelligence</span>
                    <span>Numerical Methods and Parallel Programming</span>
                    <span>Compiler Design</span>
                    <span>Cybersecurity</span>
                    <span>Operating Systems</span>

                </div>
            </div>

            {/*Bachelors of Science*/}
            <div className="edu-card">
                <h2>🎓 Certificate in Foundations of User Experience (UX) Design</h2>
                <div className="school-row">
                    <p className="school">Google</p>

                    <div className="edu-meta">
                        <span className="dates">2023</span>
                        <span className="status-dot past"></span>
                    </div>
                </div>
                <p className="edu-desc">
                Understand foundational concepts in UX design, such as user-centered design, the design process, accessibility, and equity-focused design. 
                </p>

                <div className="edu-tags">
                    <span>User Research</span>
                    <span>User Experience Design</span>
                    <span>User Experience</span>
                    <span>Product Development</span>

                </div>
            </div>
        </div>
    );
}