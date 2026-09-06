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
        eyebrow: 'ESTD. 2010 · KULESHWOR, KATHMANDU',
        heading: 'Creating Healthy, ',
        highlighted_text: 'Beautiful Smiles',
        heading_suffix: ' Since 2010',
        subheading: 'Advanced dental care, modern technology, and compassionate treatment for the entire family — delivered in a calm, judgment-free clinic built around you.',
        primary_cta: { label: 'Book Appointment', url: '/contact' },
        secondary_cta: { label: 'Call Now', url: 'tel:015374234' },
        stats: [
          { value: 'Estd. 2010', label: 'Serving Kathmandu' },
          { value: '10,000+', label: 'Trusted Patients' },
          { value: '15+ Years', label: 'Specialist Experience' }
        ],
        image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        floating_card_1: { icon: 'CheckCircle2', title: 'Pain-Free Care', description: 'Modern sedation options' },
        floating_card_2: { icon: 'Star', title: '4.9 / 5 Rating', description: '600+ Google reviews' }
      },
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
        anchor: 'testimonials',
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
      },
      {
        blockType: 'bookingsection',
        anchor: 'booking',
        eyebrow: 'BOOK A VISIT',
        heading: 'Your appointment, confirmed in minutes',
        subheading: 'Tell us a little about what you need and preferred time — our front desk will confirm your slot the same day.',
        benefits: [
          { text: 'Instant confirmation on request' },
          { text: 'Flexible morning & evening slots' },
          { text: 'Free consultation for new patients' }
        ],
        whatsapp_cta: { label: 'Book via WhatsApp', url: 'https://wa.me/1234567890' },
        form_disclaimer: "We'll confirm your slot by phone or WhatsApp within a few hours."
      },
      {
        blockType: 'contactsection',
        anchor: 'contact',
        eyebrow: 'VISIT US',
        heading: 'Find Perfect Smile Clinic',
        subheading: 'Located in the heart of Kuleshwor — easy to reach, with parking available on-site.',
        map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927050965383!2d85.2929!3d27.6946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185a5df9b945%3A0x6a2c9be958047913!2sKuleshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
        contact_details: [
          { icon: 'MapPin', title: 'Address', description: 'Kuleshwor Awas Road, behind Nabil Bank, Kathmandu, Nepal, 44600' },
          { icon: 'Phone', title: 'Phone', description: '01-5374234' },
          { icon: 'Clock', title: 'Opening Hours', description: 'Sun - Fri: 9:00 AM - 7:00 PM | Sat: 10:00 AM - 2:00 PM' }
        ],
        primary_cta: { label: 'Call Clinic', url: 'tel:015374234' },
        secondary_cta: { label: 'Full Contact Page', url: '/contact' }
      }
    ]
  })

  await upsertPage('about', {
    title: 'About Us',
    slug: 'about',
    blocks: [
      {
        blockType: 'innerheader',
        breadcrumb: 'HOME / ABOUT',
        badge: 'OUR STORY',
        heading: 'Care Built on ',
        highlightedText: 'Trust, Not Trends',
        subheading: 'Perfect Smile Oral & Dental Clinic began with a simple idea: dental care should feel calm, honest, and genuinely centered on the patient. Here\'s how that idea has grown since 2010.'
      },
      {
        blockType: 'whychooseus',
        eyebrow: 'OUR STORY',
        heading: 'From a single chair to a full specialist clinic',
        subheading: 'Perfect Smile opened its doors in Kuleshwor in 2010 as a small general practice with one dentist and a promise: every patient would be treated like family. Over 15 years, that promise has stayed the same even as the clinic has grown into a full specialist team spanning cosmetic dentistry, implants, orthodontics, and pediatric care.\n\nToday, Perfect Smile Oral & Dental Clinic Pvt. Ltd. is a registered dental care provider trusted by more than 10,000 patients across Kathmandu — but we still run on the same principle we started with: listen first, treat gently, and never rush a diagnosis.',
        image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        floatingStat: { value: '2010', label: 'The year it all began' }
      },
      {
        blockType: 'missionvision',
        eyebrow: 'WHAT DRIVES US',
        heading: 'Mission & Vision',
        subheading: 'Two commitments that shape every decision we make, from the front desk to the treatment chair.',
        items: [
          { icon: 'Heart', title: 'Our Mission', description: 'To deliver advanced, compassionate dental care that is accessible to every family in Kathmandu — combining modern technology with the patience and warmth of a neighborhood clinic.' },
          { icon: 'Eye', title: 'Our Vision', description: 'To be Nepal\'s most trusted dental clinic — recognized not just for clinical excellence, but for the way every patient is treated with dignity, clarity, and genuine care.' }
        ]
      },
      {
        blockType: 'timeline',
        eyebrow: 'OUR JOURNEY',
        heading: '2010 → Present',
        subheading: 'A look at the milestones that shaped Perfect Smile into the clinic it is today.',
        milestones: [
          { year: '2010', title: 'Clinic Founded in Kuleshwor', description: 'Perfect Smile opens as a small general dentistry practice with a single treatment chair and a commitment to patient-first care.' },
          { year: '2014', title: 'Cosmetic & Restorative Wing Added', description: 'Growing demand for smile makeovers leads to the addition of a dedicated cosmetic dentistry specialist and expanded treatment rooms.' },
          { year: '2017', title: 'Digital X-Ray & Implant Program Launched', description: 'Investment in digital imaging and guided implant technology brings precision-guided implants to Kuleshwor for the first time.' },
          { year: '2020', title: '10,000th Patient Milestone', description: 'Perfect Smile crosses 10,000 patients treated, alongside the introduction of a dedicated pediatric dentistry program.' },
          { year: '2023', title: 'Full Specialist Team Assembled', description: 'Orthodontics and oral & maxillofacial surgery join the practice, completing a full-service specialist team under one roof.' },
          { year: 'Present', title: '15+ Years, 10,000+ Smiles', description: 'Today, Perfect Smile serves families across Kathmandu with a 4.9/5 average rating and a team of board-certified specialists.' }
        ]
      },
      {
        blockType: 'technology',
        eyebrow: 'MODERN TECHNOLOGY',
        heading: 'Equipment that supports precise, gentle care',
        subheading: 'We continually invest in technology that reduces discomfort and improves diagnostic accuracy — because better tools mean better outcomes.',
        image_url: 'https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=800&auto=format&fit=crop',
        features: [
          { icon: 'MonitorSquare', title: 'Digital X-Rays', description: 'Up to 80% less radiation than traditional film X-rays.' },
          { icon: 'ScanFace', title: 'Intraoral Scanning', description: 'Impression-free digital scans for crowns, aligners & implants.' },
          { icon: 'Zap', title: 'Laser Dentistry', description: 'Precise, minimally invasive treatment for gums and soft tissue.' },
          { icon: 'Crosshair', title: 'Guided Implant Planning', description: '3D-planned implant placement for predictable, precise results.' }
        ]
      },
      {
        blockType: 'credibility',
        heading: 'Credibility you can verify',
        subheading: 'Every claim we make is backed by real experience, real certifications, and real patient outcomes.',
        stats: [
          { value: '15+ Years', label: 'Serving Kathmandu since 2010' },
          { value: 'Certified Professionals', label: 'Board-certified dentists, every discipline' },
          { value: 'Modern Equipment', label: 'Digital X-ray, scanning & laser dentistry' },
          { value: '98% Satisfaction', label: 'Rated 4.9/5 across 600+ reviews' }
        ]
      },
      {
        blockType: 'imagegrid',
        eyebrow: 'TAKE A LOOK INSIDE',
        heading: 'Clinic Facilities',
        subheading: 'A calm, modern space designed to put patients of every age at ease.',
        images: [
          { label: 'Reception & Waiting Lounge', image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
          { label: 'Treatment Room', image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
          { label: 'Sterilization Suite', image_url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop' },
          { label: 'Digital Imaging Room', image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' },
          { label: 'Pediatric Play Corner', image_url: 'https://images.unsplash.com/photo-1554558509-5eaf9a0398f6?q=80&w=800&auto=format&fit=crop' },
          { label: 'Consultation Room', image_url: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop' }
        ]
      },
      {
        blockType: 'featuresgrid',
        eyebrow: 'WHAT WE STAND FOR',
        heading: 'Core Values',
        subheading: 'The principles every member of our team is trained around.',
        features: [
          { icon: 'checkcircle2', title: 'Honesty First', description: 'Clear, jargon-free explanations before any treatment decision.' },
          { icon: 'heart', title: 'Genuine Care', description: 'Every patient treated like family, not a number on a schedule.' },
          { icon: 'star', title: 'Clinical Excellence', description: 'Continuous training to stay current with modern techniques.' },
          { icon: 'shield', title: 'Uncompromising Hygiene', description: 'Hospital-grade sterilization for every instrument, every time.' }
        ]
      },
      {
        blockType: 'bookingsection',
        anchor: 'booking',
        eyebrow: 'BOOK A VISIT',
        heading: 'Your appointment, confirmed in minutes',
        subheading: 'Tell us a little about what you need and preferred time — our front desk will confirm your slot the same day.',
        benefits: [
          { text: 'Instant confirmation on request' },
          { text: 'Flexible morning & evening slots' },
          { text: 'Free consultation for new patients' }
        ],
        whatsapp_cta: { label: 'Book via WhatsApp', url: 'https://wa.me/1234567890' },
        form_disclaimer: "We'll confirm your slot by phone or WhatsApp within a few hours."
      }
    ]
  })

  await payload.updateGlobal({
    slug: 'header',
    data: {
      logo_text: 'Perfect Smile',
      nav_links: [
        { label: 'Home', url: '/' },
        { 
          label: 'Services', 
          url: '/services',
          mega_items: [
            { label: 'General Dentistry', url: '/services/general', description: 'Routine care & checkups' },
            { label: 'Cosmetic', url: '/services/cosmetic', description: 'Veneers & whitening' },
            { label: 'Implants', url: '/services/implants', description: 'Permanent replacement' }
          ]
        },
        { label: 'About Us', url: '/about' },
        { label: 'Dentists', url: '/dentists' },
        { label: 'Smile Gallery', url: '/gallery' },
        { label: 'Contact', url: '/contact' }
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
  await upsertPage('services', {
    title: 'Services',
    slug: 'services',
    blocks: [
      {
        blockType: 'innerheader',
        breadcrumb: 'HOME / SERVICES',
        badge: 'WHAT WE TREAT',
        heading: 'Comprehensive Dental Care, ',
        highlightedText: 'One Gentle Clinic',
        subheading: 'From routine checkups to full smile transformations, every treatment at Perfect Smile is planned around your comfort, your budget, and your long-term oral health.'
      },
      {
        blockType: 'detailedservices',
        eyebrow: 'FULL TREATMENT LIST',
        heading: 'Every service, ',
        highlightedText: 'explained simply',
        subheading: 'Tap into the details below to see exactly what each treatment includes, how long it typically takes, and how to book it.',
        services: [
          {
            icon: 'stethoscope',
            image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
            title: 'General Dentistry',
            description: "Routine exams, professional cleanings, and preventive care to keep your whole family's smile healthy year-round.",
            checklist: [
              { text: 'Comprehensive oral exam & digital X-rays' },
              { text: 'Scaling and professional cleaning' },
              { text: 'Cavity checks & fluoride treatment' },
              { text: 'Personalized home-care plan' }
            ],
            visit_info: { label: 'Typical Visit', duration: '45–60 min' },
            cta: { label: 'Book Checkup', url: '/contact' }
          },
          {
            icon: 'sparkles',
            image_url: 'https://images.unsplash.com/photo-1606265752439-1ebeb127b63f?q=80&w=800&auto=format&fit=crop',
            title: 'Teeth Whitening',
            description: 'Safe, dentist-supervised in-clinic and take-home whitening systems for a noticeably brighter smile.',
            checklist: [
              { text: 'Shade assessment & consultation' },
              { text: 'In-chair laser whitening option' },
              { text: 'Custom take-home whitening trays' },
              { text: 'Sensitivity-friendly formulas' }
            ],
            visit_info: { label: 'Typical Visit', duration: '60–90 min' },
            cta: { label: 'Brighten My Smile', url: '/contact' }
          },
          {
            icon: 'checkcircle2',
            image_url: 'https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=800&auto=format&fit=crop',
            title: 'Cosmetic Dentistry',
            description: 'Veneers, bonding, and full smile design tailored to your facial features and personal style.',
            checklist: [
              { text: 'Porcelain & composite veneers' },
              { text: 'Dental bonding & contouring' },
              { text: 'Digital smile design preview' },
              { text: 'Gum contouring where needed' }
            ],
            visit_info: { label: 'Typical Visit', duration: 'Multiple visits' },
            cta: { label: 'Design My Smile', url: '/contact' }
          },
          {
            icon: 'shieldcheck',
            image_url: 'https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=800&auto=format&fit=crop',
            title: 'Dental Implants',
            description: 'Permanent, natural-looking tooth replacement using precision-guided implant technology.',
            checklist: [
              { text: '3D imaging & guided implant planning' },
              { text: 'Single-tooth & full-arch implants' },
              { text: 'Titanium & zirconia options' },
              { text: 'Long-term aftercare support' }
            ],
            visit_info: { label: 'Typical Visit', duration: '2–4 visits' },
            cta: { label: 'Ask About Implants', url: '/contact' }
          },
          {
            icon: 'plus',
            image_url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
            title: 'Root Canal Treatment',
            description: 'Pain-free, microscope-assisted root canal therapy that saves your natural tooth and eliminates infection.',
            checklist: [
              { text: 'Digital diagnosis & pain management' },
              { text: 'Microscope-assisted precision cleaning' },
              { text: 'Same-visit crown option available' },
              { text: 'Follow-up review included' }
            ],
            visit_info: { label: 'Typical Visit', duration: '60–75 min' },
            cta: { label: 'Relieve My Pain', url: '/contact' }
          },
          {
            icon: 'eye',
            image_url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
            title: 'Orthodontics',
            description: 'Braces and clear aligners that straighten teeth discreetly, at any age — with regular progress check-ins.',
            checklist: [
              { text: 'Metal & ceramic braces' },
              { text: 'Clear aligner therapy' },
              { text: 'Bite & jaw alignment assessment' },
              { text: 'Retention plan after treatment' }
            ],
            visit_info: { label: 'Typical Visit', duration: '6–24 months' },
            cta: { label: 'Start My Journey', url: '/contact' }
          },
          {
            icon: 'heart',
            image_url: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop',
            title: 'Pediatric Dentistry',
            description: 'Gentle, friendly care that helps young patients build healthy habits early in a calm environment.',
            checklist: [
              { text: 'Child-friendly first visits' },
              { text: 'Fluoride & sealant treatments' },
              { text: 'Habit counseling (thumb-sucking etc.)' },
              { text: 'Parent education on home care' }
            ],
            visit_info: { label: 'Typical Visit', duration: '30–45 min' },
            cta: { label: 'Book for My Child', url: '/contact' }
          },
          {
            icon: 'zap',
            image_url: 'https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=800&auto=format&fit=crop',
            title: 'Emergency Dental Care',
            description: 'Same-day appointments for dental pain, trauma, or urgent repairs — because emergencies never wait.',
            checklist: [
              { text: 'Same-day urgent appointments' },
              { text: 'Pain relief & trauma management' },
              { text: 'Broken/chipped tooth repair' },
              { text: 'After-hours WhatsApp triage' }
            ],
            visit_info: { label: 'Typical Visit', duration: 'Same day' },
            cta: { label: 'Get Emergency Care', url: '/contact' }
          }
        ]
      },
      {
        blockType: 'bookingsection',
        anchor: 'booking',
        eyebrow: 'BOOK A VISIT',
        heading: 'Your appointment, confirmed in minutes',
        subheading: 'Tell us a little about what you need and preferred time — our front desk will confirm your slot the same day.',
        benefits: [
          { text: 'Instant confirmation on request' },
          { text: 'Flexible morning & evening slots' },
          { text: 'Free consultation for new patients' }
        ],
        whatsapp_cta: { label: 'Book via WhatsApp', url: 'https://wa.me/1234567890' },
        form_disclaimer: "We'll confirm your slot by phone or WhatsApp within a few hours."
      }
    ]
  })
  await upsertPage('dentists', {
    title: 'Our Dentists',
    slug: 'dentists',
    blocks: [
      {
        blockType: 'innerheader',
        breadcrumb: 'HOME / DENTISTS',
        badge: 'OUR TEAM',
        heading: 'Meet the Specialists ',
        highlightedText: 'Behind Your Smile',
        subheading: 'A team dedicated to precision, comfort, and genuinely caring for every patient who walks through our doors — across every stage of your dental journey.'
      },
      {
        blockType: 'dentistsgrid',
        anchor: 'team',
        eyebrow: 'BOARD-CERTIFIED & CARING',
        heading: 'Get to know ',
        highlightedText: 'your care team',
        subheading: 'Every dentist at Perfect Smile is board-certified in their discipline and continues ongoing training to keep your care current with the latest techniques.',
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
        viewAllCta: { label: 'Book with Our Team', url: '/contact' }
      },
      {
        blockType: 'bookingsection',
        anchor: 'booking',
        eyebrow: 'BOOK A VISIT',
        heading: 'Your appointment, confirmed in minutes',
        subheading: 'Tell us a little about what you need and preferred time — our front desk will confirm your slot the same day.',
        benefits: [
          { text: 'Instant confirmation on request' },
          { text: 'Flexible morning & evening slots' },
          { text: 'Free consultation for new patients' }
        ],
        whatsapp_cta: { label: 'Book via WhatsApp', url: 'https://wa.me/1234567890' },
        form_disclaimer: "We'll confirm your slot by phone or WhatsApp within a few hours."
      }
    ]
  })
  await upsertPage('gallery', {
    title: 'Smile Gallery',
    slug: 'gallery',
    blocks: [
      {
        blockType: 'innerheader',
        breadcrumb: 'HOME / GALLERY',
        badge: 'REAL RESULTS',
        heading: 'Smile Transformations ',
        highlightedText: 'You Can See',
        subheading: 'Every before-and-after case shown here is a real Perfect Smile patient. Drag the slider, filter by treatment, and see the kind of results our team delivers every day.'
      },
      {
        blockType: 'smilegallery',
        anchor: 'gallery',
        eyebrow: 'DRAG TO COMPARE',
        heading: 'Before & After',
        subheading: 'A featured smile transformation — drag the handle to see the difference.',
        before_image_url: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=800&auto=format&fit=crop',
        after_image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        before_label: 'BEFORE',
        after_label: 'AFTER'
        // viewAllCta has been completely removed from here!
      }
    ]
  })
  console.log('✅ Seeding complete!')
  process.exit(0)
}

run()