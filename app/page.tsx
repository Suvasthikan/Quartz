import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { 
  Cloud, 
  Database, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Quartz Cloud",
      description: "A resilient, scalable cloud infrastructure designed for high-availability workloads and global distribution.",
      icon: Cloud,
      features: ["Auto-scaling architecture", "Integrated global CDN", "Zero-downtime migrations"],
    },
    {
      title: "Data Engine",
      description: "Proprietary database technology that handles millions of transactions per second with sub-millisecond latency.",
      icon: Database,
      features: ["Full ACID compliance", "Real-time replication", "Advanced data encryption"],
    },
    {
      title: "Insight Analytics",
      description: "Deep-learning driven analytics platform providing actionable business intelligence in real-time.",
      icon: BarChart3,
      features: ["Predictive modeling", "Interactive dashboards", "Anomaly detection"],
    },
  ];


  const testimonials = [
    {
      quote: "Quartz revolutionized our data handling workflows. Their infrastructure is unmatched in speed and reliability.",
      author: "Sarah J. Peterson",
      role: "CTO, Vanguard Global",
    },
    {
      quote: "The level of engineering excellence at Quartz is evident in every service they provide. A true partner in innovation.",
      author: "Marcus Chen",
      role: "VP of Engineering, Helix Core",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />


      {/* Products Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">
              Our Solutions
            </h2>
            <p className="text-4xl font-bold text-zinc-900 mb-6">
              Precision Engineered Technology.
            </p>
            <p className="text-lg text-zinc-600">
              Explore our core offerings and discover how Quartz technology 
              can transform your business infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-zinc-900 border-b-2 border-zinc-200 pb-1 font-bold hover:border-zinc-900 transition-colors"
            >
              View all products and services
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">
                Driving Digital Transformation <br />
                at Global Scale.
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Founded on the principles of mechanical precision and electronic agility, 
                Quartz has grown from a specialized infrastructure provider into a 
                multi-disciplinary technology powerhouse. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-100 p-2 rounded-lg mt-1">
                    <Globe className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Global Presence</h4>
                    <p className="text-zinc-500 text-sm">Serving clients across 45 countries with localized nodes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-100 p-2 rounded-lg mt-1">
                    <ShieldCheck className="h-5 w-5 text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Compliance Ready</h4>
                    <p className="text-zinc-500 text-sm">Fully audited systems meeting ISO and SOC2 standards.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link 
                  href="/about" 
                  className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all inline-block"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-transparent"></div>
                {/* Decorative UI elements */}
                <div className="absolute top-8 left-8 right-8 bg-white/80 backdrop-blur shadow-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-2 w-32 bg-zinc-100 rounded"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-4 w-full bg-zinc-100 rounded"></div>
                    <div className="h-4 w-5/6 bg-zinc-100 rounded"></div>
                    <div className="h-4 w-2/3 bg-zinc-100 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-12 -right-12 bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl max-w-[280px]">
                  <Users className="h-8 w-8 mb-4 text-zinc-400" />
                  <p className="text-xl font-bold mb-2">Dedicated Experts</p>
                  <p className="text-sm text-zinc-400">Our team consists of industry veterans and forward-thinking engineers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-16">
            Trusted by Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm relative quote-card">
                <p className="text-xl text-zinc-700 italic leading-relaxed mb-8 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-900 italic">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{t.author}</h4>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-50 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-zinc-900 mb-8 tracking-tight">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
            Join the hundreds of enterprises that rely on Quartz for their 
            critical digital infrastructure. Let&apos;s discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all text-lg shadow-xl"
            >
              Contact Our Sales Team
            </Link>
            <Link 
              href="/products" 
              className="bg-white text-zinc-900 border border-zinc-200 px-10 py-5 rounded-2xl font-bold hover:bg-zinc-50 transition-all text-lg shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
