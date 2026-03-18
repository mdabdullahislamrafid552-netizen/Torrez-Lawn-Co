import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RequestService() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceNeeded: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '', phone: '', email: '', address: '', serviceNeeded: '', message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

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
            <h2 className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">Free Estimate</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-8 text-balance">
              Request a <span className="text-primary italic">Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below to schedule an assessment of your property. We will be in touch shortly to discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-ink/5 overflow-hidden">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-16 md:p-24"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-serif text-ink mb-4">Request Received</h3>
                <p className="text-ink/70 text-lg">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={handleSubmit} 
                className="p-10 md:p-16 space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
                      placeholder="(985) 555-0123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Service Needed *</label>
                    <select
                      name="serviceNeeded"
                      required
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer text-lg"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Lawn Maintenance">Lawn Maintenance</option>
                      <option value="Mulch Installation">Mulch Installation</option>
                      <option value="Pine Straw Installation">Pine Straw Installation</option>
                      <option value="Garden Maintenance">Garden Maintenance</option>
                      <option value="Tree Trimming">Tree Trimming</option>
                      <option value="Other">Other / Multiple</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Property Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
                    placeholder="123 Main St, Hammond, LA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink mb-3 tracking-wide uppercase">Additional Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-ink/10 rounded-xl px-5 py-4 text-ink focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y text-lg"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary text-white font-bold py-5 px-10 rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center disabled:opacity-70 text-lg shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'} 
                    {!isSubmitting && <ArrowRight className="ml-3 w-6 h-6" />}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
