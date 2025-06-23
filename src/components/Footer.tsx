import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={22} />,
      url: 'https://github.com/rajkaranyadav'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={22} />,
      url: 'https://linkedin.com/in/rajkaranyadav'
    },
    {
      name: 'Email',
      icon: <Mail size={22} />,
      url: 'mailto:rajkaranyadav122@gmail.com'
    }
  ];

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-white/10 py-12 px-6 lg:px-8 text-foreground font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 select-none tracking-tight">
              RK.dev
            </div>
            <p className="text-gray-400 leading-relaxed text-base">
              Full Stack Developer passionate about building innovative web solutions and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
            <nav aria-label="Footer Navigation" className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary focus:text-primary transition-colors duration-200 font-medium"
                  tabIndex={0}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 text-base">
              <a
                href="mailto:rajkaranyadav122@gmail.com"
                className="hover:text-primary focus:text-primary transition-colors"
              >
                rajkaranyadav122@gmail.com
              </a>
              <a
                href="tel:+919876543210"
                className="hover:text-primary focus:text-primary transition-colors block"
              >
                +91 9876543210
              </a>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Social & Made By */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-0 text-base">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 animate-pulse" />
            <span>by <span className="font-semibold text-white">Raj Karan Yadav</span></span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary transition-all duration-300 outline-none ring-0"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 text-gray-500 text-sm select-none">
          <p>
            &copy; {currentYear} <span className="font-semibold text-white">Raj Karan Yadav</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
