import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { 
  Cloud, 
  Database, 
  BarChart3, 
  Shield, 
  Cpu, 
  Network, 
  Code2, 
  Smartphone,
  Globe,
  Zap,
  Lock,
  Layers
} from "lucide-react";

export default function ProductsPage() {
  const categories = [
    {
      name: "Infrastructure",
      description: "Foundational technology for the next generation of digital enterprise.",
      items: [
        {
          title: "Quartz Cloud",
          description: "Auto-scalable, multi-region cloud hosting with zero latency. Optimized for heavy computation and massive data loads.",
          icon: Cloud,
          features: ["Global VPC peering", "Auto-scaling groups", "L7 load balancing", "Immutable backups"],
        },
        {
          title: "Data Engine",
          description: "A proprietary, distributed database system capable of handling trillions of rows with millisecond query speeds.",
          icon: Database,
          features: ["Geo-distributed nodes", "Vector search ready", "Real-time sync", "Time-series optimization"],
        },
        {
          title: "Edge Network",
          description: "Deploy logic closer to your users with our global edge computing network, reducing latency to under 10ms.",
          icon: Globe,
          features: ["Edge functions", "Global cache purge", "BGP optimization", "DDoS protection"],
        },
      ],
    },
    {
      name: "Intelligence & Analytics",
      description: "Turn raw data into decisive action with our AI-powered intelligence suite.",
      items: [
        {
          title: "Insight AI",
          description: "Generative and predictive AI models tailored specifically for enterprise domain knowledge and internal data.",
          icon: Cpu,
          features: ["Model fine-tuning", "Privacy-first training", "RAG integration", "API-first access"],
        },
        {
          title: "Quartz Analytics",
          description: "Advanced visualization and data processing platform that integrates with every major data source.",
          icon: BarChart3,
          features: ["Custom dashboards", "Streaming analytics", "Anomaly detection", "Automated reporting"],
        },
        {
          title: "Log Stream",
          description: "Unified logging and monitoring system for observability across your entire infrastructure stack.",
          icon: Network,
          features: ["Real-time tailing", "Pattern recognition", "Structured indexing", "Retention policies"],
        },
      ],
    },
    {
      name: "Security & Operations",
      description: "Protect your assets and streamline your development lifecycle.",
      items: [
        {
          title: "Quartz Shield",
          description: "Comprehensive enterprise security suite specializing in zero-trust architecture and automated threat response.",
          icon: Shield,
          features: ["IAM integration", "WAF automation", "Compliance vault", "Threat hunting AI"],
        },
        {
          title: "DevFlow",
          description: "CI/CD and development platform optimized for microservices and cloud-native applications.",
          icon: Code2,
          features: ["Parallel builds", "Canary deployments", "GitOps native", "Service mesh"],
        },
        {
          title: "Mobile Core",
          description: "Backend-as-a-Service for mobile applications with integrated push notifications and offline sync.",
          icon: Smartphone,
          features: ["Cross-platform SDK", "Offline-first DB", "User auth", "Media optimization"],
        },
      ],
    },
  ];

  const features = [
    { title: "24/7 Support", icon: Zap, description: "Dedicated engineering support available round the clock." },
    { title: "SOC2 Compliant", icon: Lock, description: "Meeting the highest standards of data security and privacy." },
    { title: "API First", icon: Layers, description: "Every product is fully accessible via our robust REST and GraphQL APIs." },
  ];

  return (
    <div className="pt-24 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Our Ecosystem
          </h2>
          <h1 className="text-5xl font-extrabold text-zinc-900 mb-8 tracking-tight">
            Integrated Solutions. <br />
            <span className="text-zinc-500 italic font-medium">Unrivaled Performance.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Quartz provides a comprehensive suite of tools designed to work seamlessly together. 
            Build, scale, and secure your enterprise with precision-engineered artifacts.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {categories.map((category, idx) => (
          <section key={idx}>
            <div className="mb-12 border-l-4 border-zinc-900 pl-8">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4 italic">{category.name}</h2>
              <p className="text-zinc-500 text-lg max-w-2xl">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIdx) => (
                <ProductCard key={itemIdx} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Core Advantages */}
      <section className="mt-40 bg-zinc-900 py-24 text-white rounded-[40px] mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((f, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-800 rounded-3xl mb-8 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                  <f.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 text-center px-4">
        <h2 className="text-4xl font-bold text-zinc-900 mb-8 tracking-tight italic">
          Need a Custom Solution?
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Our engineering team specializes in tailoring our platform to meet unique 
          and challenging requirements for large-scale operations.
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-4">
           <Link 
            href="/contact" 
            className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all text-lg shadow-xl"
          >
            Talk to an Architect
          </Link>
           <Link 
            href="/about" 
            className="bg-white text-zinc-900 border border-zinc-200 px-10 py-5 rounded-2xl font-bold hover:bg-zinc-50 transition-all text-lg shadow-sm"
          >
            Our Methodology
          </Link>
        </div>
      </section>
    </div>
  );
}
