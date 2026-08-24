import type { Block } from 'payload'

export const DetailedServicesBlock: Block = {
  slug: 'detailed_services',
  labels: {
    singular: 'Detailed Services Grid',
    plural: 'Detailed Services Grids',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      defaultValue: 'FULL TREATMENT LIST',
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Main Headline',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      label: 'Description Paragraph',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Service Cards',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Service Title',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Lucide Icon Name (e.g. Stethoscope, Sparkles)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'image_url',
          type: 'upload', // Changed from 'text' to 'upload'
          relationTo: 'media', // Links directly to the Media collection we just configured
          label: 'Service Image',
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Typical Duration (e.g. 45–60 min)',
        },
        {
          name: 'cta_text',
          type: 'text',
          label: 'Button Label',
          defaultValue: 'Book Checkup',
        },
      ],
    },
  ],
}