import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, Testimonial, CaseStudy } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
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
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.object as Service
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    throw error
  }
}

// Team Members functions
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.objects as TeamMember[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'team-members', slug })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.object as TeamMember
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    throw error
  }
}

// Testimonials functions
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
    return response.objects as Testimonial[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

// Case Studies functions
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as CaseStudy[]
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as CaseStudy
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null
    }
    throw error
  }
}