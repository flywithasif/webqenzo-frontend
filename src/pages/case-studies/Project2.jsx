import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://www.desig9hause.com/",
    objectives: [
        "Develop a centralized lead management system for an architecture and design company",
        "Streamline customer enquiries and lead follow-up workflows",
        "Manage free site visit requests and scheduling",
        "Collect client requirements through structured questionnaires",
        "Simplify quotation preparation and calculation",
        "Improve visibility into lead status and business pipeline"
    ],
    description: "A custom lead management and business workflow platform developed for Desig9 Hause, an architecture and design company. The system helps manage incoming enquiries, track client interactions, coordinate free site visits, collect project requirements through questionnaires, and streamline quotation calculations and follow-up activities.",
    type: "Custom CRM & Lead Management System",
    slug: "project2",
    features: [
        "Centralized lead management dashboard",
        "Customer enquiry management",
        "Lead status tracking",
        "Follow-up management",
        "Customer interaction tracking",
        "Free site visit request management",
        "Site visit scheduling and coordination",
        "Client requirement questionnaire",
        "Project requirement collection",
        "Quotation management",
        "Quotation calculation workflow",
        "Customer and contact management",
        "Lead pipeline visibility",
        "Business workflow management",
        "Admin dashboard",
        "Responsive management interface"
    ],
    category: "CRM & Business Management",
    next: 3,
    name: "Desig9 Hause CRM",
    solutions: [
        "Built a centralized system to manage incoming architecture and design enquiries",
        "Implemented lead tracking to organize prospects throughout the sales process",
        "Created follow-up workflows to help the team manage customer communication",
        "Integrated free site visit request and management functionality",
        "Developed client questionnaires to collect project requirements",
        "Streamlined quotation preparation and calculation workflows",
        "Organized customer information and enquiry history in one system",
        "Created an administrative interface for managing leads and business activities"
    ],
    technologies: [
        "React.js",
        "JavaScript",
        "Web Application",
        "CRM Workflow",
        "Lead Management",
        "Dashboard UI",
        "Responsive Design"
    ],
    overview: "Desig9 Hause is an architecture and design company that required a custom digital solution to organize enquiries and manage client interactions more efficiently. This project focused on developing a lead management platform that brings customer enquiries, follow-ups, free site visits, requirement questionnaires and quotation calculations into a structured workflow. The system helps the team manage prospective clients from their initial enquiry through the consultation and quotation process."
};

export default function Project2() {
  return <ProjectCaseStudy project={project} />;
}
