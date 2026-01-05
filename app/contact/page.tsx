"use client";

import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Globe,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user type
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfos = [
    {
      title: "HQ Office",
      detail: "123 Tech Avenue, Suite 500, San Francisco, CA 94107",
      icon: MapPin,
    },
    {
      title: "Business Hours",
      detail: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      icon: Clock,
    },
    {
      title: "Global Support",
      detail: "+1 (555) 123-4567",
      icon: Phone,
    },
    {
      title: "Expertise Center",
      detail: "expert@quartz-tech.io",
      icon: Mail,
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-zinc-50 py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">
              Connect with <span className="text-zinc-500 italic">Quartz</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Whether you are looking to scale your infrastructure or need expert consultation, 
              our team of engineers and architects is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-12">Contact Information</h2>
              <div className="space-y-12">
                {contactInfos.map((info, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="bg-zinc-100 p-4 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-widest text-sm">
                        {info.title}
                      </h4>
                      <p className="text-zinc-500 font-medium leading-relaxed">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-8 bg-zinc-900 text-white rounded-[32px] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Enterprise Inquiries</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Seeking a partnership or structured enterprise agreement? 
                    Our executive team handles strategic accounts with dedicated resources.
                  </p>
                  <a href="mailto:partners@quartz-tech.io" className="inline-flex items-center gap-2 font-bold hover:text-white transition-colors">
                    Email our partners department
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-50 border border-zinc-100 rounded-[40px] p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-zinc-900 p-2 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">Send a Message</h3>
              </div>

              {status === "success" ? (
                <div className="bg-white border border-green-100 p-10 rounded-3xl text-center shadow-sm">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-8">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4 uppercase tracking-widest">Message Received</h4>
                  <p className="text-zinc-600 mb-8">
                    Thank you. A Quartz engineering specialist will review your request 
                    and get back to you within 12 business hours.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-zinc-900 font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-900 mb-2 uppercase tracking-widest italic">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-zinc-200"} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all`}
                    />
                    {errors.name && <p className="mt-2 text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-900 mb-2 uppercase tracking-widest italic">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-zinc-200"} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all`}
                    />
                    {errors.email && <p className="mt-2 text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-zinc-900 mb-2 uppercase tracking-widest italic">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help your business thrive?"
                      className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-zinc-200"} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="mt-2 text-red-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full bg-zinc-900 text-white rounded-2xl py-5 font-bold transition-all shadow-lg flex items-center justify-center gap-3 ${status === "loading" ? "opacity-70 cursor-not-allowed" : "hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"}`}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Initializing Secure Uplink...
                      </span>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-zinc-400 text-xs font-medium">
                    By submitting this form, you agree to our privacy policy and data retention guidelines.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
