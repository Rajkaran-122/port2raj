import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const testimonials = [
  {
    quote:
      "Rajkaran brings creativity and technical excellence together. His UI/UX designs are both beautiful and functional.",
    name: "Amit Verma",
    title: "Lead Frontend Engineer at PixelWave",
  },
  {
    quote:
      "Rajkaran's attention to detail and innovative solutions transformed our user experience. His full-stack expertise is exceptional.",
    name: "Sarah Gupta",
    title: "Product Designer at TechCorp",
  },
  {
    quote:
      "Working with Rajkaran was a pleasure. He communicates clearly, delivers on time, and always exceeds expectations.",
    name: "Priya Sharma",
    title: "Project Manager at InnovateX",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'rajkaranyadav122@gmail.com',
      link: 'mailto:rajkaranyadav122@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">

        {/* Testimonials Section FIRST */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              What People Say
            </h3>
            <p className="text-lg text-gray-400">
              Testimonials from colleagues, clients, and collaborators who've experienced my work firsthand.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/10 border border-white/20 shadow-xl p-8 flex flex-col items-center text-center animate-fade-in transition-all hover:scale-105"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-gray-200 text-lg italic mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Testimonials */}

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.<br />
            <span className="text-white/80">Let's build something amazing together!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-5">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I’m always open to discussing new opportunities, interesting projects, or potential collaborations. Whether you’re a startup or an established company, I’m here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-primary transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-400 font-medium">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 animate-fade-in border border-white/10 shadow-lg">
              <h4 className="text-lg font-semibold text-accent mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24 hours. For urgent inquiries, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 animate-fade-in border border-white/10 shadow-xl" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 resize-none transition"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
