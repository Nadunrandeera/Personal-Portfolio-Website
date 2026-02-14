import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nadunrandeera@gmail.com.com',
      href: 'mailto:nadun@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 71 076 3969',
      href: 'tel:+94710763969',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kurunegala, Sri Lanka',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nadunrandeera', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nadunrandeera/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/nadunrandeera', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#ff014f] text-xs font-medium mb-4 tracking-widest uppercase">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Contact <span className="text-[#ff014f]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's talk about everything!</h3>
              <p className="text-gray-400 mb-8">
                Don't like forms? Send me an email or connect with me on social media. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-[#212121] rounded-xl border border-gray-800 hover:border-[#ff014f] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff014f] to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-xs mb-4 tracking-widest uppercase">FOLLOW ME</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#212121] hover:bg-[#ff014f] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#ff014f]/50 border border-gray-800 hover:border-[#ff014f]"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-300 group-hover:text-white" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-[#212121] rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#ff014f] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#ff014f] focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white focus:border-[#ff014f] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#ff014f] text-white rounded-lg hover:shadow-lg hover:shadow-[#ff014f]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}