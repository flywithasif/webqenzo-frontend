import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create an engaging and modern digital platform",
        "Improve user experience and website navigation",
        "Showcase products, services and business information",
        "Increase customer engagement and conversions",
        "Build a responsive and visually appealing interface",
        "Establish a strong digital brand identity"
    ],
    description: "A modern digital platform designed to provide an engaging user experience, showcase business offerings and establish a strong online presence. The website combines modern design principles, intuitive navigation, structured content and responsive layouts to create a seamless experience across devices.",
    type: "Modern Digital Platform",
    slug: "project7",
    features: [
        "Modern website interface",
        "Professional homepage design",
        "Responsive layouts",
        "Interactive navigation",
        "Content showcase sections",
        "Service or product presentation",
        "Featured content sections",
        "Call-to-action elements",
        "Contact and enquiry functionality",
        "Modern UI/UX design",
        "Mobile-friendly interface",
        "Cross-device compatibility",
        "Optimized user navigation",
        "Professional branding",
        "Structured content layout",
        "Interactive website components",
        "SEO-friendly structure",
        "Performance-focused design"
    ],
    category: "Web Development",
    next: 8,
    name: "Digital Platform",
    solutions: [
        "Developed a modern and visually engaging website interface",
        "Created a structured layout to present business offerings",
        "Improved navigation through intuitive website sections",
        "Designed engaging content presentation areas",
        "Implemented responsive layouts for different screen sizes",
        "Added strategic call-to-action sections",
        "Created a consistent visual identity throughout the website",
        "Focused on usability and user engagement",
        "Optimized the website experience for mobile and desktop users"
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
    overview: "A modern digital platform designed to provide an engaging and seamless online experience. The website combines professional design, structured content, intuitive navigation and responsive layouts to showcase business offerings effectively. With a focus on user experience, accessibility, visual consistency and mobile responsiveness, the platform delivers a modern digital experience across multiple devices."
};

export default function Project7() {
  return <ProjectCaseStudy project={project} />;
}
