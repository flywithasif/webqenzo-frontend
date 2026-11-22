import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Build a modern and professional digital platform",
        "Create a strong and recognizable brand identity",
        "Showcase business products and services effectively",
        "Improve website usability and navigation",
        "Increase customer engagement and enquiries",
        "Provide a responsive experience across all devices"
    ],
    description: "A professionally designed digital platform focused on delivering a modern online experience. The website combines engaging visual design, structured content, intuitive navigation and responsive layouts to present business offerings effectively and provide visitors with a seamless browsing experience.",
    type: "Professional Digital Platform",
    slug: "project10",
    features: [
        "Modern website design",
        "Professional homepage",
        "Brand introduction",
        "Products and services showcase",
        "Featured content sections",
        "Interactive navigation",
        "Contact information",
        "Customer enquiry functionality",
        "Call-to-action sections",
        "Modern UI/UX",
        "Responsive website design",
        "Mobile-friendly interface",
        "Cross-device compatibility",
        "Structured content layout",
        "Interactive website elements",
        "Professional branding",
        "SEO-friendly structure",
        "Performance optimization"
    ],
    category: "Web Development",
    next: 11,
    name: "Professional Digital Platform",
    solutions: [
        "Designed a professional and modern website interface",
        "Created an engaging homepage experience",
        "Organized website content into structured sections",
        "Presented business offerings through dedicated sections",
        "Implemented intuitive navigation",
        "Added customer interaction and enquiry opportunities",
        "Created clear call-to-action elements",
        "Maintained consistent branding and visual identity",
        "Optimized the website for mobile and desktop devices"
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
    overview: "A professional digital platform developed to create a strong online presence and deliver a modern user experience. The website features an engaging interface, structured content, intuitive navigation and responsive layouts. Designed with a focus on usability, branding, customer engagement and accessibility, the platform provides a seamless browsing experience across desktop, tablet and mobile devices."
};

export default function Project10() {
  return <ProjectCaseStudy project={project} />;
}
