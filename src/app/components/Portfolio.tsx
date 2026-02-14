import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import AudioImage from '../../assets/Audio.png';
import LostFoundImage from '../../assets/Lost.png';
import EmailAssistantImage from '../../assets/Email.png';
import PortfolioImage from '../../assets/pp.png';

export function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Web Apps', 'Desktop Apps', 'Chatbot'];

    const projects = [
        {
            title: 'Audio-Transcribe',
            description: 'A web application that allows users to transcribe audio files to text using AI.',
            image: AudioImage,
            category: 'Web Apps',
            technologies: ['React', 'TypeScript', 'Springboot', 'MySQL'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Nadunrandeera/Audio-Transcribe',
        },
        {
            title: 'Lost-Found-Portal',
            description: 'A web application that allows users to find lost and found items.',
            image: LostFoundImage,
            category: 'Web Apps',
            technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Nadunrandeera/Lost-Found-Portal',
        },
        {
            title: 'Library Management System - JavaFX',
            description: 'That allows users to manage library books.',
            image: 'https://cdn.prod.website-files.com/65fabbf8f7f7323a634a308c/6697a8662e63dfe68b424df5_Group%201171275865-p-1080.png',
            category: 'Desktop Apps',
            technologies: ['JavaFX', 'MySQL', 'CSS', 'Java'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Nadunrandeera/LibryManagementSystemUsing-JavaFX',
        },
        {
            title: 'Whatsapp_Chatbot ',
            description: 'A real-time responsive whatsapp chatbot that allows users to reply to messages using AI.',
            image: 'https://www.unifonic.com/hubfs/ai-chatbot.webp',
            category: 'Chatbot',
            technologies: ['OpenAI GPT-3.5', 'TypeScript', 'Node.js', 'Next.js'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Nadunrandeera/Whatsapp_Chatbot',
        },
        {
            title: 'Email Assistant Extension',
            description: 'A chrome extension that helps users to manage their emails.',
            image: EmailAssistantImage,
            category: 'Chatbot',
            technologies: ['JavaScript', 'Spring Boot', 'Java'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive portfolio website for showcasing projects and skills.',
            image: PortfolioImage,
            category: 'Web Apps',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#ff014f] text-xs font-medium mb-4 tracking-widest uppercase">MY WORK</p>
                    <h2 className="text-4xl md:text-5xl text-white mb-4">
                        Recent <span className="text-[#ff014f]">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-lg transition-all duration-300 ${activeFilter === filter
                                ? 'bg-[#ff014f] text-white shadow-lg shadow-[#ff014f]/30'
                                : 'bg-[#212121] text-gray-400 hover:text-white border border-gray-800'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#212121] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ff014f] transition-all duration-300 group hover:shadow-xl hover:shadow-[#ff014f]/20"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#212121] to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs px-3 py-1 bg-[#ff014f]/20 text-[#ff014f] rounded-full">
                                    {project.category}
                                </span>
                                <h3 className="text-xl text-white mt-3 mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-300 rounded border border-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        className="flex-1 px-4 py-2 bg-[#ff014f] text-white rounded-lg hover:shadow-lg hover:shadow-[#ff014f]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center border border-gray-800"
                                    >
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
