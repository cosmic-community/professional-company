import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, Testimonial, CaseStudy } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  writeKey: process.env.COSMIC_WRITE_KEY || '',
  apiEnvironment: 'staging'
})

// Services functions
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.objects as Service[]
  } catch (error) {
    console.error('Failed to fetch services:', error)
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

// Other functions remain unchanged...