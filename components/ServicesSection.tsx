import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {service.metadata.icon && (
                <div className="mb-6">
                  <img 
                    src={`${service.metadata.icon.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                    alt={service.metadata.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.metadata.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.metadata.short_description}
              </p>
              
              {service.metadata.features && service.metadata.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.metadata.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {service.metadata.starting_price && (
                  <div className="text-left">
                    <span className="text-sm text-gray-500 block">Starting at</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {service.metadata.starting_price}
                    </span>
                  </div>
                )}
                <button className="btn-primary ml-auto">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}