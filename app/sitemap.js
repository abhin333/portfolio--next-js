// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://abhin-portfolio.netlify.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Add other routes here if you have multiple pages (e.g., /projects, /contact)
  ];
}