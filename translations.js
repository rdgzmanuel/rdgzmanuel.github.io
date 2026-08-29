// ===================================
// Translations Data
// ===================================

const translations = {
    en: {
        meta: {
            title: "Manuel Rodríguez Villegas - Geometric AI Engineer",
            description: "Geometric AI Intern at Audi AG, building AI systems for geometry, computer vision and robotics. Selected work in visual topological mapping and geometric deep learning."
        },
        nav: {
            journey: "Journey",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            skills: "Skills"
        },
        hero: {
            subtitle: "Geometric AI Intern @ Audi AG",
            description: "I build AI systems for geometry, vision and robotics — from first principles, with a bias toward simple and efficient solutions.",
            personal: "Outside of work, I enjoy reading, fitness, and spending as much time outdoors as I can.",
            contactBtn: "Get in Touch",
            projectsBtn: "View Projects",
            cvBtn: "View CV"
        },
        sections: {
            journey: "My Journey",
            experience: "Experience",
            education: "Education",
            projects: "Featured Projects",
            skills: "Skills & Technologies",
            awards: "Honors & Awards"
        },
        journey: {
            subtitle: "A visual map of my academic and professional path.",
            academic: "Academic",
            professional: "Professional",
            exchange: "Exchange / Abroad",
            present: "Present"
        },
        links: {
            viewWebsite: "Visit Website →",
            viewProgram: "View Program →",
            viewProject: "Explore repository →",
            viewAward: "Learn More →"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        meta: {
            title: "Manuel Rodríguez Villegas - IA geométrica, visión y robótica",
            description: "Geometric AI Intern en Audi AG. Desarrollo sistemas de IA para geometría, visión por computador y robótica."
        },
        nav: {
            journey: "Trayectoria",
            experience: "Experiencia",
            education: "Educación",
            projects: "Proyectos",
            skills: "Habilidades"
        },
        hero: {
            subtitle: "Geometric AI Intern @ Audi AG",
            description: "Trabajo en sistemas de IA para geometría, visión y robótica, intentando entender cada problema desde la base y resolverlo de la forma más simple y eficiente posible.",
            personal: "Fuera del trabajo, me gusta mucho leer, hacer deporte y pasar todo el tiempo que puedo al aire libre.",
            contactBtn: "Contactar",
            projectsBtn: "Ver Proyectos",
            cvBtn: "Ver CV"
        },
        sections: {
            journey: "Mi trayectoria",
            experience: "Experiencia",
            education: "Educación",
            projects: "Proyectos destacados",
            skills: "Tecnologías y conocimientos",
            awards: "Premios y reconocimientos"
        },
        journey: {
            subtitle: "Un recorrido por mi formación y experiencia profesional.",
            academic: "Formación",
            professional: "Experiencia",
            exchange: "Estancia internacional",
            present: "Actualidad"
        },
        links: {
            viewWebsite: "Visitar web →",
            viewProgram: "Ver programa →",
            viewProject: "Explorar repositorio →",
            viewAward: "Más información →"
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

// Portfolio data with translations
const portfolioDataTranslations = {
    en: {
        experience: [
            {
                id: "audi",
                title: "Geometric AI Intern",
                company: "Audi AG",
                location: "Ingolstadt, Germany",
                date: "Jul – Nov 2026",
                description: "Deep learning on 3D data — meshes, CAD models, and voxel representations — for automotive design and engineering at Audi's Ingolstadt headquarters, plus optimization of agentic AI workflows for internal development processes.",
                link: "https://www.audi.com/en.html",
                logo: "assets/icons/experience/audi.png"
            },
            {
                id: "comillas-ta",
                title: "Teaching Assistant",
                company: "Comillas Pontifical University",
                location: "Madrid, Spain",
                date: "Sep 2025 – Apr 2026",
                description: "Helped design and deploy a GPU cluster now used by AI students for their deep learning coursework.",
                link: "https://www.comillas.edu/en/",
                logo: "assets/icons/experience/comillas.png"
            },
            {
                id: "azzulei",
                title: "Computer Vision Intern",
                company: "Azzulei Technologies",
                location: "Madrid, Spain",
                date: "Jun – Aug 2025",
                description: "Built a real-time multi-object tracking system (YOLO) that automates camera control for live sports broadcasts, replacing manual operation. Also prototyped an automated match commentary generator with open-source LLMs and text-to-speech models.",
                link: "https://azzulei.com/en/",
                logo: "assets/icons/experience/azzulei.png"
            },
            {
                id: "imperial-urop",
                title: "Research Assistant",
                company: "Imperial College London",
                location: "Remote (London, UK)",
                date: "Jun – Aug 2024",
                description: "Modelled complex dynamical systems (Lotka–Volterra, SIR, Lorenz) with Neural ODEs and Physics-Informed Neural Networks during the UROP research programme, building PyTorch models that generalized across varying initial conditions alongside an international PhD team.",
                link: "https://www.imperial.ac.uk/urop/",
                logo: "assets/icons/experience/imperial.png"
            },
            {
                id: "endesa",
                title: "Energy Data Analyst Intern",
                company: "Endesa",
                location: "Madrid, Spain",
                date: "Jun – Aug 2023",
                description: "Built regression and MLP models estimating daily Iberian ancillary-services costs with >90% accuracy, used for energy market forecasting at one of Spain's largest utilities.",
                link: "https://www.endesa.com/en",
                logo: "assets/icons/experience/endesa.png"
            }
        ],
        education: [
            {
                id: "msc-ai",
                degree: "Master's Degree in Artificial Intelligence",
                institution: "Comillas Pontifical University, ETSI ICAI",
                location: "Madrid, Spain",
                date: "Sep 2025 – 2026",
                description: "Class Representative & Member of the Academic Council. Winner of the 10th Smart Industry Hackathon. Program focused on Deep Generative Models, Probabilistic AI, MLOps, Deep Reinforcement Learning, Geometric Deep Learning, and Explainability.",
                link: "https://www.comillas.edu/en/master-en-inteligencia-artificial-avanzada/",
                logo: "assets/icons/education/comillas.png"
            },
            {
                id: "cornell-exchange",
                degree: "Exchange Student - Electrical & Computer Engineering",
                institution: "Cornell University",
                location: "Ithaca, NY, USA",
                date: "Jan – May 2025",
                description: "Writer for Cornell Healthcare Review, focusing on AI applications in the healthcare industry at Cornell University. Explored topics on data science, ethical guidelines for engineers and strategic technology and management.",
                link: "https://www.engineering.cornell.edu/ece/",
                logo: "assets/icons/education/cornell.png"
            },
            {
                id: "bsc-math-ai",
                degree: "BE in Mathematical Engineering and AI",
                institution: "Comillas Pontifical University, ETSI ICAI",
                location: "Madrid, Spain",
                date: "2021 – 2025",
                description: "GPA: 8.75/10. Winner of UNIJES Social Tech Challenge for AI-powered autonomous wheelchair project. Strong foundation in mathematics and artificial intelligence.",
                honors: "Honors in Probability & Statistics, Dynamic Systems, Big Data Architectures, Differential Geometry, Cybersecurity, Advanced Mathematics, and Computer Vision II.",
                link: "https://www.comillas.edu/en/degrees/bachelors-degree-in-engineering-mathematics-and-artificial-intelligence/",
                logo: "assets/icons/education/comillas.png"
            }
        ],
        projects: [
            {
                title: "TopoSIGMA",
                tech: "ROS 2 · DINOv2 · Computer Vision · Robotics · Information Geometry",
                description: "An online, training-free visual topological mapping system that separates place discovery from covariance-aware loop closure. It represents each place as a directional distribution of DINOv2 descriptors and builds compact, queryable graphs from RGB and wheel odometry.",
                link: "https://github.com/manuel-rodriguezvillegas/visual_topological_slam",
                image: "assets/projects/toposigma.png",
                imageWebp: "assets/projects/toposigma.webp",
                imageWebpSrcset: "assets/projects/toposigma_720.webp 720w, assets/projects/toposigma.webp 1569w",
                imageWidth: 1569,
                imageHeight: 1137,
                imageAlt: "Visual topological graph of an indoor route, with places grouped by room and loop-closure edges highlighted.",
                imageId: "toposigma",
                imageFit: "contain"
            },
            {
                imagePosition: "center top",
                title: "Geometric GNNs for Molecular Property Prediction",
                tech: "PyTorch Geometric · GIN · EGNN · QM9",
                description: "A controlled study of how 3D geometry changes molecular GNNs: topology-only GIN, distance-aware GIN and E(3)-equivariant EGNN. It evaluates four quantum properties, robustness to coordinate noise and the relationship between Ollivier–Ricci curvature and over-squashing.",
                link: "https://github.com/manuel-rodriguezvillegas/molecular_prediction",
                image: "assets/projects/molecular_gnn.png",
                imageWebp: "assets/projects/molecular_gnn.webp",
                imageWebpSrcset: "assets/projects/molecular_gnn_720.webp 720w, assets/projects/molecular_gnn.webp 1600w",
                imageWidth: 2847,
                imageHeight: 1805,
                imageAlt: "Molecular graph illustrating messages exchanged between atoms and functional groups.",
                imageId: "molecular-gnn",
                imageCredit: {
                    text: "Image from TUM DAML — Fragment-Biases for Molecular GNNs",
                    url: "https://www.cs.cit.tum.de/daml/fragment-biased-gnns/"
                }
            },
            {
                title: "Resource-Efficient LLM Fine-Tuning",
                tech: "Mistral 7B · QLoRA · PEFT · NF4 · Hugging Face",
                description: "A resource-constrained study of instruction tuning for Mistral-7B on a single 24 GB consumer GPU. QLoRA, NF4 quantization and a paged 8-bit optimizer reduced training to about 21 million parameters—just 0.29% of the model—while making the quality–memory–compute trade-off explicit. Its most valuable outcome was diagnosing why the model learned the wrong behavior, tracing it to data construction and EOS masking.",
                image: "assets/projects/llm_finetuning.jpg",
                imageWebp: "assets/projects/llm_finetuning.webp",
                imageWebpSrcset: "assets/projects/llm_finetuning_720.webp 720w, assets/projects/llm_finetuning.webp 1920w",
                imageWidth: 1920,
                imageHeight: 1080,
                imageAlt: "NVIDIA Jetson computing board and module on a dark background.",
                imageId: "efficient-llm-finetuning",
                imageCredit: {
                    text: "Image: NVIDIA",
                    url: "https://nvidianews.nvidia.com/multimedia/autonomous-machines/jetson"
                }
            },
            {
                title: "Multi-Object Tracking System",
                tech: "YOLOv8 · Optical Flow · PyTorch · ONNX",
                description: "A real-time multi-object tracking system for automated sports-camera control, combining YOLOv8 detection with optical flow and ONNX deployment. It also includes a prototype match-commentary pipeline using open-source LLMs and text-to-speech. Developed at Azzulei Technologies.",
                link: "https://github.com/manuel-rodriguezvillegas/ai_camera",
                image: "assets/projects/azzulei.png",
                imageWebp: "assets/projects/azzulei.webp",
                imageWebpSrcset: "assets/projects/azzulei_720.webp 720w, assets/projects/azzulei.webp 1200w",
                imageWidth: 1200,
                imageHeight: 665,
                imageAlt: "Football broadcast frame with players detected and tracked by the automated camera system.",
                imageId: "multi-object-tracking"
            },
            {
                title: "Deep RL Car Agent",
                tech: "PPO · PyTorch · Gymnasium · Stable-Baselines3",
                description: "A car agent trained with PPO to navigate custom 2D tracks directly from RGB frames. The project includes a custom Gymnasium simulator, continuous steering and throttle, stacked visual observations, a residual CNN, multi-track training, Optuna tuning and saliency maps for interpreting the learned policy.",
                link: "https://github.com/NatLey30/CarGameRL",
                image: "assets/projects/car_game_rl.png",
                imageWebp: "assets/projects/car_game_rl.webp",
                imageWebpSrcset: "assets/projects/car_game_rl_720.webp 720w, assets/projects/car_game_rl.webp 1178w",
                imageWidth: 1178,
                imageHeight: 1148,
                imageAlt: "Saliency map showing which pixels influence the deep-RL driving policy on a curved track.",
                imageId: "deep-rl-car-agent"
            }
        ],
        skills: {
            "AI & Machine Learning": [
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Agentic AI",
                "Probabilistic AI",
                "Robotics",
                "Deep Reinforcement Learning",
                "Physics-Informed NNs"
            ],
            "Tools & Frameworks": [
                "Python",
                "PyTorch",
                "ROS 2",
                "OpenCV",
                "MATLAB",
                "Git",
                "Docker",
                "n8n"
            ],
            "Mathematics": [
                "Linear Algebra",
                "Calculus & Analysis",
                "Optimization",
                "Dynamical Systems",
                "Differential Equations",
                "Differential Geometry",
                "Probability & Statistics"
            ],
            "Languages": [
                "Spanish (Native)",
                "English (Fluent)",
                "German (Beginner)"
            ]
        },
        awards: [
            {
                title: "Winner of the 10th Smart Industry Hackathon",
                year: "2025",
                description: "Virtual assistant with recommendation system for train operators",
                icon: "assets/icons/awards/caf.png",
                link: "https://github.com/manuel-rodriguezvillegas/hackathon_kearney"
            },
            {
                title: "Winner of UNIJES Social Tech Challenge",
                year: "2024",
                description: "Voice-controlled wheelchair project",
                icon: "assets/icons/awards/trophy.png",
                link: "https://socialtech-challenge.org"
            },
            {
                title: "Academic Excellence Scholarship",
                year: "2021, 2023, 2024",
                description: "Top-scoring students across Community of Madrid",
                icon: "assets/icons/awards/madrid.png",
                link: "https://www.comunidad.madrid/servicios/educacion/becas-excelencia-universitarios"
            },
            {
                title: "Baccalaureate Honorific Mention",
                year: "2021",
                description: "2nd highest GPA in Community of Madrid",
                icon: "assets/icons/awards/madrid.png",
                link: null
            }
        ]
    },
    es: {
        experience: [
            {
                id: "audi",
                title: "Geometric AI Intern",
                company: "Audi AG",
                location: "Ingolstadt, Alemania",
                date: "Jul – Nov 2026",
                description: "Trabajo con deep learning sobre datos 3D —mallas, modelos CAD y representaciones en vóxeles— para aplicaciones de diseño e ingeniería del automóvil. También optimizo procesos internos de desarrollo mediante flujos de trabajo basados en agentes de IA.",
                link: "https://www.audi.com/en.html",
                logo: "assets/icons/experience/audi.png"
            },
            {
                id: "comillas-ta",
                title: "Ayudante de docencia",
                company: "Universidad Pontificia Comillas",
                location: "Madrid, España",
                date: "Sep 2025 – Abr 2026",
                description: "Participé en el diseño y despliegue de un clúster de GPUs que ahora utilizan los alumnos de Inteligencia Artificial en sus asignaturas de deep learning.",
                link: "https://www.comillas.edu/",
                logo: "assets/icons/experience/comillas.png"
            },
            {
                id: "azzulei",
                title: "Prácticas de Visión por Computador",
                company: "Azzulei Technologies",
                location: "Madrid, España",
                date: "Jun – Ago 2025",
                description: "Desarrollé un sistema de seguimiento multiobjeto en tiempo real con YOLO para automatizar el control de cámara en retransmisiones deportivas. También construí un prototipo para generar comentarios de partido con LLMs de código abierto y síntesis de voz.",
                link: "https://azzulei.com/",
                logo: "assets/icons/experience/azzulei.png"
            },
            {
                id: "imperial-urop",
                title: "Asistente de investigación",
                company: "Imperial College London",
                location: "Remoto (Londres, Reino Unido)",
                date: "Jun – Ago 2024",
                description: "Durante el programa UROP modelé sistemas dinámicos complejos —Lotka–Volterra, SIR y Lorenz— mediante Neural ODEs y Physics-Informed Neural Networks. Desarrollé en PyTorch modelos capaces de generalizar entre distintas condiciones iniciales junto a un equipo internacional de doctorandos.",
                link: "https://www.imperial.ac.uk/urop/",
                logo: "assets/icons/experience/imperial.png"
            },
            {
                id: "endesa",
                title: "Prácticas de Análisis de Datos Energéticos",
                company: "Endesa",
                location: "Madrid, España",
                date: "Jun – Ago 2023",
                description: "Construí modelos de regresión y redes MLP para estimar los costes diarios de los servicios auxiliares del sistema eléctrico de la Península Ibérica, con una precisión superior al 90 %.",
                link: "https://www.endesa.com/",
                logo: "assets/icons/experience/endesa.png"
            }
        ],
        education: [
            {
                id: "msc-ai",
                degree: "Máster en Inteligencia Artificial",
                institution: "Universidad Pontificia Comillas, ETSI ICAI",
                location: "Madrid, España",
                date: "Sep 2025 – 2026",
                description: "Representante de clase y miembro del Claustro Universitario. Ganador del X Hackathon de Industria Inteligente. El programa se centra en modelos generativos profundos, geometría y cálculo diferencial, MLOps, aprendizaje por refuerzo profundo, deep learning geométrico, IA probabilística y explicabilidad.",
                link: "https://www.comillas.edu/master-en-inteligencia-artificial-avanzada/",
                logo: "assets/icons/education/comillas.png"
            },
            {
                id: "cornell-exchange",
                degree: "Intercambio en Electrical & Computer Engineering",
                institution: "Cornell University",
                location: "Ithaca, NY, EE.UU.",
                date: "Ene – May 2025",
                description: "Escribí para la Cornell Healthcare Review sobre aplicaciones de la IA en el sector sanitario. También cursé asignaturas de ciencia de datos, ética para ingenieros y gestión estratégica de la tecnología.",
                link: "https://www.engineering.cornell.edu/ece/",
                logo: "assets/icons/education/cornell.png"
            },
            {
                id: "bsc-math-ai",
                degree: "Grado en Ingeniería Matemática e Inteligencia Artificial",
                institution: "Universidad Pontificia Comillas, ETSI ICAI",
                location: "Madrid, España",
                date: "2021 – 2025",
                description: "Nota media: 8,75/10. Ganador del UNIJES SocialTech Challenge con un proyecto de silla de ruedas autónoma controlada por voz. Formación sólida, teórica y práctica, en matemáticas e inteligencia artificial.",
                honors: "Matrículas de Honor en Probabilidad y Estadística, Sistemas Dinámicos, Arquitecturas Big Data, Geometría Diferencial, Ciberseguridad, Matemáticas Avanzadas y Visión por Computador II.",
                link: "https://www.comillas.edu/grado-en-ingenieria-matematica-e-inteligencia-artificial/",
                logo: "assets/icons/education/comillas.png"
            }
        ],
        projects: [
            {
                title: "TopoSIGMA",
                tech: "ROS 2 · DINOv2 · Visión por Computador · Robótica · Geometría de la Información",
                description: "Un sistema de mapeo topológico visual que construye el mapa sobre la marcha y no requiere entrenamiento. Detecta lugares a partir de descriptores DINOv2, gestiona los cierres de bucle teniendo en cuenta la incertidumbre y genera grafos compactos a partir de imágenes RGB y odometría de ruedas.",
                link: "https://github.com/manuel-rodriguezvillegas/visual_topological_slam",
                image: "assets/projects/toposigma.png",
                imageWebp: "assets/projects/toposigma.webp",
                imageWebpSrcset: "assets/projects/toposigma_720.webp 720w, assets/projects/toposigma.webp 1569w",
                imageWidth: 1569,
                imageHeight: 1137,
                imageAlt: "Grafo topológico visual de un recorrido interior, con los lugares agrupados por estancia y los cierres de bucle resaltados.",
                imageId: "toposigma",
                imageFit: "contain"
            },
            {
                imagePosition: "center top",
                title: "GNNs geométricas para predicción molecular",
                tech: "PyTorch Geometric · GIN · EGNN · QM9",
                description: "Un estudio controlado sobre lo que aporta la geometría 3D a las GNN moleculares. Compara una GIN basada solo en la topología, otra que incorpora distancias y una EGNN equivariante E(3), evaluando cuatro propiedades cuánticas, la robustez al ruido en las coordenadas y su relación con el over-squashing.",
                link: "https://github.com/manuel-rodriguezvillegas/molecular_prediction",
                image: "assets/projects/molecular_gnn.png",
                imageWebp: "assets/projects/molecular_gnn.webp",
                imageWebpSrcset: "assets/projects/molecular_gnn_720.webp 720w, assets/projects/molecular_gnn.webp 1600w",
                imageWidth: 2847,
                imageHeight: 1805,
                imageAlt: "Grafo molecular que representa los mensajes intercambiados entre átomos y grupos funcionales.",
                imageId: "molecular-gnn",
                imageCredit: {
                    text: "Imagen de TUM DAML — Fragment-Biases for Molecular GNNs",
                    url: "https://www.cs.cit.tum.de/daml/fragment-biased-gnns/"
                }
            },
            {
                title: "Fine-tuning eficiente de un LLM",
                tech: "Mistral 7B · QLoRA · PEFT · NF4 · Hugging Face",
                description: "Un proyecto de instruction tuning para Mistral-7B diseñado desde el principio para entrenar con una única GPU de consumo de 24 GB. Combinamos QLoRA, cuantización NF4 y un optimizador paginado de 8 bits para entrenar unos 21 millones de parámetros, solo el 0,29 % del modelo, haciendo explícito el equilibrio entre calidad, memoria y coste. El resultado más valioso fue entender por qué el modelo había aprendido el comportamiento equivocado y rastrearlo hasta la construcción de los datos y el enmascarado del token EOS.",
                image: "assets/projects/llm_finetuning.jpg",
                imageWebp: "assets/projects/llm_finetuning.webp",
                imageWebpSrcset: "assets/projects/llm_finetuning_720.webp 720w, assets/projects/llm_finetuning.webp 1920w",
                imageWidth: 1920,
                imageHeight: 1080,
                imageAlt: "Placa y módulo de computación NVIDIA Jetson sobre un fondo oscuro.",
                imageId: "efficient-llm-finetuning",
                imageCredit: {
                    text: "Imagen: NVIDIA",
                    url: "https://nvidianews.nvidia.com/multimedia/autonomous-machines/jetson"
                }
            },
            {
                title: "Sistema de seguimiento multiobjeto",
                tech: "YOLOv8 · Flujo Óptico · PyTorch · ONNX",
                description: "Un sistema de seguimiento multiobjeto en tiempo real para automatizar el control de cámara en retransmisiones deportivas. Combina detección con YOLOv8, flujo óptico y despliegue en ONNX. También desarrollé un prototipo para generar comentarios de partido con LLMs de código abierto y síntesis de voz durante mis prácticas en Azzulei Technologies.",
                link: "https://github.com/manuel-rodriguezvillegas/ai_camera",
                image: "assets/projects/azzulei.png",
                imageWebp: "assets/projects/azzulei.webp",
                imageWebpSrcset: "assets/projects/azzulei_720.webp 720w, assets/projects/azzulei.webp 1200w",
                imageWidth: 1200,
                imageHeight: 665,
                imageAlt: "Retransmisión de fútbol con los jugadores detectados y seguidos por el sistema automático de cámara.",
                imageId: "multi-object-tracking"
            },
            {
                title: "Deep RL Car Agent",
                tech: "PPO · PyTorch · Gymnasium · Stable-Baselines3",
                description: "Un agente entrenado con PPO para recorrer circuitos 2D utilizando únicamente imágenes RGB. El proyecto incluye un simulador propio compatible con Gymnasium, control continuo de dirección y acelerador, apilado de fotogramas, una CNN residual, entrenamiento en varios circuitos, ajuste de hiperparámetros con Optuna y mapas de saliencia para entender qué había aprendido la política.",
                link: "https://github.com/NatLey30/CarGameRL",
                image: "assets/projects/car_game_rl.png",
                imageWebp: "assets/projects/car_game_rl.webp",
                imageWebpSrcset: "assets/projects/car_game_rl_720.webp 720w, assets/projects/car_game_rl.webp 1178w",
                imageWidth: 1178,
                imageHeight: 1148,
                imageAlt: "Mapa de saliencia que muestra qué píxeles influyen en la política de conducción por deep RL en una curva.",
                imageId: "deep-rl-car-agent"
            }
        ],
        skills: {
            "IA y Machine Learning": [
                "Deep Learning",
                "Visión por Computador",
                "Procesamiento del Lenguaje Natural (NLP)",
                "Agentes de IA",
                "IA Probabilística",
                "Robótica",
                "Aprendizaje por Refuerzo Profundo",
                "Redes neuronales informadas por física (PINNs)"
            ],
            "Herramientas y Frameworks": [
                "Python",
                "PyTorch",
                "ROS 2",
                "OpenCV",
                "MATLAB",
                "Git",
                "Docker",
                "n8n"
            ],
            "Matemáticas": [
                "Álgebra Lineal",
                "Cálculo y Análisis",
                "Optimización",
                "Sistemas Dinámicos",
                "Ecuaciones Diferenciales",
                "Geometría Diferencial",
                "Probabilidad y Estadística"
            ],
            "Idiomas": [
                "Español (Nativo)",
                "Inglés (Avanzado)",
                "Alemán (Básico)"
            ]
        },
        awards: [
            {
                title: "Ganador del X Hackathon de Industria Inteligente",
                year: "2025",
                description: "Asistente virtual con sistema de recomendaciones para operarios de trenes",
                icon: "assets/icons/awards/caf.png",
                link: "https://github.com/manuel-rodriguezvillegas/hackathon_kearney"
            },
            {
                title: "Ganador del UNIJES SocialTech Challenge",
                year: "2024",
                description: "Proyecto de silla de ruedas autónoma controlada por voz",
                icon: "assets/icons/awards/trophy.png",
                link: "https://socialtech-challenge.org"
            },
            {
                title: "Beca de Excelencia Académica",
                year: "2021, 2023, 2024",
                description: "Concedida a los universitarios con mejor expediente académico de la Comunidad de Madrid",
                icon: "assets/icons/awards/madrid.png",
                link: "https://www.comunidad.madrid/servicios/educacion/becas-excelencia-universitarios"
            },
            {
                title: "Mención Honorífica de Bachillerato",
                year: "2021",
                description: "Segunda mejor calificación de la Comunidad de Madrid",
                icon: "assets/icons/awards/madrid.png",
                link: null
            }
        ]
    }
};

// ===================================
// Timeline Data (Journey Section)
// ===================================
// Easily add/edit events here. Dates use YYYY-MM format.
// type: "academic" | "professional" | "exchange"
// "exchange" events are rendered as academic (top) but with a distinct style.
// Use end: "present" for ongoing events.
// Consecutive "academic" events that share a lane and are less than a year apart
// (e.g. bachelor's -> master's) are joined by a connector bar, so the academic
// path reads as one continuous line. See TL_BRIDGE_MAX_MONTHS in script.js.
const timelineData = {
    // Global range shown on the axis. Adjust when adding years.
    rangeStart: "2021-09",
    rangeEnd: "2026-12",
    events: {
        en: [
            {
                type: "academic",
                ref: "bsc-math-ai",
                title: "BE Mathematical Engineering & AI",
                institution: "Comillas ICAI",
                start: "2021-09",
                end: "2025-05",
                logo: "assets/icons/education/comillas.png"
            },
            {
                type: "exchange",
                ref: "cornell-exchange",
                title: "Exchange — ECE",
                institution: "Cornell University",
                start: "2025-01",
                end: "2025-05",
                logo: "assets/icons/education/cornell.png"
            },
            {
                type: "academic",
                ref: "msc-ai",
                title: "Master's Degree in Artificial Intelligence",
                institution: "Comillas ICAI",
                start: "2025-09",
                end: "present",
                logo: "assets/icons/education/comillas.png"
            },
            {
                type: "professional",
                ref: "endesa",
                title: "Energy Data Analyst Intern",
                institution: "Endesa",
                start: "2023-06",
                end: "2023-08",
                logo: "assets/icons/experience/endesa.png"
            },
            {
                type: "professional",
                ref: "imperial-urop",
                title: "Research Assistant (UROP)",
                institution: "Imperial College London",
                start: "2024-06",
                end: "2024-08",
                logo: "assets/icons/experience/imperial.png"
            },
            {
                type: "professional",
                ref: "azzulei",
                title: "Computer Vision Intern",
                institution: "Azzulei Technologies",
                start: "2025-06",
                end: "2025-08",
                logo: "assets/icons/experience/azzulei.png"
            },
            {
                type: "professional",
                ref: "audi",
                title: "Geometric AI Intern",
                institution: "Audi AG",
                start: "2026-07",
                end: "2026-11",
                logo: "assets/icons/experience/audi.png"
            }
        ],
        es: [
            {
                type: "academic",
                ref: "bsc-math-ai",
                title: "Grado en Ingeniería Matemática e IA",
                institution: "Comillas ICAI",
                start: "2021-09",
                end: "2025-05",
                logo: "assets/icons/education/comillas.png"
            },
            {
                type: "exchange",
                ref: "cornell-exchange",
                title: "Intercambio — ECE",
                institution: "Cornell University",
                start: "2025-01",
                end: "2025-05",
                logo: "assets/icons/education/cornell.png"
            },
            {
                type: "academic",
                ref: "msc-ai",
                title: "Máster en Inteligencia Artificial",
                institution: "Comillas ICAI",
                start: "2025-09",
                end: "present",
                logo: "assets/icons/education/comillas.png"
            },
            {
                type: "professional",
                ref: "endesa",
                title: "Prácticas en Análisis de Datos Energéticos",
                institution: "Endesa",
                start: "2023-06",
                end: "2023-08",
                logo: "assets/icons/experience/endesa.png"
            },
            {
                type: "professional",
                ref: "imperial-urop",
                title: "Asistente de Investigación (UROP)",
                institution: "Imperial College London",
                start: "2024-06",
                end: "2024-08",
                logo: "assets/icons/experience/imperial.png"
            },
            {
                type: "professional",
                ref: "azzulei",
                title: "Prácticas en Visión por Computador",
                institution: "Azzulei Technologies",
                start: "2025-06",
                end: "2025-08",
                logo: "assets/icons/experience/azzulei.png"
            },
            {
                type: "professional",
                ref: "audi",
                title: "Geometric AI Intern",
                institution: "Audi AG",
                start: "2026-07",
                end: "2026-11",
                logo: "assets/icons/experience/audi.png"
            }
        ]
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, portfolioDataTranslations, timelineData };
}
