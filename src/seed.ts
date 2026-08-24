import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

async function run() {
  // Initialize the Local API
  const payload = await getPayload({ config })

  console.log('Seeding Perfect Smile Pages into Nexus CMS...')

  // 1. Generate the Home Page
  await payload.create({
    collection: 'pages',
    data: {
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
        }
      ]
    }
  })

  // 2. Generate the About Page
  await payload.create({
    collection: 'pages',
    data: {
      title: 'About Us',
      slug: 'about',
      blocks: [
        {
          blockType: 'story',
          heading: 'Our Mission at Perfect Smile',
          content: 'To provide world-class dental care using state-of-the-art technology in a relaxing environment.',
        }
      ]
    }
  })

  console.log('✅ Seeding complete! Database is populated.')
  process.exit(0)
}

run()