import Link from "next/link";
import { ArrowRight, ChevronRight, Monitor, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-zinc-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-zinc-900 animate-pulse"></span>
            <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
              Innovation in focus
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Engineering the <span className="text-zinc-500 italic font-medium">Future</span> of Enterprise.
          </h1>
          
          <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
            Quartz delivers high-performance technology infrastructure and 
            digital solutions that power the world&apos;s most ambitious companies. 
            Scale faster, secure everything, and innovate without limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-bold hover:bg-zinc-50 transition-all"
            >
              Our Vision
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-zinc-100">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-100 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-zinc-900" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">High Velocity</p>
                <p className="text-xs text-zinc-500">Accelerated deployment</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-zinc-100 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-zinc-900" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Secure Core</p>
                <p className="text-xs text-zinc-500">Enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-zinc-100 p-2 rounded-lg">
                <Monitor className="h-5 w-5 text-zinc-900" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Unified UI</p>
                <p className="text-xs text-zinc-500">Seamless integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
