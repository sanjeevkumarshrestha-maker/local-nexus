import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Section', plural: 'Hero Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    { name: 'label', type: 'text' },
    { name: 'url', type: 'text' },
  ],
}

export const StoryBlock: Block = {
  slug: 'story',
  labels: { singular: 'Story Block', plural: 'Story Blocks' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'content', type: 'textarea' },
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
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
    },
  ],
}

export const ServicesHighlight: Block = {
  slug: 'serviceshighlight',
  labels: { singular: 'Services Highlight', plural: 'Services Highlights' },
  fields: [
    { name: 'sectionTitle', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
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