import { useEffect } from "react";

function SEO({
  title,
  description,
  path = "/",
}) {
  const siteName = "WebQenzo";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : "WebQenzo — Websites That Grow Your Business";

  const canonicalUrl = `https://webqenzo.com${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);

    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", "website");
    setProperty("og:site_name", siteName);
    setProperty(
      "og:image",
      "https://webqenzo.com/og-image.jpg"
    );

    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:title", fullTitle);
    setProperty("twitter:description", description);
    setProperty(
      "twitter:image",
      "https://webqenzo.com/og-image.jpg"
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [fullTitle, description, canonicalUrl]);

  return null;
}

export default SEO;