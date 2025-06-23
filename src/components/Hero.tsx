import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentIndex];

      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 mt-12 md:mt-24">
        {/* Photo Section */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div className="relative group">
            {/* Colorful gradient border effect only around photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-70 blur-lg scale-110 z-0"></div>
            <div className="relative z-10 p-1 bg-white/5 rounded-full border-2 border-white/10 shadow-xl">
              <img
                src="https://i.postimg.cc/rm1484Bk/2048737.jpg"
                alt="Raj Karan Yadav"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                RajKaran Yadav
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-mono h-12 flex items-center justify-center md:justify-start">
              <span className="mr-2">I'm a</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent border-r-2 border-primary pr-1">
                {displayText}
              </span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Passionate about <span className="text-primary font-semibold">creating innovative web solutions</span> with modern technologies.<br />
            I build <span className="text-accent font-semibold">scalable applications</span> that deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-8 py-3 rounded-full font-semibold shadow-none"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <div className="flex gap-4">
              <a
                href="https://github.com/rajkaranyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/rajkaranyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:yadavrajkaran854@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown size={32} className="text-primary mx-auto md:mx-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
