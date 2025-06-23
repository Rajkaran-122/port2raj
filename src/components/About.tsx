import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Database className="w-8 h-8" />,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Tools & Others',
      icon: <Code className="w-8 h-8" />,
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Mobile UI'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with 3+ years of experience in creating 
            web and mobile applications. I love turning complex problems into simple, 
            beautiful solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8 hover-glow animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Started my coding journey in 2020 with a curiosity about how websites work. 
                That curiosity quickly turned into a passion for creating digital experiences.
              </p>
              <p>
                I specialize in the MERN stack and have experience with modern frameworks 
                and tools. I'm always eager to learn new technologies and stay updated 
                with industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 hover-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-accent">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white">Frontend Development</h4>
                  <p className="text-gray-400">Creating responsive and interactive user interfaces</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white">Backend Development</h4>
                  <p className="text-gray-400">Building robust APIs and server-side logic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white">Mobile Development</h4>
                  <p className="text-gray-400">Developing cross-platform mobile applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass-card p-6 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-4 mb-4 mx-auto`}>
                <div className="text-white flex items-center justify-center h-full">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">{skill.category}</h3>
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
};

export default About;