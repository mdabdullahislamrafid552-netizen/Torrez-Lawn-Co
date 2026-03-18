import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Star, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-paper">
      {/* Hero */}
      <section className="relative px-6 lg:px-8 overflow-hidden min-h-screen flex items-center pt-32 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?cs=srgb&dl=pexels-pixabay-158063.jpg&fm=jpg" 
            alt="Beautifully manicured lawn" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/70" />
          {/* Top gradient to ensure header text is always visible */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full mt-12 md:mt-0">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="max-w-3xl"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white font-medium text-xs tracking-[0.15em] uppercase mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <Star className="w-3.5 h-3.5 mr-2.5 text-primary fill-primary" /> Top Rated in Hammond, LA
            </motion.div>
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] mb-8 text-balance drop-shadow-lg tracking-tight"
            >
              Professional <span className="text-primary italic font-light">Lawn Care</span> & Landscaping
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-lg md:text-xl text-white/90 mb-12 max-w-xl leading-relaxed font-sans drop-shadow-md font-light"
            >
              We provide reliable, detail-oriented yard maintenance and property enhancement for residential and commercial properties.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                to="/request-service" 
                className="inline-flex justify-center items-center px-9 py-4 bg-primary text-white font-medium rounded-full hover:bg-white hover:text-primary transition-all duration-500 shadow-[0_8px_30px_rgba(0,171,103,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
              >
                Get a Free Quote <ArrowRight className="ml-2.5 w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex justify-center items-center px-9 py-4 bg-white/5 backdrop-blur-xl text-white font-medium rounded-full border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1"
              >
                Our Services
              </Link>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="mt-12 flex items-center gap-8 text-sm font-medium text-white/90 drop-shadow-md"
            >
              <div className="flex items-center"><Shield className="w-5 h-5 text-primary mr-2" /> Licensed & Insured</div>
              <div className="flex items-center"><Clock className="w-5 h-5 text-primary mr-2" /> Reliable Service</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 bg-white/10 backdrop-blur-2xl p-7 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 hidden md:block z-10"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="font-serif font-medium text-white text-3xl drop-shadow-md tracking-tight">10+ Years</p>
              <p className="text-xs text-white/80 font-medium uppercase tracking-[0.2em] drop-shadow-md mt-1">Of Excellence</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-32 md:py-40 bg-paper px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-5"
              >
                What We Do
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink text-balance tracking-tight"
              >
                Comprehensive Property Care
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/services" className="hidden md:inline-flex items-center font-medium text-ink hover:text-primary transition-colors border-b border-ink/20 hover:border-primary pb-1 tracking-wide group">
                View All Services <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Lawn Maintenance', desc: 'Regular mowing, edging, and trimming to keep your property pristine.', img: 'https://sunlightwaterandus.com/wp-content/uploads/2023/04/What-Is-the-Best-Time-To-Seed-Lawn-in-NJ-500x383.png' },
              { title: 'Landscaping', desc: 'Custom design, planting, and hardscaping to enhance curb appeal.', img: 'https://mikesbackyardnursery.com/wp-content/uploads/2014/03/rsz_dsc_0034.jpg' },
              { title: 'Pressure Washing', desc: 'Deep cleaning for driveways, walkways, and home exteriors.', img: 'https://www.hotsyab.com/wp-content/uploads/2019/05/Hotsy_Pressure_Washer_PSI_vs_GPM.jpg' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer bg-white p-5 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700 border border-ink/5"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-8 relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700 z-10" />
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-3">
                  <h4 className="text-2xl font-serif text-ink mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-ink/60 mb-8 leading-relaxed font-light">{service.desc}</p>
                  <Link to="/services" className="text-sm font-medium text-ink group-hover:text-primary flex items-center transition-colors tracking-wide">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center font-medium text-ink hover:text-primary transition-colors border-b border-ink/20 hover:border-primary pb-1 tracking-wide group">
              View All Services <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 md:py-40 px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-5">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-8 text-balance tracking-tight">The Torrez Difference</h3>
            <p className="text-lg text-ink/60 mb-14 leading-relaxed font-light">
              We treat every property as if it were our own. Our commitment to quality, reliability, and clear communication sets us apart in the Hammond area.
            </p>
            
            <div className="space-y-10">
              {[
                { title: 'Attention to Detail', desc: 'We never cut corners. Every edge is crisp, every surface is clean.' },
                { title: 'Reliable Scheduling', desc: 'We show up when we say we will, respecting your time and property.' },
                { title: 'Professional Equipment', desc: 'We use commercial-grade tools for a superior, efficient finish.' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start group"
                >
                  <div className="mt-1 bg-paper border border-ink/5 p-3 rounded-full mr-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:scale-110 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-ink mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-ink/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-6 lg:gap-8"
          >
            <div className="space-y-6 lg:space-y-8 mt-16">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-ink/5"
              >
                <img 
                  src="https://assets.savills.com/properties/GBCBRSCKS260004/CKS260004_01_l_lis.jpg" 
                  alt="Property Build" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-1000" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
            <div className="space-y-6 lg:space-y-8">
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-ink/5"
              >
                <img 
                  src="https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Maintenance" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-1000" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 bg-ink text-paper px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-balance tracking-tight">Ready to transform your property?</h2>
          <p className="text-lg md:text-xl text-paper/60 mb-12 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Contact us today for a free, no-obligation estimate and experience the Torrez difference.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link 
              to="/request-service" 
              className="inline-flex justify-center items-center px-10 py-5 bg-primary text-white font-medium rounded-full hover:bg-white hover:text-primary transition-all duration-500 shadow-[0_8px_30px_rgba(0,171,103,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] text-lg tracking-wide"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
