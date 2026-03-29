import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a form submission
        setStatus('success');
        setTimeout(() => setStatus(null), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        { icon: Mail, text: "mk@portfolio.com", label: "Email" },
        { icon: Phone, text: "+216 12 345 678", label: "Phone" },
        { icon: MapPin, text: "Monastir, Tunisia", label: "Location" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-24 min-h-screen pb-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Contact Information */}
                <div className="space-y-8 sm:space-y-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ECDFCC] to-[#697565] bg-clip-text text-transparent">
                        Contact Me
                    </h2>
                    <p className="text-[#697565] text-lg sm:text-xl leading-relaxed max-w-lg">
                        Have a specific project in mind? Looking for a long-term collaboration? Feel free to reach out to me via the form or through the contacts listed below.
                    </p>
                    
                    <div className="space-y-6 sm:space-y-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div key={index} className="flex items-center space-x-4 sm:space-x-6">
                                    <div className="p-3 sm:p-4 rounded-xl bg-[#1e2319] border border-[#3C3D37]">
                                        <Icon className="text-[#ECDFCC] w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm font-medium text-[#697565] uppercase tracking-wider">{info.label}</p>
                                        <p className="text-lg sm:text-xl font-semibold text-[#ECDFCC]">{info.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-6 sm:p-10 rounded-2xl bg-[#1e2319]/50 border border-[#3C3D37] backdrop-blur-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:grid-gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-[#697565]" htmlFor="name">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-4 rounded-xl bg-[#3C3D37]/30 border border-[#3C3D37] text-[#ECDFCC] focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]/30 transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-[#697565]" htmlFor="email">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-4 rounded-xl bg-[#3C3D37]/30 border border-[#3C3D37] text-[#ECDFCC] focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]/30 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-[#697565]" htmlFor="subject">Subject</label>
                            <input
                                required
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="p-4 rounded-xl bg-[#3C3D37]/30 border border-[#3C3D37] text-[#ECDFCC] focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]/30 transition-all"
                                placeholder="What is this about?"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-[#697565]" htmlFor="message">Your Message</label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="p-4 rounded-xl bg-[#3C3D37]/30 border border-[#3C3D37] text-[#ECDFCC] focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]/30 resize-none transition-all"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-4 rounded-xl bg-[#ECDFCC] text-[#1e2319] font-bold text-lg flex items-center justify-center space-x-3 hover:bg-[#697565] hover:text-[#ECDFCC] transition-all transform hover:-translate-y-1"
                        >
                            <span>{status === 'success' ? 'Message Sent!' : 'Send Message'}</span>
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
