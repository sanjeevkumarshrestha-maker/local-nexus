import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Section', plural: 'Hero Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text' },
    { name: 'image_url', type: 'upload', relationTo: 'media', label: 'Hero Background Image' },
    { name: 'label', type: 'text', label: 'Button Text (e.g. Book Now)' },
    { name: 'url', type: 'text', label: 'Button Link (e.g. /contact)' },
  ],
}

export const StoryBlock: Block = {
  slug: 'story',
  labels: { singular: 'Story / About Block', plural: 'Story Blocks' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'content', type: 'textarea' },
    { name: 'image_url', type: 'upload', relationTo: 'media', label: 'Side Image' },
  ],
}

export const CredibilityBlock: Block = {
  slug: 'credibility',
  labels: { singular: 'Credibility Stats', plural: 'Credibility Stats' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', label: 'Stat Value (e.g. 15+)' },
        { name: 'label', type: 'text', label: 'Stat Label (e.g. Years Experience)' },
      ],
    },
  ],
}