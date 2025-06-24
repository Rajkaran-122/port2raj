import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <a
            href="#home"
            className="text-2xl font-bold gradient-text select-none focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label="Go to home"
          >
            Rajkaran
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary p-2 rounded-lg hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg rounded-xl mx-2 mb-2 p-4 animate-fade-in shadow-lg border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
