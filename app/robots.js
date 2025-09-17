export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/resume/'],
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                allow: ['/'],
                disallow: ['/resume/'],
            },
        ],
        sitemap: 'https://therenukafuse.in/sitemap.xml',
    }
}