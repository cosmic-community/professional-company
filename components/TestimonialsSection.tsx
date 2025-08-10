import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const renderStars = (rating?: { key: string; value: string }) => {
    if (!rating) return null
    const numStars = parseInt(rating.key)
    return (
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.value}</span>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied clients who have experienced our professional service and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {renderStars(testimonial.metadata.rating)}
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.metadata.quote}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.metadata.photo && (
                  <img 
                    src={`${testimonial.metadata.photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    className="w-12 h-12 object-cover rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                )}
                
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </p>
                  {testimonial.metadata.position && testimonial.metadata.company && (
                    <p className="text-sm text-gray-600">
                      {testimonial.metadata.position} at {testimonial.metadata.company}
                    </p>
                  )}
                </div>
                
                {testimonial.metadata.company_logo && (
                  <img 
                    src={`${testimonial.metadata.company_logo.imgix_url}?w=80&h=40&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.company || 'Company logo'}
                    className="w-12 h-6 object-contain ml-4"
                    width={48}
                    height={24}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}