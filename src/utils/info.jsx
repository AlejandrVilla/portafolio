const personalInfo = {
    name: "Alejandro Villa Herrera",
    // job: ["Full Stack developer", "AI", "Algorithms", "Competitive Programming"],
    job: ["Computer Scientist", "Full Stack", "Cloud dev", "AI", "Python", "C++", "JavaScript"],
    email: "aleviherrera@gmail.com",
    phone: "+51 950309242",
    profile: "/img/foto3.jpg",
    github: "/icons/github.svg",
    githubUrl: "https://github.com/AlejandrVilla/portafolio",
    linkedin: "/icons/linkedin.svg",
    linkedinUrl: "https://www.linkedin.com/in/alejandro-villa-herrera-6b8780142/",
    frontendMentorUrl: "https://www.frontendmentor.io/profile/AlejandrVilla",

}

const icons = [
    {
        path: "/icons/html.svg",
        alt: "html"
    },
    {
        path: "/icons/css.svg",
        alt: "css"
    },
    {
        path: "/icons/js.svg",
        alt: "js"
    },
    {
        path: "/icons/c.svg",
        alt: "c"
    },
    {
        path: "/icons/cpp.svg",
        alt: "cpp"
    },
    {
        path: "/icons/python.svg",
        alt: "python"
    },
    {
        path: "/icons/golang.svg",
        alt: "golang"
    },
    {
        path: "/icons/react.svg",
        alt: "react"
    },
    {
        path: "/icons/angular.svg",
        alt: "angular"
    },
    {
        path: "/icons/flask.svg",
        alt: "flask"
    },
    {
        path: "/icons/mysql.svg",
        alt: "mysql"
    },
    {
        path: "/icons/linux.svg",
        alt: "linux"
    },
    {
        path: "/icons/docker.svg",
        alt: "docker"
    },
    {
        path: "/icons/k8s.svg",
        alt: "k8s"
    },
    {
        path: "/icons/git.svg",
        alt: "git"
    },
    {
        path: "/icons/github.svg",
        alt: "github"
    },
    {
        path: "/icons/vsc.svg",
        alt: "vsc"
    },
    {
        path: "/icons/vs.svg",
        alt: "vs"
    },
];

const projects = [
    {
        title: "Real-time object detection",
        description: "A real-time object detection project using the websocket protocol, developed as a microservice architecture and deployed on kubernetes.",
        tech: ["React", "Flask", "Kubernetes", "Microservices"],
        img: "/img/arquitectura.png",
        alt: "Cloud project",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/cloud-project"
    },
    {
        title: "LLM Project",
        description: "The app responds to user prompts, a user requests for some itinerary or activities he wants and the application searches for places around him, makes some activity plans for the user.",
        tech: ["React", "Flask", "Kubernetes", "Microservices", "Open AI", "Google Maps"],
        img: "/img/llmproject.png",
        alt: "LLM Project",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/LLMproject"
    },
    {
        title: "Projects in Frontend Mentor",
        description: "My solutions to Frontend Mentor challenges.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        img: "/img/frontend_mentor.png",
        alt: "Frontend Mentor",
        liveSite: "https://www.frontendmentor.io/profile/AlejandrVilla",
        github: "https://github.com/AlejandrVilla/Frontend_Mentor"
    },
    {
        title: "Blockchain Network",
        description: "A blockchain network based on the Hyperledger Fabric framework: the architecture consists of 4 peers, 2 ordering services, and the Raft consensus algorithm.",
        tech: ["Go", "Shell", "TypeScript"],
        img: "/img/fabric.png",
        alt: "Blockchain Network",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/Blockchain-Network"
    },
    {
        title: "Kafka and Flink pipelines",
        description: "Big Data pipelines for Kafka and Flink. It creates some producers and consumers and uses HDFS as distributed storage.",
        tech: ["Python", "Shell", "Flink", "Kafka"],
        img: "/img/Apache-Flink-vs-Kafka.png",
        alt: "Kafka and Flink",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/kafka-flink-pipelines"
    },
    {
        title: "K8S Ingress and HPA",
        description: "Frontend and Backend developed in Flask as microservices, deployed in K8S with horizontal scaling and Ingress Nginx as load balancer.",
        tech: ["K8S", "Python", "Flask"],
        img: "/img/k8s2.png",
        alt: "kubernetes",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/k8s-ingress-hpa-"
    },
    {
        title: "AKS deploy",
        description: "Deploying and managing containerized applications in a Kubernetes cluster on Azure Kubernetes Service (AKS), using GitHub for version control.",
        tech: ["K8S", "Github actions", "Azure AKS"],
        img: "/img/github-actions.png",
        alt: "Github actions",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/AKS-deploy"
    },
    {
        title: "UI Bioinformatic",
        description: "User interface to facilitate chain sequencing, alignment and analysis of DNA, RNA and protein chains.",
        tech: ["Python", "Flask"],
        img: "/img/bioinformatica.png",
        alt: "UI bioinformatica",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/UI-Bioinformatica"
    },
    {
        title: "Competitive Programming",
        description: "Solutions for problems in different platforms: Codeforces, Uva and Kattis.",
        tech: ["C++", "C", "Algorithms", "Data Structures"],
        img: "/img/grafos.png",
        alt: "Competitive programming",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/Competitive_Programming"
    },
    {
        title: "Database Manager",
        description: "Relational database in C++ with support for CRUD operations and basic SQL queries, optimizing performance through an efficient indexing and storage engine. The architecture allows handling multiple concurrent connections.",
        tech: ["C++", "Parallel Programming"],
        img: "/img/BBDD.png",
        alt: "Database project",
        liveSite: null,
        github: "https://github.com/AlejandrVilla/BD-II-gestor"
    }
];

const achievements = [
    {
        title: "Scientific research and publication",
        description: "2021 IEEE Colombian Conference on Communications and Computing (COLCOM).",
        date: "May. 2021",
        url: "https://doi.org/10.1109/COLCOM52710.2021.9486298"
    },
    {
        title: "Competitive programming workshop",
        description: "Workshop dedicated to teaching competitive programming to university students.",
        date: "Jun. 2023 - Aug. 2023",
        url: null
    },
    {
        title: "Organization of the XXIX Coneimera competitive programming contest",
        description: "XXIX National Congress and International Exhibition of Mechanical Engineering, Mechatronics, Electrical, Electronic and Related Branches Arequipa 2023 held at the National University of San Agustin.",
        date: "Aug. 2023",
        url: null
    }
];

const education = [
    {
        title: "Computer Science at Universidad Nacional de San Agustin",
        description: "Studies in computer science, knowledge of data structures, algorithms, software development, parallel and distributed computing, artificial intelligence and cloud development.",
        date: "May. 2020 - Dec. 2024",
        url: null
    },
    {
        title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
        description: "Amazon Web Services (AWS)",
        date: "Dec. 2024",
        url: "https://www.credly.com/badges/e97f01fa-83d3-431b-84b4-3ca7b2c4902a/linked_in_profile"
    },
    {
        title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        description: "Amazon Web Services (AWS)",
        date: "Mar. 2024",
        url: "https://www.credly.com/badges/5f48bf2a-1f59-41af-a2db-eed6eae025d0/linked_in_profile"
    },
    {
        title: "AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
        description: "Amazon Web Services (AWS)",
        date: "Mar. 2024",
        url: "https://www.credly.com/badges/07f7c1cf-1b9d-4e36-8f1e-56ec87df6ed7/linked_in_profile"
    },
    {
        title: "Fundamentals of Deep Learning",
        description: "NVIDIA",
        date: "Oct. 2023",
        url: "https://learn.nvidia.com/certificates?id=e130485f0489431b89f381e2d5a93ca3"
    }
]

const work = [
    {
        title: "Pre-Professional Internship as DevOps Engineer",
        description: "Developed and maintained continuous integration and continuous delivery (CI/CD) pipelines using tools such as Jenkins, GitLab, and GitHub Actions. Administered and optimized container orchestrators like Kubernetes to enhance application scalability and efficiency. Collaborated with development teams to implement DevOps practices and ensure high-quality software delivery.",
        date: "Jan. 2024 - Mar. 2024",
        url: null
    },
    {
        title: " Jr Software Engineer",
        description: "Developed and maintained frontend and backend applications, ensuring their efficient deployment on cloud platforms such as AWS, and provided ongoing maintenance for various web applications. Managed APIs such as Google Maps and OpenAI to integrate advanced functionalities into applications. Handled large language models (LLMs) such as GPT and Anthropic using Langchain for various implementations.",
        date: "Apr. 2024 - Jul. 2024",
        url: null
    }
]

export { personalInfo, icons, projects, achievements, education, work };