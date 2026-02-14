import { Code2, Server, Smartphone, Figma as FigmaIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications using React, Next.js, and cutting-edge UI/UX practices.',
      skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust server-side solutions with Node.js, Express, and Spring Boot for scalable applications.',
      skills: ['Node.js', 'Express', 'Spring Boot', 'MongoDB', 'MySQL'],
      gradient: 'from-[#ff014f] to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile applications for iOS and Android with native performance.',
      skills: ['React Native','Android','Mobile UI/UX'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: FigmaIcon,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces with Figma, focusing on user experience.',
      skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design Systems'],
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#ff014f] text-xs font-medium mb-4 tracking-widest uppercase">WHAT I DO</p>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Features & <span className="text-[#ff014f]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#ff014f] transition-all duration-300 group hover:shadow-xl hover:shadow-[#ff014f]/20"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-[#212121] text-gray-300 rounded border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}