import type { Block } from 'payload'

export const ServicesHighlight: Block = {
  slug: 'serviceshighlight', // Matches your frontend blockRegistry exactly
  labels: {
    singular: 'Services Highlight',
    plural: 'Services Highlights',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'textarea',
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'link', type: 'text' },
      ],
    },
    {
      name: 'viewAllCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'link', type: 'text' },
      ],
    },
  ],
}