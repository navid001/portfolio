export interface ProjectCaseStudy {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    images: string[];
    results: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    date: string;
    caseStudy: ProjectCaseStudy;
}
