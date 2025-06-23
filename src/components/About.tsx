import {
  Award,           // For Years Experience
  Briefcase,       // For Projects Delivered
  UserCheck,       // For Happy Clients
  GitPullRequest,  // For Open Source PRs
  FileText,
  Mail,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Users,
  Code
} from 'lucide-react';

const stats = [
  {
    label: 'Years Experience',
    value: '3+',
    icon: <Award className="w-8 h-8 text-primary" aria-hidden="true" />
  },
  {
    label: 'Projects Delivered',
    value: '25+',
    icon: <Briefcase className="w-8 h-8 text-accent" aria-hidden="true" />
  },
  {
    label: 'Happy Clients',
    value: '12+',
    icon: <UserCheck className="w-8 h-8 text-yellow-400" aria-hidden="true" />
  },
  {
    label: 'Open Source PRs',
    value: '40+',
    icon: <GitPullRequest className="w-8 h-8 text-green-400" aria-hidden="true" />
  }
];

const skills = [
  {
    category: 'Frontend',
    icon: <Globe className="w-7 h-7" />,
    technologies: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend',
    icon: <Database className="w-7 h-7" />,
    technologies: [
      'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-7 h-7" />,
    technologies: [
      'React Native', 'Flutter', 'iOS', 'Android'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'DevOps & Cloud',
    icon: <Cloud className="w-7 h-7" />,
    technologies: [
      'Docker', 'AWS', 'Vercel', 'CI/CD'
    ],
    color: 'from-sky-500 to-indigo-500'
  },
  {
    category: 'Testing & Quality',
    icon: <Shield className="w-7 h-7" />,
    technologies: [
      'Jest', 'Cypress', 'ESLint'
    ],
    color: 'from-pink-500 to-fuchsia-500'
  },
  {
    category: 'Tools & Others',
    icon: <Code className="w-7 h-7" />,
    technologies: [
      'Git', 'Figma', 'VS Code'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Soft Skills',
    icon: <Users className="w-7 h-7" />,
    technologies: [
      'Teamwork', 'Communication', 'Problem Solving'
    ],
    color: 'from-yellow-500 to-amber-500'
  }
];

const About = () => (
  <section
    id="about"
    className="py-24 px-6 lg:px-8 bg-background text-foreground font-sans"
    aria-labelledby="about-heading"
  >
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          id="about-heading"
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight"
        >
          About Me
        </h2>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
          Hi, I’m <span className="text-primary font-bold">Raj</span>, a dedicated Full Stack Developer with a passion for building impactful digital products. With over 3 years of hands-on experience, I specialize in crafting robust web and mobile applications that blend performance, accessibility, and beautiful design.
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
          I thrive on solving complex problems, collaborating with diverse teams, and continuously learning the latest in tech. Whether it’s launching a new product, optimizing an existing platform, or mentoring fellow developers, I bring energy, creativity, and a commitment to excellence to every project.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 hover:bg-primary/90 transition-all text-lg"
            aria-label="Download Resume"
          >
            <FileText className="w-5 h-5" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:bg-accent/90 transition-all text-lg"
            aria-label="Contact Me"
          >
            <Mail className="w-5 h-5" /> Contact Me
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card p-8 flex flex-col items-center justify-center animate-fade-in shadow-xl"
            style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
          >
            <div className="mb-3">{stat.icon}</div>
            <span className="text-4xl font-extrabold text-white mb-1">{stat.value}</span>
            <span className="text-gray-400 text-base font-medium text-center">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Journey & What I Do */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="glass-card p-10 hover-glow animate-fade-in shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              My coding journey began in 2020, driven by a fascination with how technology shapes our world. Since then, I’ve mastered the MERN stack, explored cloud and mobile development, and contributed to open source.
            </p>
            <p>
              I’ve worked with startups, agencies, and global teams, always striving to deliver high-quality, scalable solutions. My approach combines technical expertise with a user-first mindset and a love for clean, maintainable code.
            </p>
            <p>
              Outside of work, I enjoy exploring new frameworks, mentoring junior devs, and sharing knowledge with the community.
            </p>
          </div>
        </div>
        <div className="glass-card p-10 hover-glow animate-fade-in shadow-lg" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-6 text-accent">What I Do</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-white">Frontend Development</h4>
                <p className="text-gray-400">Building responsive, accessible, and visually engaging interfaces.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-white">Backend Development</h4>
                <p className="text-gray-400">Designing scalable APIs, databases, and server-side logic.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-white">Mobile Development</h4>
                <p className="text-gray-400">Creating cross-platform mobile apps with smooth user experiences.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-white">DevOps & Cloud</h4>
                <p className="text-gray-400">Deploying, monitoring, and scaling applications in the cloud.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-white">Testing & Quality</h4>
                <p className="text-gray-400">Ensuring code quality and reliability with modern testing tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className="glass-card p-6 hover-glow animate-fade-in shadow-lg"
            style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-4 mx-auto shadow-lg flex items-center justify-center`}>
              <span className="text-white">{skill.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-center mb-4 text-white">{skill.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
