import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Develop a modern and visually engaging website",
        "Create a strong digital brand identity",
        "Present business offerings professionally",
        "Improve website navigation and accessibility",
        "Enhance customer engagement",
        "Provide a responsive experience across all devices"
    ],
    description: "A modern website designed to deliver a professional digital experience through visually engaging design, structured content and intuitive navigation. The platform focuses on showcasing business offerings, improving customer engagement and creating a seamless browsing experience across desktop, tablet and mobile devices.",
    type: "Modern Business Website",
    slug: "project12",
    features: [
        "Modern website interface",
        "Professional homepage",
        "Brand introduction",
        "Business offerings showcase",
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
        "Interactive components",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 13,
    name: "Modern Business Website",
    solutions: [
        "Developed a modern and professional website interface",
        "Created an engaging homepage experience",
        "Organized website content into structured sections",
        "Showcased business offerings effectively",
        "Implemented intuitive website navigation",
        "Added customer enquiry opportunities",
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
    overview: "A modern business website developed to establish a strong digital presence and deliver a professional user experience. The platform features a visually engaging interface, structured content sections, intuitive navigation and responsive layouts to showcase business offerings effectively. Designed with a focus on usability, branding, accessibility and customer engagement, the website provides a seamless experience across desktop, tablet and mobile devices."
};

export default function Project12() {
  return <ProjectCaseStudy project={project} />;
}
