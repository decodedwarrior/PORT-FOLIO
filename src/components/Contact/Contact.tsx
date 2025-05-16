import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully! (This is a demo)');
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-black"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-yellow-400 p-2 rounded-lg">
                      <Mail size={20} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                      <a href="mailto:moharanasumit09@gmail.com" className="text-white hover:text-yellow-400 transition-colors">moharanasumit09@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-yellow-400 p-2 rounded-lg">
                      <PhoneCall size={20} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Phone</h4>
                      <a href="tel:+917008189215" className="text-white hover:text-yellow-400 transition-colors">+91 7008189215</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-yellow-400 p-2 rounded-lg">
                      <MapPin size={20} className="text-black" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                      <p className="text-white">Cuttack, Odisha</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-white mb-4">Follow me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/decodedwarrior" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sumitmoharana/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com/@XtronWarrior" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                      placeholder="Drop your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                      placeholder="your@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;