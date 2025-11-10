export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 bg-graphite/90 backdrop-blur-sm border-b border-graphite-light">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              EOF<span className="text-turquoise">.</span>
            </div>
            <ul className="flex gap-8">
              <li>
                <a 
                  href="#about" 
                  className="text-foreground hover:text-turquoise transition-colors duration-300"
                >
                  Who am I
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-foreground hover:text-turquoise transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-foreground hover:text-turquoise transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            EOF Software Studios
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Crafting Excellence in Software Engineering
          </p>
          <div className="w-24 h-1 bg-turquoise mx-auto"></div>
        </div>
      </section>

      {/* Who am I Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who am I
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I&apos;m a freelance software engineer passionate about creating elegant, 
              efficient solutions to complex problems. With expertise across the full stack, 
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p>
              At EOF Software Studios, I focus on delivering high-quality software that 
              makes a difference. Every project is an opportunity to craft something exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center py-20 bg-graphite">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-graphite-light p-8 rounded-lg border border-gray-700 hover:border-turquoise transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-turquoise">
                Web Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Custom web applications built with modern frameworks and best practices. 
                Responsive, performant, and user-friendly.
              </p>
            </div>
            <div className="bg-graphite-light p-8 rounded-lg border border-gray-700 hover:border-turquoise transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-turquoise">
                Software Architecture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Scalable system design and architecture consulting. Making sure your 
                software foundation is solid and future-proof.
              </p>
            </div>
            <div className="bg-graphite-light p-8 rounded-lg border border-gray-700 hover:border-turquoise transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-turquoise">
                API Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                RESTful and GraphQL APIs designed for performance and ease of integration. 
                Robust, documented, and secure.
              </p>
            </div>
            <div className="bg-graphite-light p-8 rounded-lg border border-gray-700 hover:border-turquoise transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-turquoise">
                Code Review & Consulting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert code reviews and technical consulting to improve code quality, 
                performance, and maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Contact
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your next project? Let&apos;s discuss how I can help 
              bring your ideas to life.
            </p>
            <a 
              href="mailto:hello@eofsoftwarestudios.com" 
              className="inline-block bg-turquoise hover:bg-turquoise-dark text-background font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              hello@eofsoftwarestudios.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite border-t border-graphite-light py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 EOF Software Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
