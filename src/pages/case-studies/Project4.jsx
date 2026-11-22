import ProjectCaseStudy from "./ProjectCaseStudy";

const project = {
    url: "https://www.mydesignation.com/",
    objectives: [
        "Create a modern online fashion shopping experience",
        "Showcase a diverse collection of apparel and fashion products",
        "Improve product discovery through categories, collections and filters",
        "Provide customers with convenient product browsing and purchasing",
        "Create a seamless shopping experience across desktop and mobile devices",
        "Highlight unique designs, collections and fashion trends"
    ],
    description: "MyDesignation is a fashion and apparel e-commerce platform offering a diverse collection of shirts, T-shirts, oversized tees, polo T-shirts, hoodies, sweatshirts, pants, joggers, jackets and accessories. The store combines contemporary fashion with distinctive artwork, cultural inspiration and creative product designs, providing customers with an engaging online shopping experience.",
    type: "Fashion & Apparel E-Commerce Platform",
    slug: "project4",
    features: [
        "Fashion e-commerce storefront",
        "Shirts and apparel collections",
        "Oversized T-shirts",
        "Regular and polo T-shirts",
        "Hoodies and sweatshirts",
        "Pants and bottomwear",
        "Joggers and casual wear",
        "Jackets and fashion accessories",
        "Product category navigation",
        "Product search functionality",
        "Product filters",
        "Size selection",
        "Product detail pages",
        "Product ratings and reviews",
        "Shopping cart functionality",
        "Product discounts and offers",
        "Collection-based shopping",
        "Trending and featured products",
        "Responsive shopping interface",
        "Mobile shopping experience"
    ],
    category: "E-commerce",
    next: 5,
    name: "MyDesignation",
    solutions: [
        "Created an online fashion storefront for apparel and lifestyle products",
        "Organized clothing collections through categories and product collections",
        "Implemented product discovery through search and filtering",
        "Designed product browsing experiences for shirts, T-shirts, hoodies and bottomwear",
        "Integrated size selection and product detail presentation",
        "Showcased trending products, featured collections and promotional offers",
        "Created a visually engaging shopping experience for fashion-conscious customers",
        "Optimized the storefront experience for mobile and desktop users"
    ],
    technologies: [
        "E-Commerce Platform",
        "Online Store",
        "Responsive Web Design",
        "Product Catalog",
        "Product Filtering",
        "Shopping Cart",
        "Fashion UI/UX",
        "Web Development"
    ],
    overview: "MyDesignation is a fashion apparel brand offering contemporary clothing and lifestyle products through its online store. The e-commerce platform features a wide selection of shirts, oversized T-shirts, polo T-shirts, hoodies, sweatshirts, pants, joggers, jackets and accessories. The shopping experience focuses on collection discovery, product browsing, search and filtering, size selection, promotional offers and a convenient online purchasing journey."
};

export default function Project4() {
  return <ProjectCaseStudy project={project} />;
}
