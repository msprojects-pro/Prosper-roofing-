import { useState } from 'react';
import { Phone, MapPin, CheckCircle2, ShieldCheck, AlertCircle, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_OPTIONS } from '../data/roofingData';
import { QuoteFormData, FormErrors } from '../types';

export default function ContactQuote() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    serviceRequired: 'Leak Repair',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Please provide the property address in Central Texas.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission for polished client UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyAddress: '',
      serviceRequired: 'Leak Repair',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-0.5 bg-[#69ADDE]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#69ADDE]">
              CONTACT & REPAIR QUOTE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Don’t Wait Until It Gets Worse.
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Small roof problems can become bigger problems. Contact Prosper Roofing to discuss your repair needs.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Contact Prosper Roofing */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded-sm p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#69ADDE] block mb-2">
                DIRECT COMMUNICATION
              </span>

              <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight mb-6">
                Contact Prosper Roofing
              </h3>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="border-b border-zinc-200 pb-5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-2xl sm:text-3xl font-extrabold text-zinc-950 hover:text-[#69ADDE] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-zinc-600 block mt-1">
                    Direct line for roof repairs
                  </span>
                </div>

                {/* Service Area & Coverage */}
                <div className="border-b border-zinc-200 pb-5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    Service Area
                  </span>
                  <p className="text-base font-bold text-zinc-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#69ADDE] shrink-0" />
                    {BUSINESS_INFO.serviceArea}
                  </p>
                  <p className="text-sm font-semibold text-zinc-700 mt-1">
                    {BUSINESS_INFO.taglines.coverage}
                  </p>
                </div>

                {/* Owner */}
                <div className="border-b border-zinc-200 pb-5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    Owner & Roof Specialist
                  </span>
                  <p className="text-base font-bold text-zinc-900">
                    {BUSINESS_INFO.owner}
                  </p>
                  <span className="text-xs text-zinc-600 block mt-0.5">
                    Prosper Roofing
                  </span>
                </div>

                {/* Tagline */}
                <div className="pt-1">
                  <p className="text-sm font-extrabold text-zinc-800 tracking-wide uppercase">
                    “{BUSINESS_INFO.taglines.trustPill}”
                  </p>
                </div>
              </div>
            </div>

            {/* Large Blue CTA */}
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 text-base font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-colors text-center shadow-xs"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <span className="text-center block text-xs text-zinc-500 mt-2.5">
                Fast response for active leaks & storm damage
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Quote Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-sm p-7 sm:p-10 shadow-xs">
            {submittedData ? (
              /* Polished Success State */
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-zinc-50 border-2 border-[#69ADDE] text-[#69ADDE] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight mb-2">
                    Quote Request Received
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                    Thank you, <strong className="text-zinc-900">{submittedData.name}</strong>. Moses Caballero and the Prosper Roofing team have received your request regarding <strong className="text-zinc-900">{submittedData.serviceRequired}</strong>.
                  </p>

                  <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-sm text-left text-xs space-y-1.5 mb-6">
                    <p><strong className="text-zinc-900">Phone:</strong> {submittedData.phone}</p>
                    <p><strong className="text-zinc-900">Email:</strong> {submittedData.email}</p>
                    <p><strong className="text-zinc-900">Address:</strong> {submittedData.propertyAddress}</p>
                    {submittedData.message && (
                      <p><strong className="text-zinc-900">Note:</strong> {submittedData.message}</p>
                    )}
                  </div>

                  <div className="p-3 bg-zinc-100/80 rounded-sm text-xs text-zinc-600 mb-6">
                    Need immediate emergency leak assistance? Call directly at{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-zinc-900 underline hover:text-[#69ADDE]">
                      {BUSINESS_INFO.phone}
                    </a>.
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-sm border border-zinc-200 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Quote Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight mb-1">
                    Request A Free Repair Quote
                  </h3>
                  <p className="text-xs text-zinc-600 mb-5">
                    Fill out the details below to request a practical assessment for your Central Texas roof.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Name <span className="text-[#69ADDE]">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. John Miller"
                      className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-sm focus:outline-none focus:bg-white transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#69ADDE]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Phone Number <span className="text-[#69ADDE]">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. 512-555-0199"
                      className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-sm focus:outline-none focus:bg-white transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#69ADDE]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Property Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Email Address <span className="text-[#69ADDE]">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-sm focus:outline-none focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#69ADDE]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quote-address" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Property Address <span className="text-[#69ADDE]">*</span>
                    </label>
                    <input
                      id="quote-address"
                      type="text"
                      value={formData.propertyAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, propertyAddress: e.target.value });
                        if (errors.propertyAddress) setErrors({ ...errors, propertyAddress: undefined });
                      }}
                      placeholder="e.g. 1420 Pecan St, Austin, TX"
                      className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-sm focus:outline-none focus:bg-white transition-colors ${
                        errors.propertyAddress ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#69ADDE]'
                      }`}
                    />
                    {errors.propertyAddress && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.propertyAddress}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="quote-service" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Service Required <span className="text-[#69ADDE]">*</span>
                  </label>
                  <select
                    id="quote-service"
                    value={formData.serviceRequired}
                    onChange={(e) => {
                      setFormData({ ...formData, serviceRequired: e.target.value });
                      if (errors.serviceRequired) setErrors({ ...errors, serviceRequired: undefined });
                    }}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:border-[#69ADDE] focus:bg-white transition-colors text-zinc-900"
                  >
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="quote-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Message / Problem Description
                  </label>
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe where the leak or damage is located..."
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:border-[#69ADDE] focus:bg-white transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    id="submit-quote-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-base font-bold text-white bg-[#69ADDE] hover:bg-[#589dce] active:bg-[#4b8ec0] rounded-sm transition-colors text-center shadow-xs flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <span>Request A Free Quote</span>
                    )}
                  </button>
                  <p className="text-[11px] text-zinc-600 text-center mt-2">
                    Direct local service across Central Texas • No obligation consultation
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
