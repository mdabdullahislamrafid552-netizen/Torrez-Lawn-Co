import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
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
            <h2 className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">About Us</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-8 text-balance">
              Dedicated to <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              Torrez Lawn Care Services is a locally owned and operated landscaping company providing top-tier maintenance to Hammond and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Content */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] relative group"
            >
              <img 
                src="https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/484508012_1215724673886907_4083255862637308941_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MzA4NzY2ODIxMDc0NTE2OTA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E2kGhnfHYeMQ7kNvwEjDjEN&_nc_oc=Adl0RjgmDXvgyVPs6gTdfWX-JK7Tp9xhVNrEfF0ru8Oi75PhUxLm4-yRdyrzPbnbfdg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfytcLYIngwVvfX7tPvpc_FlJwnCl3t6b_BBQw0AH4qUCw&oe=69BD15DC" 
                alt="Torrez Lawn Care Team" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-ink mb-8">Our Story</h3>
              <p className="text-lg text-ink/70 mb-6 leading-relaxed">
                We believe that a beautiful lawn is the foundation of a welcoming home. What started as a passion for the outdoors has grown into a full-service landscaping company trusted by homeowners and businesses alike.
              </p>
              <p className="text-lg text-ink/70 mb-12 leading-relaxed">
                We treat every property as if it were our own, ensuring meticulous attention to detail and unparalleled customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-ink mb-10">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: 'Local Expertise', desc: 'Deep understanding of Louisiana climate.' },
                  { title: 'Reliability', desc: 'On-time, consistent service.' },
                  { title: 'Quality', desc: 'Professional-grade equipment and techniques.' },
                  { title: 'Integrity', desc: 'Honest pricing and clear communication.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink/5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary mb-6" />
                    <h4 className="font-serif text-xl text-ink mb-3">{item.title}</h4>
                    <p className="text-base text-ink/70 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
