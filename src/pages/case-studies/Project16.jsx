import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create a modern and professional digital platform",
        "Establish a strong digital brand presence",
        "Showcase business offerings effectively",
        "Improve user experience and website navigation",
        "Increase customer engagement and enquiries",
        "Provide a seamless experience across all devices"
    ],
    description: "A modern digital platform developed to deliver a professional online presence and engaging user experience. The website features a contemporary interface, structured content, intuitive navigation and responsive layouts to showcase business offerings and provide visitors with a seamless browsing experience.",
    type: "Modern Digital Platform",
    slug: "project16",
    features: [
        "Modern website interface",
        "Professional homepage",
        "Brand introduction section",
        "Products and services showcase",
        "Featured content sections",
        "Interactive navigation",
        "Contact information",
        "Customer enquiry functionality",
        "Call-to-action sections",
        "Professional branding",
        "Modern UI/UX design",
        "Responsive website layout",
        "Mobile-friendly interface",
        "Cross-device compatibility",
        "Structured content presentation",
        "Interactive website components",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 1,
    name: "Digital Platform",
    solutions: [
        "Developed a modern and professional website interface",
        "Created an engaging homepage experience",
        "Organized website content into structured sections",
        "Showcased business offerings through dedicated sections",
        "Implemented intuitive navigation",
        "Added customer engagement opportunities",
        "Created clear call-to-action sections",
        "Maintained consistent visual branding",
        "Optimized the website for desktop and mobile devices"
    ],
    technologies: [
        "React.js",
        "Modern Web Development",
        "Responsive Web Design",
        "UI/UX Design",
        "Frontend Development",
        "Interactive Components",
        "Mobile Optimization",
        "SEO-Friendly Structure"
    ],
    overview: "A modern digital platform developed to establish a professional online presence and deliver an engaging user experience. The website combines contemporary visual design, structured content, intuitive navigation and responsive layouts to showcase business offerings effectively. Designed with a focus on usability, professional branding and customer engagement, the platform provides a seamless experience across desktop, tablet and mobile devices."
};

export default function Project16() {
  return <ProjectCaseStudy project={project} />;
}
