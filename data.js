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
            description: "Exploring the capabilities and applications of the latest open-source Large Language Models (LLMs), investigating their potential for real-world applications and contributing to the advancement of natural language processing research."
        },
        {
            title: "Computer Vision Intern",
            company: "Azzulei Technologies",
            location: "Madrid, Spain",
            date: "Jun – Aug 2025",
            description: "Automated camera control in sports events by developing a real-time Multi-Object Tracking system using YOLO, significantly improving broadcast quality and reducing manual operation requirements."
        },
        {
            title: "Research Assistant",
            company: "Imperial College London",
            location: "Remote (London, UK)",
            date: "Jun – Aug 2024",
            description: "Robustly reproduced complex dynamic systems using Neural ODEs and Physics-informed Neural Networks, contributing to cutting-edge research in computational modeling and scientific machine learning."
        },
        {
            title: "Energy Data Analyst Intern",
            company: "Endesa",
            location: "Madrid, Spain",
            date: "Jun – Aug 2023",
            description: "Estimated daily Iberian ancillary services costs with >90% accuracy using regression and MLP techniques, providing valuable insights for energy market forecasting and optimization."
        }
    ],

    education: [
        {
            degree: "MSc in Artificial Intelligence",
            institution: "Comillas Pontifical University, ETSI ICAI",
            location: "Madrid, Spain",
            date: "Sep 2025 – 2026",
            description: "Class Representative. Focused on Deep Generative Models, Differential Geometry & Calculus, MLOps, and Deep Reinforcement Learning."
        },
        {
            degree: "Exchange Student - Electrical & Computer Engineering",
            institution: "Cornell University",
            location: "Ithaca, NY, USA",
            date: "Jan – May 2025",
            description: "Writer for Cornell Healthcare Review, focusing on AI applications in the healthcare industry. Explored advanced topics in machine learning and computer engineering."
        },
        {
            degree: "BSc in Mathematical Engineering and AI",
            institution: "Comillas Pontifical University, ETSI ICAI",
            location: "Madrid, Spain",
            date: "2021 – 2025",
            description: "GPA: 8.75/10. Winner of UNIJES Social Tech Challenge for AI-powered autonomous wheelchair project. Strong foundation in mathematics, engineering, and artificial intelligence."
        }
    ],

    projects: [
        {
            title: "Visual Topological SLAM",
            tech: "ROS2, Deep Learning, Computer Vision, NLP",
            description: "Implemented a visual SLAM system integrating vision foundation models (CNN, AutoEncoder) with NLP for voice-controlled indoor navigation. Features real-time mapping and autonomous navigation capabilities.",
            link: "https://github.com/rdgzmanuel/visual_topological_slam",
            icon: "🗺️"
        },
        {
            title: "AI-Powered Autonomous Wheelchair",
            tech: "Computer Vision, Embedded Systems, AI",
            description: "Winner of UNIJES Social Tech Challenge. Developed a voice-controlled autonomous wheelchair system to improve mobility and independence for individuals with physical disabilities.",
            link: null,
            icon: "♿"
        },
        {
            title: "Physics-Informed Neural Networks",
            tech: "Neural ODEs, Scientific ML, PyTorch",
            description: "Research project at Imperial College London exploring the reproduction of complex dynamic systems using Physics-informed Neural Networks and Neural ODEs for scientific computing applications.",
            link: null,
            icon: "⚛️"
        },
        {
            title: "Multi-Object Tracking System",
            tech: "YOLO, Computer Vision, Real-time Processing",
            description: "Real-time tracking system for automated camera control in sports events. Implemented advanced object detection and tracking algorithms for seamless broadcast automation.",
            link: null,
            icon: "🎥"
        }
    ],

    skills: {
        "Programming Languages": [
            "Python (Advanced)",
            "R",
            "C#",
            "SQL",
            "JavaScript"
        ],
        "AI & Machine Learning": [
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Reinforcement Learning",
            "Neural ODEs",
            "Physics-Informed NNs"
        ],
        "Tools & Frameworks": [
            "PyTorch",
            "TensorFlow",
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
            "Differential Geometry"
        ],
        "Languages": [
            "Spanish (Native)",
            "English (Advanced)",
            "French (Basic)",
            "German (Learning)"
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