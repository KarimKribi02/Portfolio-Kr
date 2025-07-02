import React, { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Envoi en cours...");

    const formPayload = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulaire soumis avec succès !");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setResult(`Erreur: ${data.message}`);
      }
    } catch (error) {
      setResult("Erreur lors de l'envoi du formulaire.");
      console.error("Erreur:", error);
    }
  };

  return (
    <div className='pb-20' style={{ backgroundColor: '#181C14' }}>
     <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -50}}
        transition={{duration: 0.8}} 
        className="mb-12 text-4xl font-bold text-center"
        style={{ color: '#ECDFCC' }}
      >
        Contactez <span style={{ color: '#697565' }}>Moi</span>
      </motion.h2>
      
      <div className='container mx-auto px-6 max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          
          {/* Contact Info Card */}
          <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.8}}
            className='rounded-xl p-8 shadow-lg'
            style={{ backgroundColor: '#3C3D37' }}
          >
            <h3 
              className='text-2xl font-semibold mb-8 text-center'
              style={{ color: '#ECDFCC' }}
            >
              Contact Information
            </h3>
            
            <div className='space-y-6'>
              {/* Address */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className='flex items-start space-x-4 p-4 rounded-lg transition-all duration-300'
                style={{ backgroundColor: 'rgba(105, 117, 101, 0.3)' }}
              >
                <div 
                  className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                  style={{ backgroundColor: '#697565' }}
                >
                  <svg className='w-6 h-6' fill='#ECDFCC' viewBox='0 0 24 24'>
                    <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-1' style={{ color: '#ECDFCC' }}>Address</h4>
                  <p className='text-sm' style={{ color: '#ECDFCC', opacity: 0.8 }}>{CONTACT.address}</p>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className='flex items-start space-x-4 p-4 rounded-lg transition-all duration-300'
                style={{ backgroundColor: 'rgba(105, 117, 101, 0.3)' }}
              >
                <div 
                  className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                  style={{ backgroundColor: '#697565' }}
                >
                  <svg className='w-6 h-6' fill='#ECDFCC' viewBox='0 0 24 24'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-1' style={{ color: '#ECDFCC' }}>Phone</h4>
                  <p className='text-sm' style={{ color: '#ECDFCC', opacity: 0.8 }}>{CONTACT.phoneNo}</p>
                </div>
              </motion.div>
              
              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className='flex items-start space-x-4 p-4 rounded-lg transition-all duration-300'
                style={{ backgroundColor: 'rgba(105, 117, 101, 0.3)' }}
              >
                <div 
                  className='w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'
                  style={{ backgroundColor: '#697565' }}
                >
                  <svg className='w-6 h-6' fill='#ECDFCC' viewBox='0 0 24 24'>
                    <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold mb-1' style={{ color: '#ECDFCC' }}>Email</h4>
                  <a 
                    href={`mailto:${CONTACT.email}`}
                    className='text-sm transition-all duration-300 hover:underline'
                    style={{ color: '#ECDFCC', opacity: 0.8 }}
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className='mt-8 flex justify-center space-x-4'>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300'
                style={{ backgroundColor: '#697565' }}
              >
                <a href="https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/" target="_blank" rel="noopener noreferrer">
                <svg className='w-6 h-6' fill='#ECDFCC' viewBox='0 0 24 24'>
                  
                  <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'/>
                 
                </svg>
                 </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300'
                style={{ backgroundColor: '#697565' }}
              >
                <a href="https://github.com/KarimKribi02" target="_blank" rel="noopener noreferrer">
                <svg className='w-6 h-6' fill='#ECDFCC' viewBox='0 0 24 24'>
                  
                  <path d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z'/>
                  
                </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.8}}
          >

            
            <motion.form
              whileInView={{opacity: 1, scale: 1}}
              initial={{opacity: 0, scale: 0.9}}
              transition={{duration: 0.8, delay: 0.2}}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl p-8 shadow-2xl"
              style={{ backgroundColor: '#3C3D37' }}
            >
              <input type="hidden" name="access_key" value="c324ad2e-ae39-4f67-8d99-bd3413d7a9f9" />

              {/* Name Field */}
              <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.3}}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#ECDFCC' }}
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 p-4 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105"
                  style={{ 
                    backgroundColor: '#181C14',
                    borderColor: '#697565',
                    color: '#ECDFCC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ECDFCC';
                    e.target.style.boxShadow = `0 0 0 2px rgba(236, 223, 204, 0.2)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#697565';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Entrez votre nom"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.4}}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#ECDFCC' }}
                >
                  Votre e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 p-4 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105"
                  style={{ 
                    backgroundColor: '#181C14',
                    borderColor: '#697565',
                    color: '#ECDFCC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ECDFCC';
                    e.target.style.boxShadow = `0 0 0 2px rgba(236, 223, 204, 0.2)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#697565';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Entrez votre e-mail"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.5}}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#ECDFCC' }}
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 p-4 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:scale-105 resize-none"
                  style={{ 
                    backgroundColor: '#181C14',
                    borderColor: '#697565',
                    color: '#ECDFCC'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#ECDFCC';
                    e.target.style.boxShadow = `0 0 0 2px rgba(236, 223, 204, 0.2)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#697565';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Entrez votre message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.6}}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-lg px-6 py-4 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#697565',
                  color: '#ECDFCC'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ECDFCC';
                  e.target.style.color = '#3C3D37';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#697565';
                  e.target.style.color = '#ECDFCC';
                }}
              >
                Envoyer le message
              </motion.button>
            </motion.form>

            {/* Result Message */}
            {result && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center text-lg font-medium px-4 py-2 rounded-lg"
                style={{ 
                  color: result.includes('succès') ? '#697565' : '#ECDFCC',
                  backgroundColor: result.includes('succès') ? 'rgba(105, 117, 101, 0.2)' : 'rgba(236, 223, 204, 0.1)'
                }}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm