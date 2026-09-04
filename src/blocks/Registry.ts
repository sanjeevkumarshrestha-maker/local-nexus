import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Section', plural: 'Hero Sections' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'highlighted_text', type: 'text', label: 'Gradient Text' },
    { name: 'heading_suffix', type: 'text', label: 'Text after gradient' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'primary_cta',
      type: 'group',
      fields: [{ name: 'label', type: 'text' }, { name: 'url', type: 'text' }]
    },
    {
      name: 'secondary_cta',
      type: 'group',
      fields: [{ name: 'label', type: 'text' }, { name: 'url', type: 'text' }]
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Bottom Stats',
      fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }]
    },
    { name: 'image_url', type: 'text', required: true, label: 'Main Image URL' },
    {
      name: 'floating_card_1',
      type: 'group',
      label: 'Top Left Floating Card',
      fields: [{ name: 'icon', type: 'text' }, { name: 'title', type: 'text' }, { name: 'description', type: 'text' }]
    },
    {
      name: 'floating_card_2',
      type: 'group',
      label: 'Bottom Right Floating Card',
      fields: [{ name: 'icon', type: 'text' }, { name: 'title', type: 'text' }, { name: 'description', type: 'text' }]
    }
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
export const DentistsGridBlock: Block = {
  slug: 'dentistsgrid',
  labels: { singular: 'Dentists Grid', plural: 'Dentists Grids' },
  fields: [
    { name: 'anchor', type: 'text', label: 'Section ID (e.g., dentists)', defaultValue: 'dentists' },
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., OUR TEAM)' },
    { name: 'heading', type: 'text', label: 'Main Heading' },
    { name: 'highlightedText', type: 'text', label: 'Highlighted Heading Text' },
    { name: 'headingSuffix', type: 'text', label: 'Heading Suffix (Text after highlight)' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'dentists',
      type: 'array',
      label: 'Dentists',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'qualification', type: 'text' },
        { name: 'experience', type: 'text' },
        { name: 'image_url', type: 'text', required: true, label: 'Image URL' }
      ]
    },
    {
      name: 'viewAllCta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    }
  ]
}
export const SmileGalleryBlock: Block = {
  slug: 'smilegallery',
  labels: { singular: 'Smile Gallery', plural: 'Smile Galleries' },
  fields: [
    { name: 'anchor', type: 'text', label: 'Section ID (e.g., gallery)', defaultValue: 'gallery' },
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., REAL RESULTS)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    { name: 'before_image_url', type: 'text', required: true, label: 'Before Image URL' },
    { name: 'after_image_url', type: 'text', required: true, label: 'After Image URL' },
    { name: 'before_label', type: 'text', defaultValue: 'Before' },
    { name: 'after_label', type: 'text', defaultValue: 'After' },
    {
      name: 'viewAllCta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    }
  ]
}
export const TrustSectionBlock: Block = {
  slug: 'trustsection',
  labels: { singular: 'Trust Section', plural: 'Trust Sections' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., WHY PATIENTS TRUST US)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'stats',
      type: 'array',
      label: 'Stat Cards',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'text', label: 'Lucide Icon Name' },
        { name: 'value', type: 'text', label: 'Card Title (e.g., 15+ Years)' },
        { name: 'label', type: 'textarea', label: 'Card Description' }
      ]
    },
    {
      name: 'badges',
      type: 'array',
      label: 'Bottom Badges',
      fields: [
        { name: 'label', type: 'text', label: 'Badge Text (e.g., Award - placeholder)' }
      ]
    }
  ]
}
export const TestimonialCarouselBlock: Block = {
  slug: 'testimonialcarousel',
  labels: { singular: 'Testimonial Carousel', plural: 'Testimonial Carousels' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'testimonials', label: 'Section ID' },
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., PATIENT STORIES)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'reviews',
      type: 'array',
      label: 'Reviews',
      minRows: 1,
      fields: [
        { name: 'quote', type: 'textarea', required: true, label: 'Patient Quote' },
        { name: 'author_name', type: 'text', required: true, label: 'Patient Name' },
        { name: 'author_role', type: 'text', label: 'Patient Role or Treatment' },
        { name: 'avatar_url', type: 'text', label: 'Avatar Image URL' },
        { name: 'rating', type: 'number', defaultValue: 5, min: 1, max: 5, label: 'Star Rating (1-5)' }
      ]
    },
    {
      name: 'trust_badge',
      type: 'group',
      label: 'Trust Badge (Bottom of Section)',
      fields: [
        { name: 'icon_url', type: 'text', label: 'Badge Icon URL (e.g., Google Logo)' },
        { name: 'text', type: 'text', label: 'Badge Text' }
      ]
    }
  ]
}
export const ContactSectionBlock: Block = {
  slug: 'contactsection',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'contact', label: 'Section ID' },
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., VISIT US)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    { name: 'map_url', type: 'text', required: true, label: 'Google Maps Embed URL' },
    {
      name: 'contact_details',
      type: 'array',
      label: 'Contact Information',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'text', label: 'Icon (e.g., MapPin, Phone, Clock)' },
        { name: 'title', type: 'text', required: true, label: 'Title (e.g., Address)' },
        { name: 'description', type: 'textarea', required: true, label: 'Details' }
      ]
    },
    {
      name: 'primary_cta',
      type: 'group',
      label: 'Primary Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    },
    {
      name: 'secondary_cta',
      type: 'group',
      label: 'Secondary Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    }
  ]
}
export const BookingSectionBlock: Block = {
  slug: 'bookingsection',
  labels: { singular: 'Booking Section', plural: 'Booking Sections' },
  fields: [
    { name: 'anchor', type: 'text', defaultValue: 'booking', label: 'Section ID' },
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text (e.g., BOOK A VISIT)' },
    { name: 'heading', type: 'text', required: true, label: 'Main Heading' },
    { name: 'subheading', type: 'textarea', label: 'Subtitle/Description' },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefit Checklist',
      fields: [
        { name: 'text', type: 'text', required: true }
      ]
    },
    {
      name: 'whatsapp_cta',
      type: 'group',
      label: 'WhatsApp Button',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' }
      ]
    },
    { name: 'form_disclaimer', type: 'text', label: 'Form Bottom Disclaimer' }
  ]
}