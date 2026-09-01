import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Site Header',
  access: { read: () => true },
  fields: [
    { name: 'logo_text', type: 'text' },
    { name: 'logo_url', type: 'text' },
    {
      name: 'nav_links',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
        {
          name: 'mega_items',
          type: 'array',
          label: 'Dropdown Sub-items',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'link', type: 'text', required: true },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    },
    { name: 'secondary_cta_text', type: 'text' },
    { name: 'secondary_cta_link', type: 'text' },
    { name: 'cta_text', type: 'text' },
    { name: 'cta_link', type: 'text' },
  ],
}