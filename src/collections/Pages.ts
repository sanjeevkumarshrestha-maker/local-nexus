import type { CollectionConfig } from 'payload'
import { DetailedServicesBlock } from '../blocks/DetailedServices'
import { HeroBlock, StoryBlock, CredibilityBlock, ServicesHighlight, WhyChooseUsBlock, DentistsGridBlock, SmileGalleryBlock, TrustSectionBlock, TestimonialCarouselBlock, ContactSectionBlock } from '../blocks/Registry'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
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
        ServicesHighlight,
        WhyChooseUsBlock,
        DentistsGridBlock,
        SmileGalleryBlock,
        TrustSectionBlock,
        TestimonialCarouselBlock,
        ContactSectionBlock,
      ],
    },
  ],
}