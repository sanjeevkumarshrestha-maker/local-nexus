import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  const payload = await getPayload({ config })
  console.log('Seeding Perfect Smile Pages into Nexus CMS...')

  async function upsertPage(slug: string, data: any) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
    })

    if (existing.docs.length > 0) {
      await payload.update({ collection: 'pages', id: existing.docs[0].id, data })
      console.log(`Updated page: ${slug}`)
    } else {
      await payload.create({ collection: 'pages', data })
      console.log(`Created page: ${slug}`)
    }
  }

  await upsertPage('home', {
    title: 'Home',
    slug: 'home',
    blocks: [
      {
        blockType: 'hero',
        heading: 'Advanced Dental Care in Kathmandu',
        subheading: 'Experience painless dentistry and world-class treatments with Perfect Smile.',
        label: 'Book an Appointment',
        url: '/contact',
      },
      // Replace the old credibility and serviceshighlight blocks in seed.ts with this:
          {
            blockType: 'credibility',
            stats: [
              { value: '10,000+', label: 'Happy Patients' },
              { value: '15+', label: 'Years Experience' },
              { value: '5,000+', label: 'Successful Procedures' },
              { value: '98%', label: 'Patient Satisfaction' }
            ]
          },
          {
            blockType: 'serviceshighlight',
            badge: 'WHAT WE TREAT',
            heading: 'Comprehensive care, ',
            highlightedText: 'one gentle clinic',
            subheading: 'From routine checkups to full smile transformations, every treatment is planned around your comfort and long-term oral health.',
            services: [
              { icon: 'Tooth', title: 'General Dentistry', description: 'Routine exams, cleanings, and preventive care to keep your whole family\'s smile healthy year-round.', url: '/services/general' },
              { icon: 'Sparkles', title: 'Cosmetic Dentistry', description: 'Veneers, bonding, and smile design tailored to your facial features and personal style.', url: '/services/cosmetic' },
              { icon: 'ShieldCheck', title: 'Dental Implants', description: 'Permanent, natural-looking tooth replacement using precision-guided implant technology.', url: '/services/implants' },
              { icon: 'Eye', title: 'Orthodontics', description: 'Braces and clear aligners that straighten teeth discreetly, at any age.', url: '/services/ortho' }
            ],
            viewAllCta: { label: 'View All Services', url: '/services' }
          },
          {
  blockType: 'whychooseus',
  badge: 'WHY PERFECT SMILE',
  heading: 'Care that feels as good as it looks',
  subheading: 'Every detail of your visit — from the technology we use to the way our team explains your treatment — is designed to earn your trust from the first appointment.',
  image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  floatingStat: {
    value: '15+',
    label: 'Years of trusted care'
  },
  features: [
    { icon: 'Clock', title: 'Modern Technology', description: 'Digital X-rays, intraoral scanning, and laser dentistry.' },
    { icon: 'Star', title: 'Experienced Specialists', description: 'Board-certified dentists across every discipline.' },
    { icon: 'Heart', title: 'Pain-Free Procedures', description: 'Gentle techniques and sedation options for anxious patients.' },
    { icon: 'CheckCircle2', title: 'Personalized Care', description: 'Treatment plans built around your goals and budget.' },
    { icon: 'Shield', title: 'Hygienic Environment', description: 'Hospital-grade sterilization for every instrument, every time.' },
    { icon: 'Briefcase', title: 'Affordable Plans', description: 'Transparent pricing and flexible payment options.' }
  ]
},
{
  blockType: 'dentistsgrid',
  anchor: 'dentists',
  eyebrow: 'OUR EXPERTS',
  heading: 'Meet our team of',
  highlightedText: 'specialist doctors',
  headingSuffix: 'in Kathmandu',
  subheading: 'Our board-certified dentists bring decades of combined experience to ensure you receive the highest standard of painless, precision care.',
  dentists: [
    { 
      name: 'Dr. Sarah Jenkins', 
      role: 'Chief Orthodontist', 
      qualification: 'DDS, MS Orthodontics', 
      experience: '12+ Years', 
      image_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      name: 'Dr. Michael Chen', 
      role: 'Implant Specialist', 
      qualification: 'DMD, Oral Surgery', 
      experience: '15+ Years', 
      image_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      name: 'Dr. Emily Carter', 
      role: 'Pediatric Dentist', 
      qualification: 'DDS, Pediatric Spec.', 
      experience: '8+ Years', 
      image_url: 'https://images.unsplash.com/photo-1594824436998-efa856b7c938?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      name: 'Dr. James Wilson', 
      role: 'Cosmetic Dentist', 
      qualification: 'DMD, AACD Member', 
      experience: '10+ Years', 
      image_url: 'https://images.unsplash.com/photo-1606265752439-1ebeb127b63f?q=80&w=800&auto=format&fit=crop' 
    }
  ],
  viewAllCta: { label: 'Meet Our Full Team', url: '/dentists' }
},
{
  blockType: 'smilegallery',
  anchor: 'gallery',
  eyebrow: 'REAL RESULTS',
  heading: 'Before & After Smile Gallery',
  subheading: 'Drag the slider to see the difference our treatments make. Every transformation is a real patient case.',
  before_image_url: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=800&auto=format&fit=crop',
  after_image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  before_label: 'BEFORE',
  after_label: 'AFTER',
  viewAllCta: { label: 'View Smile Gallery', url: '/gallery' }
},
{
  blockType: 'trustsection',
  eyebrow: 'WHY PATIENTS TRUST US',
  heading: 'Credibility you can verify',
  subheading: 'Every claim we make is backed by real experience, real certifications, and real patient outcomes.',
  stats: [
    { icon: 'Clock', value: '15+ Years', label: 'Serving Kathmandu since 2010' },
    { icon: 'Star', value: 'Certified Professionals', label: 'Board-certified dentists, every discipline' },
    { icon: 'Monitor', value: 'Modern Equipment', label: 'Digital X-ray, scanning & laser dentistry' },
    { icon: 'Shield', value: 'Hygiene Standards', label: 'Hospital-grade sterilization protocols' },
    { icon: 'CheckCircle2', value: '98% Satisfaction', label: 'Rated 4.9/5 across 600+ reviews' }
  ],
  badges: [
    { label: 'Award — placeholder' },
    { label: 'Certification — placeholder' },
    { label: 'Membership — placeholder' }
  ]
},
{
  blockType: 'testimonialcarousel',
  eyebrow: 'PATIENT STORIES',
  heading: 'Loved by Families Across Kathmandu',
  subheading: 'Hear directly from patients who trusted us with their smiles.',
  reviews: [
    {
      quote: 'Whitening results were better than I expected, and the booking process on WhatsApp was so easy.',
      author_name: 'Anisha Gurung',
      author_role: 'Cosmetic Patient',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      quote: 'The dental implant procedure was completely painless. Dr. Michael and his team are true professionals.',
      author_name: 'Rajesh Shrestha',
      author_role: 'Implant Patient',
      avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      quote: 'My kids actually love coming to the dentist now. The pediatric team is incredibly gentle and patient.',
      author_name: 'Sarah Thapa',
      author_role: 'Pediatric Parent',
      avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      rating: 5
    }
  ],
  trust_badge: {
    icon_url: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
    text: '4.9 / 5 average rating from 600+ Google reviews'
  }
}
    ]
  })

  await upsertPage('about', {
    title: 'About Us',
    slug: 'about',
    blocks: [
      {
        blockType: 'story',
        heading: 'Our Mission at Perfect Smile',
        content: 'To provide world-class dental care using state-of-the-art technology in a relaxing environment.',
      }
    ]
  })

  await payload.updateGlobal({
    slug: 'header',
    data: {
      logo_text: 'Perfect Smile',
      logo_url: '', // Add a direct image link here if you want a visual logo instead of text
      nav_links: [
        { label: 'Home', url: '/' },
        { label: 'Services', url: '/services' },
        { label: 'About Us', url: '/about' },
        { label: 'Smile Gallery', url: '/gallery' }
      ],
      secondary_cta_text: '(01) 456-7890',
      secondary_cta_link: 'tel:014567890',
      cta_text: 'Book Online',
      cta_link: '/contact'
    }
  })
  console.log('Updated Global: header')

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      trust_badges: [
        { label: 'NMC Registered' },
        { label: 'Top Rated in Kathmandu' }
      ],
      logo_text: 'Perfect Smile',
      description: 'Advanced dental care in Kathmandu providing painless dentistry and world-class treatments.',
      socials: [
        { icon: 'Facebook', label: 'Facebook', url: 'https://facebook.com' },
        { icon: 'Instagram', label: 'Instagram', url: 'https://instagram.com' }
      ],
      columns: [
        {
          title: 'Services',
          items: [
            { label: 'General Dentistry', url: '/services/general' },
            { label: 'Cosmetic Dentistry', url: '/services/cosmetic' },
            { label: 'Dental Implants', url: '/services/implants' }
          ]
        },
        {
          title: 'Clinic',
          items: [
            { label: 'About Us', url: '/about' },
            { label: 'Smile Gallery', url: '/gallery' },
            { label: 'Contact', url: '/contact' }
          ]
        }
      ],
      newsletter: {
        title: 'Smile Tips',
        description: 'Get monthly dental care tips straight to your inbox.',
        placeholder: 'Enter your email',
        button_text: 'Subscribe'
      },
      copyright_text: '© 2026 Perfect Smile Dental Clinic. All rights reserved.',
      legal_links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' }
      ]
    }
  })
  console.log('Updated Global: footer')

  console.log('✅ Seeding complete!')
  process.exit(0)
}

run()