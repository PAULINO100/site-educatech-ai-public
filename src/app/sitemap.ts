export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://educatech-ai.vercel.app'
  const pages = [
    '', 
    '/zk-id', 
    '/civitas-inst', 
    '/civitas-gov', 
    '/acesso-institucional', 
    '/faq', 
    '/contato', 
    '/documentacao',
    '/whitepaper'
  ]

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/civitas') ? 0.9 : 0.7,
  }))
}
