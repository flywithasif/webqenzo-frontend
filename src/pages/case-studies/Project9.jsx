import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create a modern and user-friendly digital experience",
        "Establish a professional online brand presence",
        "Showcase products, services and business offerings",
        "Improve customer interaction and engagement",
        "Simplify navigation and content discovery",
        "Deliver a seamless experience across all devices"
    ],
    description: "A modern website developed to provide a professional digital presence and engaging user experience. The platform features a clean interface, structured content sections, intuitive navigation and responsive layouts to showcase business offerings and facilitate customer interaction.",
    type: "Modern Business & Digital Website",
    slug: "project9",
    features: [
        "Modern website interface",
        "Professional homepage",
        "Business introduction section",
        "Product and service showcase",
        "Featured content sections",
        "Interactive navigation",
        "Contact and enquiry functionality",
        "Call-to-action sections",
        "Professional branding",
        "Modern UI/UX design",
        "Responsive website layout",
        "Mobile-friendly experience",
        "Cross-device compatibility",
        "Structured content presentation",
        "Interactive website components",
        "Optimized user experience",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 10,
    name: "Modern Digital Website",
    solutions: [
        "Developed a modern and professional digital platform",
        "Created a structured homepage to showcase business offerings",
        "Organized website content into accessible sections",
        "Implemented intuitive navigation and interactive elements",
        "Designed engaging product and service presentation areas",
        "Added strategic call-to-action sections",
        "Focused on improving customer engagement",
        "Created responsive layouts for desktop and mobile",
        "Maintained consistent branding and visual design"
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
    overview: "A modern digital website designed to establish a professional online presence and provide an engaging user experience. The platform combines structured content, intuitive navigation, modern UI elements and responsive layouts to showcase business offerings effectively. With a focus on usability, professional branding and customer engagement, the website delivers a seamless experience across desktop, tablet and mobile devices."
};

export default function Project9() {
  return <ProjectCaseStudy project={project} />;
}
