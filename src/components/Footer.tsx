import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/rajkaranyadav'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/rajkaranyadav'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:rajkaranyadav122@gmail.com'
    }
  ];

  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t border-white/10 py-12 px-6 lg:px-8 text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4 select-none">RK.dev</div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>rajkaranyadav122@gmail.com</p>
              <p>+91 9876543210</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Raj Karan Yadav</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-6 text-gray-500 text-sm">
          <p>&copy; {currentYear} Raj Karan Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;