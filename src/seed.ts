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
      nav_links: [
        { label: 'Home', link: '/' },
        {
          label: 'Services',
          link: '/services',
          mega_items: [
            { label: 'General Dentistry', link: '/services/general', description: 'Routine care & checkups' },
            { label: 'Cosmetic', link: '/services/cosmetic', description: 'Veneers & whitening' },
            { label: 'Implants', link: '/services/implants', description: 'Permanent replacement' }
          ]
        },
        { label: 'About Us', link: '/about' },
        { label: 'Smile Gallery', link: '/gallery' }
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