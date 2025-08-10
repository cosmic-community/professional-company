export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Professional Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
            We help businesses grow with custom web development, strategic consulting, and user-centered design solutions that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <button className="btn-primary text-lg px-8 py-4">
              View Our Services
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              See Case Studies
            </button>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in animation-delay-600">
          <img 
            src="https://imgix.cosmicjs.com/b5ee1b70-758b-11f0-a051-23c10f41277a-photo-1551434678-e076c223a692-1754790330852.jpg?w=1200&h=600&fit=crop&auto=format,compress"
            alt="Professional team working on digital solutions"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}