
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              Interested in working together? I'd love to hear about your project.
            </p>
            
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-portfolio-deepblue/10 flex items-center justify-center mr-4">
                <Mail size={18} className="text-portfolio-deepblue" />
              </div>
              <a 
                href="mailto:hello@uxportfolio.com" 
                className="text-lg hover:text-portfolio-deepblue transition-colors link-underline"
                data-cursor="pointer"
              >
                hello@uxportfolio.com
              </a>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-mono font-bold mb-2">Availability</h4>
              <p className="text-gray-600 mb-2">Currently available for freelance projects and collaborations.</p>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-portfolio-deepblue"
                  data-cursor="pointer"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-portfolio-deepblue"
                  data-cursor="pointer"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-portfolio-deepblue resize-none"
                  data-cursor="pointer"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`py-3 px-6 rounded-md font-medium transition-colors ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-portfolio-deepblue hover:bg-portfolio-deepblue/90 text-white'
                }`}
                data-cursor="pointer"
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
