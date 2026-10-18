import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer id='Footer' className="bg-[#18181a] text-[#e5e5e5] pt-24">
            {/* Top Section */}
            <div className="flex flex-col items-center text-center pb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">
                    Let&apos;s Work Together
                </h2>
                <p className="text-lg mb-8 text-[#b3b3b3] max-w-2xl">
                    I&apos;m always open to discussing new opportunities and interesting projects.
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        <FaEnvelope /> Email Me
                    </a>
                    <a
                        href="tel:0313-5223612"
                        className="flex items-center gap-2 bg-[#232325] hover:bg-[#2c2c2e] text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        <FaPhone /> Call Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammad-saqib-654a23280/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#232325] hover:bg-[#2c2c2e] text-white px-6 py-3 rounded-md font-medium transition"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#232325]"></div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Muhammad Saqib jadoon
                    </h3>
                    <p className="text-[#b3b3b3] mb-6">
                        Passionate Frontend Developer crafting exceptional digital experiences with modern technologies.
                    </p>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://www.linkedin.com/in/muhammad-saqib-654a23280/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                {/* Center */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-[#b3b3b3]">
                        <li><a href="#about" className="hover:text-white transition">About</a></li>
                        <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
                        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                        <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                    </ul>
                </div>
                {/* Right */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                    <ul className="space-y-4 text-[#b3b3b3]">
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> saqibiot@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone /> 0313-5223612
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt /> Attock, Pakistan
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


