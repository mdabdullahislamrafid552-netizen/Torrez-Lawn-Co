import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Keep your lawn looking its best year-round with our comprehensive maintenance plans. We handle mowing, edging, and trimming with professional precision.',
      benefits: ['Consistent, manicured appearance', 'Healthier grass growth', 'Weed control and prevention'],
      image: 'https://sunlightwaterandus.com/wp-content/uploads/2023/04/What-Is-the-Best-Time-To-Seed-Lawn-in-NJ-500x383.png'
    },
    {
      title: 'Landscaping',
      description: 'Enhance the beauty of your property with professional landscape design and installation. We create stunning outdoor environments tailored to your vision.',
      benefits: ['Custom design solutions', 'Increased property value', 'Expert plant selection and placement'],
      image: 'https://mikesbackyardnursery.com/wp-content/uploads/2014/03/rsz_dsc_0034.jpg'
    },
    {
      title: 'Pressure Washing',
      description: 'Restore the original beauty of your home\'s exterior, driveways, and walkways. Our professional pressure washing removes years of dirt, grime, and mildew.',
      benefits: ['Instantly improves curb appeal', 'Prevents damage from mold and mildew', 'Safe for various exterior surfaces'],
      image: 'https://www.hotsyab.com/wp-content/uploads/2019/05/Hotsy_Pressure_Washer_PSI_vs_GPM.jpg'
    },
    {
      title: 'Property Builds',
      description: 'From hardscaping to custom outdoor living spaces, we build structures that enhance your property\'s functionality and aesthetic appeal.',
      benefits: ['Durable, high-quality construction', 'Seamless integration with existing landscape', 'Customized to your lifestyle needs'],
      image: 'https://assets.savills.com/properties/GBCBRSCKS260004/CKS260004_01_l_lis.jpg'
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive property maintenance services to ensure every aspect of your home and landscape remains in pristine condition year-round.',
      benefits: ['Preventative care saves money long-term', 'Peace of mind knowing your property is cared for', 'Prompt attention to repair needs'],
      image: 'https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg?semt=ais_hybrid&w=740&q=80'
    }
  ];

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
            <h2 className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">What We Do</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-8 text-balance">
              Our <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive property care tailored to your specific needs. From routine maintenance to complete transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-20 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/3] relative group"
                  >
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary font-serif italic text-xl mb-8 border border-primary/10">
                    0{index + 1}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">{service.title}</h2>
                  <p className="text-lg text-ink/70 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-8 rounded-2xl border border-ink/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                    <h3 className="font-serif text-xl text-ink mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                          className="flex items-start text-ink/70 text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/request-service"
                    className="group inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors text-lg"
                  >
                    Request this service 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-32 bg-ink text-white px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Hammond', 'Ponchatoula', 'Madisonville', 'Covington', 'Mandeville', '45-mile radius'].map((area, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide transition-colors cursor-default backdrop-blur-sm"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
