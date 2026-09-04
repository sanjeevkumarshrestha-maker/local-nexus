import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'logo_url', type: 'text', label: 'Logo Image URL' },
    { name: 'logo_text', type: 'text', label: 'Logo Text (Fallback)', defaultValue: 'Perfect Smile' },
    {
      name: 'nav_links',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true }
      ],
    },
    { name: 'cta_text', type: 'text', label: 'Primary Button Text (e.g., Book Online)' },
    { name: 'cta_link', type: 'text', label: 'Primary Button URL' },
    { name: 'secondary_cta_text', type: 'text', label: 'Secondary Button Text (e.g., Phone Number)' },
    { name: 'secondary_cta_link', type: 'text', label: 'Secondary Button URL' }
  ],
}