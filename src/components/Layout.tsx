import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isTransparent 
            ? 'bg-gradient-to-b from-ink/80 via-ink/40 to-transparent py-6' 
            : 'bg-white/95 backdrop-blur-lg shadow-sm py-4 border-b border-ink/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="relative z-50 flex items-center group">
            <img 
              src="https://i.imgur.com/x5jBMMf.png" 
              alt="Torrez Logo" 
              className="object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-sm" 
              style={{ width: '140px', height: 'auto', borderWidth: '0px' }} 
              referrerPolicy="no-referrer" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm transition-all duration-300 tracking-wide ${
                  isTransparent 
                    ? 'text-white font-semibold hover:text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' 
                    : 'text-ink/80 font-medium hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/request-service"
              className={`text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md ${
                isTransparent
                  ? 'bg-primary text-white hover:bg-white hover:text-primary shadow-[0_4px_14px_rgba(0,171,103,0.4)]'
                  : 'bg-ink text-white hover:bg-primary'
              }`}
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden relative z-50 p-2 transition-colors ${
              isTransparent ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-ink hover:text-primary'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-32 pb-12 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-3xl font-serif text-ink hover:text-primary transition-colors border-b border-ink/5 py-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/request-service"
                className="mt-8 text-center text-lg font-semibold bg-ink text-white px-6 py-4 rounded-full hover:bg-primary transition-colors shadow-md"
              >
                Get a Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`flex-grow ${isHomePage ? '' : 'pt-[104px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white text-ink pt-24 pb-12 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <img src="https://i.imgur.com/x5jBMMf.png" alt="Torrez Logo" className="w-40 mb-8" referrerPolicy="no-referrer" />
              <p className="text-ink/70 text-sm leading-relaxed mb-8 font-sans">
                Premium lawn care and landscaping services dedicated to elevating the standard of living for residential and commercial properties.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/torrezlawnservices_91" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://web.facebook.com/lawnservicestorrez/?ref=PRODASH_UPSELL_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif mb-8 text-ink">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-ink/70 hover:text-primary transition-colors duration-300 text-sm font-medium">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-8 text-ink">Our Services</h4>
              <ul className="space-y-4">
                {['Lawn Maintenance', 'Landscaping', 'Pressure Washing', 'Property Builds', 'Mulch & Pine Straw'].map(service => (
                  <li key={service} className="text-ink/70 text-sm font-medium">{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif mb-8 text-ink">Contact Us</h4>
              <ul className="space-y-5 text-sm text-ink/70">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-4 shrink-0" />
                  <span className="leading-relaxed">Hammond, LA<br/>Serving a 45-mile radius</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-4 shrink-0" />
                  <a href="tel:9856624350" className="hover:text-primary transition-colors">(985) 662-4350</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-4 shrink-0" />
                  <a href="mailto:torrezlawncareservices@gmail.com" className="hover:text-primary transition-colors break-all">torrezlawncareservices@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ink/50 tracking-wide">
            <p>&copy; {new Date().getFullYear()} Torrez Lawn Care Services. All rights reserved.</p>
            <p className="mt-4 md:mt-0 uppercase tracking-widest">Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
