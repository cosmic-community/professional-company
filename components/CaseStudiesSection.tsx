import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real clients - discover how we've helped businesses achieve their goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {caseStudy.metadata.featured_image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={400}
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {caseStudy.metadata.title}
                  </h3>
                  {caseStudy.metadata.project_date && (
                    <span className="text-sm text-gray-500">
                      {new Date(caseStudy.metadata.project_date).getFullYear()}
                    </span>
                  )}
                </div>
                
                <p className="text-primary-600 font-medium mb-4">
                  Client: {caseStudy.metadata.client}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseStudy.metadata.overview}
                </p>
                
                {caseStudy.metadata.services && caseStudy.metadata.services.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Services Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {service.metadata.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {caseStudy.metadata.results && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <div 
                      className="text-gray-600 text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                    />
                  </div>
                )}
                
                <button className="btn-primary w-full">
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}