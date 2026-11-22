import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create a modern and engaging digital platform",
        "Establish a professional digital brand presence",
        "Showcase business offerings effectively",
        "Improve website navigation and user experience",
        "Increase customer engagement",
        "Provide a seamless experience across all devices"
    ],
    description: "A modern digital platform designed to provide an engaging user experience and establish a professional online presence. The website features a contemporary interface, structured content, intuitive navigation and responsive layouts to showcase business offerings and facilitate customer interaction.",
    type: "Modern Digital Website",
    slug: "project15",
    features: [
        "Modern website interface",
        "Professional homepage",
        "Brand introduction section",
        "Products and services showcase",
        "Featured content sections",
        "Interactive navigation",
        "Contact and enquiry functionality",
        "Call-to-action sections",
        "Professional branding",
        "Modern UI/UX design",
        "Responsive website layout",
        "Mobile-friendly interface",
        "Cross-device compatibility",
        "Structured content presentation",
        "Interactive components",
        "Optimized user experience",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 16,
    name: "Modern Digital Website",
    solutions: [
        "Developed a modern and professional website interface",
        "Created an engaging homepage experience",
        "Organized content into structured website sections",
        "Presented business offerings through dedicated sections",
        "Implemented intuitive website navigation",
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
    overview: "A modern digital website developed to establish a professional online presence and deliver an engaging user experience. The platform combines contemporary visual design, structured content, intuitive navigation and responsive layouts to showcase business offerings effectively. Designed with a focus on usability, professional branding and customer engagement, the website provides a seamless experience across desktop, tablet and mobile devices."
};

export default function Project15() {
  return <ProjectCaseStudy project={project} />;
}
