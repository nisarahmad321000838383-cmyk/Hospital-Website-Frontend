import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionWrapper from '../SectionWrapper';

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Section Header - Modern & Clean */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          {t.contact.heading}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.contact.subheading}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Contact Form - Left Side */}
        <div className="relative">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.form.name.label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none`}
                placeholder={t.contact.form.name.placeholder}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email & Phone Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.email.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none`}
                  placeholder={t.contact.form.email.placeholder}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠️</span> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contact.form.phone.label}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  placeholder={t.contact.form.phone.placeholder}
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.form.subject.label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.subject ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none`}
                placeholder={t.contact.form.subject.placeholder}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.subject}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.contact.form.message.label} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none`}
                placeholder={t.contact.form.message.placeholder}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#bfdbfe] hover:bg-[#93c5fd] text-gray-800 font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.contact.form.submitting}
                </>
              ) : (
                <>
                  <span>{t.contact.form.submitButton}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information - Right Side */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t.contact.info.title}
            </h3>

            {/* Info Items */}
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t.contact.info.addressLabel}</p>
                  <p className="text-gray-600">{t.contact.info.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t.contact.info.phoneLabel}</p>
                  <p className="text-gray-600 font-mono">{t.contact.info.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t.contact.info.emailLabel}</p>
                  <p className="text-gray-600">{t.contact.info.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t.contact.info.hours}</p>
                  <p className="text-green-600 font-semibold">{t.contact.info.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Message Box */}
          <div className="bg-[#bfdbfe] p-6 rounded-2xl shadow-lg">
            <p className="text-sm leading-relaxed text-gray-800">
              {t.contact.supportMessage}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
