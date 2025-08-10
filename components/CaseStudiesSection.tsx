import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const extractKeyResults = (resultsHtml: string) => {
    // Extract bullet points from HTML results
    const matches = resultsHtml.match(/<li><strong>([^<]+)<\/strong>[^<]*<\/li>/g)
    return matches ? matches.slice(0, 3).map(match => {
      const text = match.replace(/<[^>]*>/g, '')
      return text.split(' - ')[0] // Get just the key metric
    }) : []
  }

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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {caseStudy.metadata.featured_image && (
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width={800}
                    height={400}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700">
                    {caseStudy.metadata.project_date && formatDate(caseStudy.metadata.project_date)}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {caseStudy.metadata.title}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Client: {caseStudy.metadata.client}
                  </p>
                </div>
                
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
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
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
                    {extractKeyResults(caseStudy.metadata.results).length > 0 ? (
                      <div className="space-y-2">
                        {extractKeyResults(caseStudy.metadata.results).map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                            {result}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div 
                        className="text-gray-600 text-sm prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                      />
                    )}
                  </div>
                )}
                
                <div className="flex gap-3">
                  <button className="btn-primary flex-1">
                    View Full Case Study
                  </button>
                  <button className="btn-secondary px-6">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}