/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  User, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Phone,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({} as any);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const errors = {} as any;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev:any) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Reset previous submit status
    setSubmitStatus(null);

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      // Simulate form submission (replace with actual API call)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success' as any);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error' as any);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error' as any);
    }
  };

  return (
    <section className="bg-slate-900 text-white py-20 px-4 overflow-hidden xl:px-[100px]" id='contact'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I am always open to discussing web development opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-xl space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">Lahore, Pakistan</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="text-purple-500" size={24} />
              <span className="text-gray-300">+92 123 456 7890</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-500" size={24} />
              <span className="text-gray-300">ansarsaeed@example.com</span>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-8">
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-slate-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <div className="flex items-center mb-2">
                  <User className="mr-2 text-purple-500" size={20} />
                  <label className="text-gray-300">Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-lg bg-slate-800 border ${
                    formErrors?.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-700 focus:ring-purple-500'
                  } text-white focus:outline-none focus:ring-2`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="mr-2 text-purple-500" size={20} />
                  <label className="text-gray-300">Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full p-3 rounded-lg bg-slate-800 border ${
                    formErrors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-700 focus:ring-purple-500'
                  } text-white focus:outline-none focus:ring-2`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> {formErrors.email}
                  </p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare className="mr-2 text-purple-500" size={20} />
                  <label className="text-gray-300">Subject</label>
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full p-3 rounded-lg bg-slate-800 border ${
                    formErrors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-700 focus:ring-purple-500'
                  } text-white focus:outline-none focus:ring-2`}
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> {formErrors.subject}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare className="mr-2 text-purple-500" size={20} />
                  <label className="text-gray-300">Message</label>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full p-3 rounded-lg bg-slate-800 border ${
                    formErrors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-700 focus:ring-purple-500'
                  } text-white focus:outline-none focus:ring-2`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle size={16} className="mr-1" /> {formErrors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <div className="flex items-center justify-center">
                  <Send className="mr-2" size={20} />
                  Send Message
                </div>
              </motion.button>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <div className="mt-4 bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-lg flex items-center">
                  <CheckCircle2 className="mr-2" size={24} />
                  Your message was sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 bg-red-600/20 border border-red-500 text-red-400 p-4 rounded-lg flex items-center">
                  <AlertTriangle className="mr-2" size={24} />
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}