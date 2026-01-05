import { 
  History, 
  Target, 
  Users, 
  Globe, 
  Rocket,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Resilience",
      description: "We build systems that withstand the most demanding environments and evolving threats.",
      icon: ShieldCheck,
    },
    {
      title: "Agility",
      description: "Our engineering culture prioritizes rapid iteration without compromising on stability.",
      icon: Zap,
    },
    {
      title: "Precision",
      description: "Every line of code and every infrastructure node is optimized for peak performance.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "We aren't just following trends; we are defining the future of enterprise technology.",
      icon: Rocket,
    },
  ];

  const milestones = [
    { year: "2012", event: "Quartz founded in a small lab in Silicon Valley with a focus on high-frequency trading infrastructure." },
    { year: "2015", event: "Expanded into cloud computing, launching Quartz Cloud for global enterprises." },
    { year: "2018", event: "Reached the milestone of powering 100+ Fortune 500 companies." },
    { year: "2021", event: "Open-sourced our core data engine, becoming a standard for high-performance databases." },
    { year: "2024", event: "Pioneered integrated AI-ready architecture for edge computing." },
  ];

  const team = [
    { name: "Dr. Elena Vance", role: "Chief Executive Officer", bio: "Former Infrastructure Lead at Global Systems, PhD in Quantum Computing." },
    { name: "Marcus Thorne", role: "Chief Technology Officer", bio: "Renowned software architect and pioneer in decentralized database systems." },
    { name: "Sarah Jenkins", role: "VP of Engineering", bio: "Specialist in high-availability systems with 15 years of industry experience." },
    { name: "David Kim", role: "Head of Product", bio: "Led product strategy for major enterprise platforms before joining Quartz." },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-zinc-50 py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-zinc-900 mb-8 tracking-tight">
              Precision Engineering. <br />
              <span className="text-zinc-500 italic font-medium">Global Impact.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Quartz was born from a simple realization: the tools supporting global 
              commerce were not fast enough, secure enough, or resilient enough. 
              We set out to build the infrastructure that the future demands.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
                <div className="p-12 h-full flex flex-col justify-end">
                  <div className="bg-zinc-900 p-4 rounded-2xl w-fit mb-6">
                    <History className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-4">A Decade of Growth</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    From our first rack of servers to our global fleet of data centers, 
                    Quartz has remained committed to technical excellence and 
                    customer success at every scale.
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-zinc-50 p-6 rounded-2xl shadow-lg border border-zinc-100 hidden md:block">
                <Globe className="h-10 w-10 text-zinc-400" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Our Mission</h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                To provide the foundational technology that enables global enterprises 
                to innovate fearlessly, scale effortlessly, and secure their most 
                critical digital assets.
              </p>
              
              <div className="space-y-12">
                {milestones.map((m, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="p-1 rounded-full bg-zinc-900 border-4 border-white shadow-sm ring-1 ring-zinc-200"></div>
                      {index !== milestones.length - 1 && <div className="w-px h-full bg-zinc-200 my-1"></div>}
                    </div>
                    <div className="pb-4">
                      <span className="text-sm font-bold text-zinc-900 block mb-1">{m.year}</span>
                      <p className="text-zinc-500 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">The Quartz Ethos</h2>
            <p className="text-4xl font-bold">What Drives Our Innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl hover:bg-zinc-800 transition-colors">
                <div className="bg-zinc-900 p-3 rounded-2xl w-fit mb-6 ring-1 ring-zinc-700">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Leadership</h2>
            <p className="text-4xl font-bold text-zinc-900">Voices of Engineering Excellence</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] bg-zinc-100 rounded-3xl mb-6 overflow-hidden relative border border-zinc-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-zinc-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{t.name}</h3>
                <p className="text-sm font-bold text-zinc-500 mb-4">{t.role}</p>
                <p className="text-sm text-zinc-500 leading-relaxed text-balance">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quartz CTA */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Ready to evolve your technical stack?</h2>
          <p className="text-lg text-zinc-600 mb-10">
            Learn why hundreds of leading companies choose Quartz for their most 
            demanding infrastructure needs. Our experts are ready to help you plan 
            your next major leap.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all inline-block"
            >
              Explore Solutions
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-bold hover:bg-zinc-50 transition-all inline-block"
            >
              Speak with an Engineer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

