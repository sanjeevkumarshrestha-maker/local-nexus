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
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Stat Value (e.g., 10,000+)' },
        { name: 'label', type: 'text', required: true, label: 'Stat Label (e.g., Happy Patients)' },
      ],
    },
  ],
}

export const ServicesHighlight: Block = {
  slug: 'serviceshighlight',
  labels: { singular: 'Services Highlight', plural: 'Services Highlights' },
  fields: [
    { name: 'badge', type: 'text', label: 'Small Badge Text (e.g., WHAT WE TREAT)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'highlightedText', type: 'text', label: 'Text to Underline (e.g., one gentle clinic)' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'services',
      type: 'array',
      label: 'Service Cards',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'text', label: 'Lucide Icon Name (e.g., Tooth, Shield, Sparkles, Eye)' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'url', type: 'text', required: true, label: 'Link URL (e.g., /services/general)' }
      ]
    },
    {
      name: 'viewAllCta',
      type: 'group',
      label: 'View All Call-to-Action',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    }
  ]
};
export const WhyChooseUsBlock: Block = {
  slug: 'whychooseus', // This maps to your BlockRenderer!
  labels: {
    singular: 'Why Choose Us Section',
    plural: 'Why Choose Us Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Small Badge Text (e.g., WHY PERFECT SMILE)',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subtitle/Description',
    },
    {
      name: 'image_url',
      type: 'text',
      label: 'Image URL (Paste direct image web link)',
    },
    {
      name: 'floatingStat',
      type: 'group',
      label: 'Floating Image Stat',
      fields: [
        { name: 'value', type: 'text', label: 'Stat Value (e.g., 15+)' },
        { name: 'label', type: 'text', label: 'Stat Label (e.g., Years of trusted care)' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Feature Items',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Lucide Icon Name (Clock, Star, Heart, CheckCircle2, Shield, Briefcase)',
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
};