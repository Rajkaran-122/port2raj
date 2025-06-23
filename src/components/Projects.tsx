import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const customProjects = [
  {
    title: 'v0 New Project',
    description: 'A modern web project built with the latest stack and UI/UX best practices.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: 'https://v0-new-project-ouzcv2gjrwh.vercel.app/',
    github: '',
  },
  {
    title: 'Ani-Manga',
    description: 'Discover and track your favorite anime and manga with a beautiful interface.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: 'https://ani-manga-122.vercel.app/',
    github: '',
  },
  {
    title: 'Digital Detox',
    description: 'A digital wellness app to help you manage screen time and build healthy habits.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: 'https://digitaldetox-122.vercel.app/',
    github: '',
  },
  {
    title: 'Portfolio Raj',
    description: 'My personal portfolio showcasing my work, skills, and contact information.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: 'https://vercel.com/yadavrajkaran854-gmailcoms-projects/portfolio-raj/8NARx3S7AYVTQsNgq7DkQq6T3HB3',
    github: '',
  },
];

const otherProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/rajkaranyadav/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/rajkaranyadav/task-manager',
    live: 'https://taskmanager-demo.vercel.app',
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    github: 'https://github.com/rajkaranyadav/weather-dashboard',
    live: 'https://weather-app-demo.vercel.app',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization, scheduling features, and engagement tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    github: 'https://github.com/rajkaranyadav/social-dashboard',
    live: 'https://social-dashboard-demo.vercel.app',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/rajkaranyadav/portfolio',
    live: 'https://rajkaranyadav-portfolio.vercel.app',
  },
  {
    title: 'Real-time Chat App',
    description: 'A real-time messaging application with group chats, file sharing, emoji reactions, and end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/rajkaranyadav/chat-app',
    live: 'https://chatapp-demo.vercel.app',
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#101014] text-white min-h-screen"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
          Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Explore some of my recent work. Each project demonstrates my passion for clean code, modern design, and user experience.
        </p>
      </div>

      {/* Custom Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">Featured Projects</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {customProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl transition group flex flex-col justify-between overflow-hidden relative"
            >
              <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-br group-hover:from-fuchsia-700/10 group-hover:to-cyan-400/10 transition" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-fuchsia-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mt-auto flex gap-2">
                  {project.github && (
                    <Button asChild size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:text-fuchsia-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Github size={18} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button asChild size="sm" className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white hover:from-fuchsia-600 hover:to-cyan-500">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Visit <ExternalLink size={18} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Other Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl transition group flex flex-col justify-between overflow-hidden relative"
            >
              <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-br group-hover:from-cyan-700/10 group-hover:to-fuchsia-400/10 transition" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies &&
                    project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-400/10 text-cyan-300 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.technologies && project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-auto flex gap-2">
                  {project.github && (
                    <Button asChild size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:text-cyan-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Github size={18} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild size="sm" className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white hover:from-cyan-500 hover:to-fuchsia-600">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Visit <ExternalLink size={18} className="ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" asChild className="border-gray-700 text-gray-300 hover:text-fuchsia-400">
          <a
            href="https://github.com/rajkaranyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Projects;