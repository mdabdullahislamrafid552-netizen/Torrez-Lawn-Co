import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      location: 'Hammond, LA',
      text: 'Torrez Lawn Care completely transformed our front yard. They were professional, on time, and the pine straw installation looks incredible. Highly recommend their services!'
    },
    {
      name: 'Michael Broussard',
      location: 'Ponchatoula, LA',
      text: 'I\'ve been using them for regular lawn maintenance for over a year now. My grass has never looked greener or healthier. They are reliable and always do a thorough job.'
    },
    {
      name: 'Emily Chen',
      location: 'Covington, LA',
      text: 'We hired them for a major garden cleanup and mulch installation before hosting a family event. They worked quickly and the results were stunning. Great attention to detail.'
    },
    {
      name: 'David Thompson',
      location: 'Mandeville, LA',
      text: 'Very impressed with their tree trimming service. They safely removed some large overhanging branches and cleaned up every bit of debris before leaving. True professionals.'
    },
    {
      name: 'Jessica Landry',
      location: 'Madisonville, LA',
      text: 'Finding a dependable lawn care service was tough until we found Torrez. Their communication is excellent, pricing is fair, and the quality of work is top-notch.'
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
            <h2 className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">Client Feedback</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-8 text-balance">
              Our <span className="text-primary italic">Testimonials</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              Hear from the homeowners and businesses who trust us to maintain and elevate their outdoor spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-10 md:p-16 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 border border-ink/5 relative"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-primary/5" />
              <p className="text-2xl md:text-3xl font-serif text-ink/80 leading-relaxed mb-10 relative z-10 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-serif italic text-xl mr-5">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink">{testimonial.name}</h4>
                  <p className="text-sm text-ink/60 tracking-wide uppercase mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
