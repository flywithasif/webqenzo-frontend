import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://krishnaayurved.com/",
    objectives: [
        "Create a comprehensive online store for Ayurvedic and herbal wellness products",
        "Organize products by health and wellness categories",
        "Improve product discovery through category browsing and filtering",
        "Provide a convenient online shopping and product purchasing experience",
        "Showcase Ayurvedic products, ingredients and product information",
        "Create a responsive shopping experience across mobile, tablet and desktop devices"
    ],
    description: "Krishna Ayurveda is an Ayurvedic and herbal wellness e-commerce platform offering a wide range of herbal products, wellness juices, powders, tablets, cosmetics and product combinations. The website provides customers with an organized shopping experience through wellness categories, product collections, product details, offers and convenient online purchasing.",
    type: "Ayurvedic & Herbal E-Commerce Platform",
    slug: "project3",
    features: [
        "Ayurvedic product catalog",
        "Herbal wellness product collections",
        "Shop by health and wellness concern",
        "Product categories and collections",
        "Herbal juices and wellness products",
        "Herbal powders and churna",
        "Ayurvedic tablets",
        "Cosmetics and personal care products",
        "Product search and filtering",
        "Product detail pages",
        "Product ingredient information",
        "Product reviews and ratings",
        "Combo products and bundle offers",
        "Shopping cart functionality",
        "Online checkout",
        "Promotional offers and discounts",
        "Customer-focused product discovery",
        "Responsive e-commerce interface"
    ],
    category: "E-commerce",
    next: 4,
    name: "Krishna Ayurveda",
    solutions: [
        "Developed an online storefront for Ayurvedic and herbal wellness products",
        "Organized products into wellness-focused categories and collections",
        "Implemented product discovery through category browsing and filtering",
        "Created product presentation pages featuring product information and ingredients",
        "Designed shopping experiences for juices, powders, tablets, cosmetics and wellness products",
        "Integrated product combinations and promotional offers into the shopping experience",
        "Designed an intuitive interface for browsing a large product catalog",
        "Optimized the shopping interface for mobile, tablet and desktop devices"
    ],
    technologies: [
        "E-Commerce Platform",
        "Responsive Web Design",
        "Product Catalog",
        "Online Shopping",
        "Product Filtering",
        "UI/UX Design",
        "Web Development"
    ],
    overview: "Krishna Ayurveda is an online Ayurvedic and herbal wellness store offering a diverse range of products across multiple wellness categories. The platform provides a structured shopping experience where customers can explore herbal juices, powders, tablets, cosmetics, wellness products and combo offers. The project focuses on product discovery, category-based navigation, product information, promotional collections and a convenient online shopping experience."
};

export default function Project3() {
  return <ProjectCaseStudy project={project} />;
}
