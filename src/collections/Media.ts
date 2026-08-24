import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Essential: Allows your Master Wrapper to fetch images publicly
  },
  upload: {
    staticDir: 'media', // Stores images in a local 'media' folder for now
    mimeTypes: ['image/*'], // Restricts uploads to images only
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text (Important for SEO & Accessibility)',
    },
  ],
}