import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Site Footer',
  access: { read: () => true },
  fields: [
    {
      name: 'trust_badges',
      type: 'array',
      fields: [{ name: 'label', type: 'text', required: true }]
    },
    { name: 'image_url', type: 'text' },
    { name: 'logo_text', type: 'text' },
    { name: 'description', type: 'text' },
    {
      name: 'socials',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text' },
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text', required: true }
      ]
    },
    {
      name: 'columns',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true }
          ]
        }
      ]
    },
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'text' },
        { name: 'placeholder', type: 'text' },
        { name: 'button_text', type: 'text' }
      ]
    },
    { name: 'copyright_text', type: 'text' },
    {
      name: 'legal_links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true }
      ]
    }
  ]
}