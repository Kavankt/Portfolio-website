import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_71n1t0c',
        'template_jyktude',
        formRef.current,
        '7I1BeI0iKr13xkTp9'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="pt-12 pb-20 px-6 md:px-20 text-white">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact Form */}
        <motion.div
          className="bg-gray-900/70 p-6 md:p-8 rounded-xl border border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-600 bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
              </svg>
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>Mangaluru, Karnataka</p>
          <a href="mailto:kavankt602@gmail.com" className="text-purple-400 hover:underline transition-all duration-300">
            kavankt602@gmail.com
          </a>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/kavan-k-t/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-purple-400 transition-all duration-300" />
            </a>
            <a href="https://github.com/Kavankt" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-purple-400 transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/kavannn._" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-purple-400 transition-all duration-300" />
            </a>
          </div>
          <a href="#top" className="mt-6 underline hover:text-purple-400 transition-all duration-300">
            Back to top ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
