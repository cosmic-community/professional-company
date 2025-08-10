import { TeamMember } from '@/types'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {member.metadata.photo && (
                <div className="mb-6">
                  <img 
                    src={`${member.metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={member.metadata.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto"
                    width={128}
                    height={128}
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {member.metadata.name}
              </h3>
              
              <p className="text-primary-600 font-medium mb-4">
                {member.metadata.job_title}
              </p>
              
              {member.metadata.bio && (
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.metadata.bio}
                </p>
              )}
              
              {member.metadata.skills && member.metadata.skills.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.metadata.skills.slice(0, 6).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-center space-x-4">
                {member.metadata.email && (
                  <a 
                    href={`mailto:${member.metadata.email}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    Email
                  </a>
                )}
                {member.metadata.linkedin && (
                  <a 
                    href={member.metadata.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}