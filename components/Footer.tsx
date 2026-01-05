import Link from "next/link";
import { Cpu, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-zinc-900 p-1.5 rounded-lg group-hover:bg-zinc-700 transition-colors">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
                Quartz
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Quartz is at the forefront of technological innovation, providing enterprise-grade 
              solutions for the modern digital era. Our mission is to empower businesses with 
              scalable, efficient, and forward-thinking technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-zinc-400 mt-0.5" />
                <span className="text-zinc-500 text-sm">
                  123 Tech Avenue, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-zinc-400" />
                <span className="text-zinc-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400" />
                <span className="text-zinc-500 text-sm">contact@quartz-tech.io</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-center text-zinc-400 text-xs">
            &copy; {currentYear} Quartz Technology Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
