import { motion } from 'motion/react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-paper min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 lg:px-8 bg-white border-b border-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">Contact Us</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-8 text-balance">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              We're here to answer your questions and help you schedule your next lawn care or landscaping service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 border border-ink/5 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-8">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">Phone</h3>
            <a href="tel:9856624350" className="text-lg text-ink/70 hover:text-primary transition-colors">
              (985) 662-4350
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 border border-ink/5 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-8">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">Email</h3>
            <a href="mailto:torrezlawncareservices@gmail.com" className="text-lg text-ink/70 hover:text-primary transition-colors break-all">
              torrezlawncareservices<br/>@gmail.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 border border-ink/5 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-8">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">Headquarters</h3>
            <p className="text-lg text-ink/70">
              Hammond, LA<br />
              <span className="text-sm tracking-wide uppercase mt-2 block">Serving a 45-mile radius</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 border border-ink/5 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-8">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-ink mb-3">Hours</h3>
            <ul className="text-lg text-ink/70 space-y-2">
              <li>Mon - Fri: 7am - 6pm</li>
              <li>Sat: 8am - 4pm</li>
              <li>Sun: Closed</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Social & Map Section */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/3 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8">Connect With Us</h2>
            <p className="text-lg text-ink/70 mb-10 leading-relaxed">
              Follow us on social media to see our latest projects, tips for maintaining your lawn, and company updates.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/torrezlawnservices_91" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-full bg-white border border-ink/10 flex items-center justify-center text-ink hover:text-white hover:bg-primary hover:border-primary transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://web.facebook.com/lawnservicestorrez/?ref=PRODASH_UPSELL_xav_ig_profile_page_web#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-full bg-white border border-ink/10 flex items-center justify-center text-ink hover:text-white hover:bg-primary hover:border-primary transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-2/3 h-[450px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-ink/5"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110191.03350314412!2d-90.54714157835158!3d30.49045862211244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86273e65922c2a0d%3A0x6b4c1a5d070119e7!2sHammond%2C%20LA!5e0!3m2!1sen!2sus!4v1710689000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
