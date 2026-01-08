import { z } from 'astro/zod'

export const HeaderMenuSchema = () =>
  z
    .array(
      z.object({
        title: z.string(),
        link: z.string(),
        icon: z.string().optional().describe('The icon name for the menu item (optional)'),
      })
    )
    .default([
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'Archives', link: '/archives' }, 
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ])
    .describe('The header menu items for your site.')
