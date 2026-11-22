import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://www.anjelgift.com/",
    objectives: [
        "Build a complete online shopping platform for toys, gifts, baby products, stationery and lifestyle products",
        "Create a seamless and intuitive shopping experience across desktop, tablet and mobile devices",
        "Improve product discovery through categories, search and product browsing",
        "Develop a secure and reliable checkout and payment experience",
        "Create a scalable e-commerce architecture with customer and admin functionality"
    ],
    description: "Anjelgift is a full-stack e-commerce platform designed to make shopping for toys, gifts, baby products, stationery and lifestyle products simple and enjoyable. The platform combines a responsive storefront, product discovery, shopping cart, wishlist, customer authentication, checkout, payment processing and comprehensive administrative functionality.",
    type: "Full-Stack E-Commerce Platform",
    slug: "project1",
    features: [
        "Responsive e-commerce storefront",
        "Product catalog and category browsing",
        "Product search and discovery",
        "Shopping cart functionality",
        "Wishlist management",
        "Customer authentication and accounts",
        "Checkout and order placement",
        "Cashfree payment gateway integration",
        "Order management and tracking functionality",
        "Customer account dashboard",
        "Admin dashboard",
        "Product and category management",
        "Inventory management",
        "Product image upload and cloud storage",
        "Responsive mobile shopping experience",
        "Secure API-based backend architecture"
    ],
    category: "E-commerce",
    next: 2,
    name: "Anjelgift",
    solutions: [
        "Developed a modern and responsive online shopping storefront",
        "Implemented product browsing, search, categories and product discovery",
        "Integrated shopping cart and wishlist functionality",
        "Built customer authentication and account functionality",
        "Implemented checkout workflow and Cashfree payment integration",
        "Developed backend APIs for products, orders, customers and administration",
        "Created administrative tools for managing products, categories and inventory",
        "Integrated cloud-based product media storage using Cloudflare R2",
        "Optimized the interface for mobile, tablet and desktop shopping experiences"
    ],
    technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Cashfree Payments",
        "Cloudflare R2",
        "REST APIs"
    ],
    overview: "Anjelgift is a modern online shopping platform offering toys, gifts, baby products, stationery and lifestyle products. The project focuses on creating a convenient digital shopping experience with intuitive product discovery, responsive design, customer accounts, wishlist and cart functionality, checkout and payment integration. The platform also includes a backend infrastructure and administrative system to manage products, orders, inventory and business operations."
};

export default function Project1() {
  return <ProjectCaseStudy project={project} />;
}
