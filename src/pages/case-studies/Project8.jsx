import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Develop a premium and modern website experience",
        "Strengthen the brand's digital presence",
        "Present products and services professionally",
        "Improve website navigation and user experience",
        "Increase customer interaction and engagement",
        "Create a seamless experience across all devices"
    ],
    description: "A premium website experience designed to showcase a brand's identity, products and services through a modern and visually engaging interface. The platform focuses on professional presentation, intuitive navigation, responsive design and user-friendly interactions to create a seamless digital experience.",
    type: "Premium Brand Website",
    slug: "project8",
    features: [
        "Premium website design",
        "Modern homepage",
        "Brand introduction section",
        "Product and service showcase",
        "Featured content sections",
        "Interactive navigation",
        "Call-to-action sections",
        "Contact and enquiry functionality",
        "Professional branding",
        "Modern UI/UX",
        "Responsive website layout",
        "Mobile-friendly interface",
        "Cross-device compatibility",
        "Structured content presentation",
        "Interactive website elements",
        "Optimized user experience",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 9,
    name: "Premium Brand Website",
    solutions: [
        "Created a premium and modern digital experience",
        "Designed an engaging homepage to introduce the brand",
        "Organized content into clear and accessible sections",
        "Showcased products and services through dedicated sections",
        "Implemented intuitive navigation and user-friendly interactions",
        "Added strategic call-to-action elements",
        "Maintained consistent visual branding throughout the platform",
        "Designed responsive layouts for desktop, tablet and mobile",
        "Focused on usability, engagement and professional presentation"
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
    overview: "A premium brand website designed to establish a strong digital identity and deliver an engaging online experience. The platform features a modern visual interface, structured content sections, product and service showcases, intuitive navigation and responsive layouts. Built with a focus on professional branding, usability and user engagement, the website delivers a seamless experience across desktop and mobile devices."
};

export default function Project8() {
  return <ProjectCaseStudy project={project} />;
}
