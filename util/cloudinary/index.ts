import { Cloudinary } from '@cloudinary/url-gen'
import { CloudinaryWrapper } from './CloudinaryWrapper'

if (!process.env.CLOUDINARY_NAME?.trim()) {
  throw new Error('Cannot initialize Cloudinary without a non-empty CLOUDINARY_NAME environment variable.')
}

export const cloudinary = new CloudinaryWrapper(
  new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUDINARY_NAME,
    },
  }),
  process.env.CLOUDINARY_PATH || '',
)
