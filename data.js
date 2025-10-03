// ===================================
// Portfolio Data
// ===================================

const portfolioData = {
    experience: [
        {
            title: "LLM Research Assistant",
            company: "Comillas Pontifical University",
            location: "Madrid, Spain",
            date: "Sep 2025 – Apr 2026",
            description: "I'm currently working as a Research Assistant at my university, exploring the latest open-source Large Language Models (LLMs) and investigating their potential for real-world applications.",
            link: "https://www.comillas.edu/en/"
        },
        {
            title: "Computer Vision Intern",
            company: "Azzulei Technologies",
            location: "Madrid, Spain",
            date: "Jun – Aug 2025",
            description: "For my third summer internship I joined the startup Azzulei Technologies, where my role consisted on developing an automated camera control system for sports events. I successfully achieved this task by implementing a real-time Multi-Object Tracking system using YOLO, significantly improving broadcast quality and reducing manual operation requirements. I also designed a virtual commentary generator using open-source LLMs and text-to-speech (TTS) models for automated commentary of matches.",
            link: "https://azzulei.com/en/"
        },
        {
            title: "Research Assistant",
            company: "Imperial College London",
            location: "Remote (London, UK)",
            date: "Jun – Aug 2024",
            description: "During the summer of 2024, I participated in the Undergraduate Research Opportunities Programme at Imperial College London. My work focused on reproducing complex dynamical systems (Lotka–Volterra, SIR, Lorenz) using Neural Ordinary Differential Equations (Neural ODEs) and Physics-Informed Neural Networks (PINNs). I successfully developed robust models in PyTorch that generalized well across varying initial conditions.",
            link: "https://www.imperial.ac.uk/urop/"
        },
        {
            title: "Energy Data Analyst Intern",
            company: "Endesa",
            location: "Madrid, Spain",
            date: "Jun – Aug 2023",
            description: "For my first internship I joined Endesa, one of Spain's biggest energy companies. I focused on estimating daily Iberian ancillary services costs, achieving >90% accuracy using regression and MLP techniques, providing valuable insights for energy market forecasting.",
            link: "https://www.endesa.com/en"
        }
    ],

    education: [
        {
            degree: "MSc in Artificial Intelligence",
            institution: "Comillas Pontifical University, ETSI ICAI",
            location: "Madrid, Spain",
            date: "Sep 2025 – 2026",
            description: "Class Representative. Focused on Deep Generative Models, Differential Geometry & Calculus, MLOps, Deep Reinforcement Learning, and Probabilistic AI.",
            link: "https://www.comillas.edu/en/master-en-inteligencia-artificial-avanzada/"
        },
        {
            degree: "Exchange Student - Electrical & Computer Engineering",
            institution: "Cornell University",
            location: "Ithaca, NY, USA",
            date: "Jan – May 2025",
            description: "Writer for Cornell Healthcare Review, focusing on AI applications in the healthcare industry. Explored topics on data science, ethical guidelines for engineers and strategic technology and management.",
            link: "https://www.engineering.cornell.edu/ece/"
        },
        {
            degree: "BSc in Mathematical Engineering and AI",
            institution: "Comillas Pontifical University, ETSI ICAI",
            location: "Madrid, Spain",
            date: "2021 – 2025",
            description: "GPA: 8.75/10. Winner of UNIJES Social Tech Challenge for AI-powered autonomous wheelchair project. Strong foundation in mathematics and artificial intelligence, with relevant subjects like Linear Algebra, Calculus, Probability & Statistics, Machine Learning, Deep Learning, Autonomous Mobile Robots, Natural Language Processing, Computer Vision, and Cybersecurity, among others. Honors in Probability & Statistics, Dynamic Systems, Big Data Architectures, Differential Geometry, Cybersecurity, Advanced Mathematics, and Computer Vision II.",
            link: "https://www.comillas.edu/en/degrees/bachelors-degree-in-engineering-mathematics-and-artificial-intelligence/"
        }
    ],

    projects: [
        {
            title: "Visual Topological SLAM",
            tech: "ROS2, Pytorch, Deep Learning, Computer Vision, NLP",
            description: "Implemented a visual SLAM system integrating vision foundation models (CNN, AutoEncoder) with NLP for voice-controlled indoor navigation. Features real-time mapping and autonomous navigation capabilities. The project was developed as part of the UNIJES SocialTech Challenge, a competition where different Spanish universities build an autonomous wheelchair that faces indoor challenges.",
            link: "https://github.com/rdgzmanuel/visual_topological_slam",
            icon: "🗺️"
        },
        {
            title: "Multi-Object Tracking System",
            tech: "YOLO, Computer Vision, Optical Flow",
            description: "Real-time tracking system for automated camera control in sports events. Implemented advanced object detection and tracking algorithms for efficient broadcast automation.",
            link: "https://github.com/rdgzmanuel/ai_camera",
            icon: "🎥"
        }
    ],

    skills: {
        "Programming Languages": [
            "Python (Advanced)",
            "R",
            "C#",
            "SQL"
        ],
        "AI & Machine Learning": [
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Robotics",
            "Reinforcement Learning",
            "Physics-Informed NNs"
        ],
        "Tools & Frameworks": [
            "PyTorch",
            "ROS 2",
            "OpenCV",
            "MATLAB",
            "Git"
        ],
        "Mathematics": [
            "Linear Algebra",
            "Calculus & Analysis",
            "Optimization",
            "Dynamical Systems",
            "Differential Equations",
            "Differential Geometry"
        ],
        "Languages": [
            "Spanish (Native)",
            "English (Advanced)",
            "French (Basic)"
        ]
    },

    awards: [
        {
            title: "Winner – UNIJES Social Tech Challenge",
            year: "2024",
            description: "Voice-controlled wheelchair project",
            icon: "🏆"
        },
        {
            title: "Academic Excellence Scholarship",
            year: "2021, 2023, 2024",
            description: "Top-scoring students across Community of Madrid",
            icon: "🎓"
        },
        {
            title: "Baccalaureate Honorific Mention",
            year: "2021",
            description: "2nd highest GPA in Community of Madrid",
            icon: "⭐"
        }
    ]
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}