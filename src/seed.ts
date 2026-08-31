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
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data,
      })
      console.log(`Updated page: ${slug}`)
    } else {
      await payload.create({
        collection: 'pages',
        data,
      })
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
      {
        blockType: 'credibility',
        heading: 'Trusted by Thousands of Patients',
        stats: [
          { value: '15+', label: 'Years Experience' },
          { value: '10k+', label: 'Happy Smiles' },
          { value: '5', label: 'Specialist Doctors' }
        ]
      },
      {
        blockType: 'serviceshighlight',
        sectionTitle: 'Comprehensive care, one gentle clinic',
        subtitle: 'From routine checkups to full smile transformations, every treatment is planned around your comfort and long-term oral health.',
        services: [
          { title: 'General Dentistry', description: 'Routine exams, cleanings, and preventive care to keep your whole family\'s smile healthy year-round.', link: '/services' },
          { title: 'Cosmetic Dentistry', description: 'Veneers, bonding, and smile design tailored to your facial features and personal style.', link: '/services' },
          { title: 'Dental Implants', description: 'Permanent, natural-looking tooth replacement using precision-guided implant technology.', link: '/services' },
          { title: 'Orthodontics', description: 'Braces and clear aligners that straighten teeth discreetly, at any age.', link: '/services' }
        ],
        viewAllCta: { label: 'View All Services', link: '/services' }
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

  console.log('✅ Seeding complete!')
  process.exit(0)
}

run()