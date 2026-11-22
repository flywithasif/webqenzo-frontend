import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create a modern and engaging online experience",
        "Establish a professional digital brand presence",
        "Showcase business offerings effectively",
        "Improve user navigation and content discovery",
        "Increase customer engagement and conversions",
        "Deliver a seamless experience across all devices"
    ],
    description: "A modern digital platform designed to provide an engaging online experience and establish a strong digital presence. The website features a professional interface, structured content, intuitive navigation and responsive layouts to showcase business offerings and provide a seamless user experience.",
    type: "Modern Digital Experience",
    slug: "project11",
    features: [
        "Modern website interface",
        "Professional homepage",
        "Brand introduction section",
        "Business offerings showcase",
        "Featured content sections",
        "Interactive navigation",
        "Contact and enquiry functionality",
        "Call-to-action elements",
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
    next: 12,
    name: "Modern Digital Experience",
    solutions: [
        "Created a modern and professional website interface",
        "Designed an engaging homepage experience",
        "Organized content into structured website sections",
        "Presented business offerings through dedicated sections",
        "Implemented intuitive navigation",
        "Added customer engagement opportunities",
        "Designed clear call-to-action sections",
        "Maintained consistent visual branding",
        "Optimized the website experience across desktop and mobile"
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
    overview: "A modern digital experience designed to establish a professional online presence and deliver an engaging user experience. The website combines modern visual design, structured content, intuitive navigation and responsive layouts to showcase business offerings effectively. Built with a focus on usability, professional branding and customer engagement, the platform provides a seamless experience across desktop, tablet and mobile devices."
};

export default function Project11() {
  return <ProjectCaseStudy project={project} />;
}
