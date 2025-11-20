import { Button } from "@/components/ui/button"
import { MailIcon, ArrowDownIcon } from "lucide-react"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative snap-y snap-mandatory overflow-y-scroll h-screen">
      <ParticlesBackground />

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">EOF Software Studios</div>
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="snap-start snap-always min-h-screen flex items-center justify-center px-6 relative">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-balance">
            Crafting Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
            Freelance software development for forward-thinking businesses
          </p>
          <a href="#about">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10">
              <ArrowDownIcon className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-tight">About</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              EOF Software Studios is a freelance software development studio focused on delivering exceptional digital
              solutions. I partner with businesses to transform their ideas into elegant, functional software.
            </p>
            <p>
              With expertise across modern web technologies and a commitment to clean, maintainable code, I help clients
              build products that are both beautiful and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">01</div>
              <h3 className="text-xl font-medium">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern web applications built with cutting-edge frameworks. Responsive, performant, and designed for
                scale.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">02</div>
              <h3 className="text-xl font-medium">System Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughtful architecture and system design that grows with your business. Future-proof foundations for
                long-term success.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">03</div>
              <h3 className="text-xl font-medium">API Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Robust APIs designed for performance and developer experience. RESTful and GraphQL solutions that power
                your applications.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-6xl font-light text-accent">04</div>
              <h3 className="text-xl font-medium">Technical Consulting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert guidance on technology decisions, code quality, and best practices. Strategic technical
                leadership for your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 text-balance max-w-xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Get in touch to discuss how we can bring your vision to
            life.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full px-8"
            asChild
          >
            <a href="mailto:alessionannipieri@eofsoftwarestudios.com">
              <MailIcon className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 border-t border-border py-6 px-6 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          &copy; 2025 EOF Software Studios
        </div>
      </footer>
    </div>
  )
}
