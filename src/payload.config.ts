import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// 1. Import the official S3 Storage plugin
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: [
    'http://localhost:8080', 
    'http://localhost:5173', 
    'https://hive-render-engine.vercel.app'
  ],
  collections: [Users, Media, Pages],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  
  // 2. Add the S3 Storage Plugin with Public URL Generation
  plugins: [
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true, // Tells Payload to stop proxying
          generateFileURL: ({ filename, prefix }) => {
            // Constructs the direct Cloudflare CDN link
            const key = prefix ? `${prefix}/${filename}` : filename
            return `${process.env.S3_PUBLIC_URL}/${key}`
          },
        },
      },
      bucket: process.env.S3_BUCKET as string,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT, // Used for Cloudflare R2
        forcePathStyle: true,
      },
    }),
  ],
})