import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://example.com",
    objectives: [
        "Create a professional and modern business website",
        "Establish a strong digital presence for the business",
        "Showcase business services and expertise",
        "Improve customer engagement and enquiries",
        "Provide easy access to business information",
        "Create a responsive experience across all devices"
    ],
    description: "A modern business website designed to establish a strong digital presence, showcase services, communicate business value and generate customer enquiries. The platform features a professional interface, structured content sections, service presentations, business information and responsive layouts for a seamless experience across desktop, tablet and mobile devices.",
    type: "Corporate & Business Website",
    slug: "project6",
    features: [
        "Modern business website",
        "Professional homepage",
        "Business introduction section",
        "Services showcase",
        "About the company section",
        "Business information",
        "Contact section",
        "Contact enquiry form",
        "Call-to-action sections",
        "Professional navigation",
        "Responsive website layout",
        "Mobile-friendly interface",
        "Modern UI/UX design",
        "SEO-friendly structure",
        "Optimized content presentation",
        "Customer engagement sections",
        "Professional branding",
        "Cross-device compatibility"
    ],
    category: "Website Development",
    next: 7,
    name: "Business Website",
    solutions: [
        "Designed a professional digital presence for the business",
        "Created a structured homepage to introduce the brand and its offerings",
        "Organized business services into clear and accessible sections",
        "Implemented dedicated sections for company information and services",
        "Added customer enquiry and contact opportunities",
        "Designed clear call-to-action sections to encourage engagement",
        "Created a modern and professional visual experience",
        "Optimized the interface for desktop, tablet and mobile devices",
        "Improved accessibility of business information and services"
    ],
    technologies: [
        "React.js",
        "Modern Web Development",
        "Responsive Web Design",
        "UI/UX Design",
        "Business Website",
        "Frontend Development",
        "SEO-Friendly Structure",
        "Mobile Optimization"
    ],
    overview: "A modern corporate website built to establish a professional digital presence and communicate business services effectively. The platform features a clean and structured interface with dedicated sections for business information, services, company introduction and customer enquiries. Designed with a focus on usability, professional branding, responsive layouts and seamless navigation, the website provides a polished experience across desktop and mobile devices."
};

export default function Project6() {
  return <ProjectCaseStudy project={project} />;
}
