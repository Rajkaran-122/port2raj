import { useState } from 'react';
import { Github, Link as LinkIcon, Star, BadgeCheck, ExternalLink, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Testimonials
const testimonials = [
  {
    name: "Sarah Gupta",
    role: "Product Designer at TechCorp",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Rajkaran's attention to detail and innovative solutions transformed our user experience. His full-stack expertise is exceptional.",
  },
  // Add more testimonials here if you want
];

// Projects (add your projects array here)
const projects = [
  // ... your projects array ...
];

// Contact Form (unchanged)
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <Card className="max-w-lg mx-auto shadow-xl glass border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Mail className="w-6 h-6 text-blue-500" /> Contact Me
        </CardTitle>
        <CardDescription>Let's connect! I'll reply within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 rounded-lg border border-blue-200/40 bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 rounded-lg border border-blue-200/40 bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-blue-200/40 bg-white/80 focus:ring-2 focus:ring-blue-400 outline-none"
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full font-bold shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Send Message
          </Button>
          {success && (
            <div className="mt-3 text-green-600 text-center font-semibold animate-fade-in">
              Thank you! Your message has been sent. 🚀
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

// Main Component
export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-gradient-to-b from-background to-muted min-h-screen pb-20">
      {/* Projects */}
      <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
              A showcase of my recent work and personal projects
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                tabIndex={0}
                className={`relative group glass border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] overflow-hidden ${
                  project.featured ? 'ring-2 ring-blue-400/60' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocus={() => setHoveredProject(index)}
                onBlur={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Featured badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-1 px-3 py-1 text-xs font-semibold z-10">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {/* Demo badge */}
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg flex items-center gap-1 px-3 py-1 text-xs font-semibold z-10">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Badge>
                  {/* Overlay on hover/focus */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 flex flex-col justify-end ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex gap-2 p-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="default" asChild className="font-bold shadow-lg">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                          <LinkIcon className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Open project link">
                          <LinkIcon className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {project.title}
                    {project.featured && (
                      <span className="ml-1">
                        <BadgeCheck className="w-4 h-4 text-yellow-400" />
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="glass border border-blue-200/40 text-blue-700 dark:text-blue-200 px-2 py-1 text-xs flex items-center gap-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What People Say
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-10">
          Testimonials from colleagues, clients, and collaborators who've experienced my work firsthand.
        </p>
        <div className="flex flex-col items-center justify-center">
          {testimonials.map((t, i) => (
            <Card key={i} className="glass border-none shadow-xl flex flex-col items-center text-center p-8 max-w-xl mx-auto">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 mb-4"
              />
              <p className="text-lg text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-blue-700 dark:text-blue-300">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section (unchanged) */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <ContactForm />
      </section>

      {/* Animations (add to your global CSS or Tailwind config) */}
      <style jsx global>{`
        .glass {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }
        .animate-fade-in {
          animation: fadeIn 1s both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
