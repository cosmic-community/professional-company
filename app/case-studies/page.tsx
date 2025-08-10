import { createBucketClient } from '@cosmicjs/sdk'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import { CaseStudy } from '@/types'

const bucket = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
})

export const metadata = {
  title: 'Case Studies - Professional Company',
  description: 'Real results from real clients. Explore our successful projects and discover how we\'ve helped businesses achieve remarkable growth and transformation.',
}

export default async function CaseStudiesPage() {
  try {
    const { objects: caseStudies } = await bucket.objects.find({
      type: 'case-studies',
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)

    return (
      <div>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="section-container">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients. Discover how we've helped businesses achieve remarkable growth and transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Content */}
        <CaseStudiesSection caseStudies={caseStudies as CaseStudy[]} />

        {/* Success Stats */}
        <section className="py-16 bg-primary-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Numbers that speak for themselves
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150%</div>
                <div className="text-gray-600">Avg. ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return (
      <div className="py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-gray-600">Failed to load case studies. Please try again later.</p>
        </div>
      </div>
    )
  }
}