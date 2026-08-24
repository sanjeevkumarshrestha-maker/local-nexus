import type { CollectionConfig } from 'payload'
import { DetailedServicesBlock } from '../blocks/DetailedServices'
import { HeroBlock, StoryBlock, CredibilityBlock } from '../blocks/Registry'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Allows public fetching by the Master Wrapper
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Page Layout Blocks',
      blocks: [
        DetailedServicesBlock,
        HeroBlock,
        StoryBlock,
        CredibilityBlock,
      ],
    },
  ],
}