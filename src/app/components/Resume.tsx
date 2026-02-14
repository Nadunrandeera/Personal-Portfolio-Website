import { GraduationCap, Briefcase, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function Resume() {
  const education = [
    {
      degree: 'Bachelor of ICT',
      institution: 'University of Jaffna',
      period: '2022 - Present',
      description: 'Faculty of Technological Studies, Department of ICT. Focusing on web technologies and software engineering.',
    },
    {
      degree: 'Advanced Level',
      institution: 'Technology Stream',
      period: '2017 - 2019',
      description: 'Completed A/L examination in Technology Stream',
    },
  ];

  const experience = [
    {
      position: 'Full Stack Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2025 - Present',
      description: 'Working on modern web applications using React, Node.js, and cloud technologies.',
    },
    {
      position: 'Frontend Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developed responsive websites and web applications for various clients using React,Node.js and Spring Boot.',
    },
    // {
    //   position: 'UI/UX Designer',
    //   company: 'Design Studio',
    //   period: '2022 - 2023',
    //   description: 'Created user interfaces and design systems for web and mobile applications using Figma.',
    // },
  ];

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'TypeScript / JavaScript', level: 85 },
    { name: 'Node.js / Express', level: 60 },
    { name: 'Spring Boot / Java', level: 70 },
    { name: 'ASP .NET Core', level: 50 },
    { name: 'MongoDB / MySQL', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'UI/UX Design (Figma)', level: 70 },
  ];

  return (
    <section id="resume" className="py-20 bg-[#212121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#ff014f] text-xs font-medium mb-4 tracking-widest uppercase">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Resume & <span className="text-[#ff014f]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            My educational background and professional experience
          </p>
          <button className="px-8 py-3 bg-[#ff014f] text-white rounded-lg hover:shadow-lg hover:shadow-[#ff014f]/50 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Download size={18} />
            Download Resume
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#ff014f] rounded-full -translate-x-[9px]"></div>
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-[#ff014f] transition-all duration-300">
                    <span className="text-[#ff014f] text-sm">{edu.period}</span>
                    <h4 className="text-xl text-white mt-2 mb-1">{edu.degree}</h4>
                    <p className="text-gray-300 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff014f] to-pink-600 rounded-xl flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-[#ff014f] transition-all duration-300">
                    <span className="text-blue-400 text-sm">{exp.period}</span>
                    <h4 className="text-xl text-white mt-2 mb-1">{exp.position}</h4>
                    <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-[#ff014f]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#ff014f] to-pink-600 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}