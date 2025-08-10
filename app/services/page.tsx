import { createBucketClient } from '@cosmicjs/sdk'
import ServicesSection from '@/components/ServicesSection'
import { Service } from '@/types'

const bucket = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
})

export const metadata = {
  title: 'Our Services - Professional Company',
  description: 'Comprehensive digital solutions including web development, UI/UX design, and digital strategy consulting. Discover how we can help transform your business.',
}

export default async function ServicesPage() {
  try {
    const { objects: services } = await bucket.objects.find({
      type: 'services',
    }).props(['id', 'title', 'slug', 'metadata'])

    return (
      <div>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
          <div className="section-container">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to help your business thrive in the modern landscape
              </p>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <ServicesSection services={services as Service[]} />

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching services:', error)
    return (
      <div className="py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600">Failed to load services. Please try again later.</p>
        </div>
      </div>
    )
  }
}