import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
// import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // To track the submission state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start animation

    emailjs
      .sendForm(
        'service_71n1t0c',       // Replace with your EmailJS Service ID
        'template_jyktude',      // Replace with your Template ID
        formRef.current,
        '7I1BeI0iKr13xkTp9'      // Replace with your Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
          setIsSubmitting(false); // Stop animation after successful submit
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
          setIsSubmitting(false); // Stop animation on error
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 text-white">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-black/30 p-8 rounded-xl border border-purple-700 backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] duration-500">
          <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1f2937] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1f2937] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your message here..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1f2937] rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all duration-300"
            />
            <button
              type="submit"
              className={`noselect flex items-center justify-center ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              <span>Submit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>Mangaluru, Karnataka</p>
          <a href="mailto:kavankt602@gmail.com" className="text-purple-400 hover:underline">
            kavankt602@gmail.com
          </a>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/kavan-k-t/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://github.com/Kavankt" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-purple-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/kavannn._" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-purple-400 transition duration-300" />
            </a>
          </div>
          <a href="#" className="mt-6 underline hover:text-purple-400 transition">Back to top ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
