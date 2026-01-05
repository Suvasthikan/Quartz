import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href?: string;
}

const ProductCard = ({ title, description, icon: Icon, features, href = "/products" }: ProductCardProps) => {
  return (
    <div className="group bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 flex flex-col h-full">
      <div className="bg-zinc-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-zinc-900 transition-colors duration-300">
        <Icon className="h-8 w-8 text-zinc-900 group-hover:text-white transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-bold text-zinc-900 mb-4">{title}</h3>
      
      <p className="text-zinc-500 mb-8 leading-relaxed flex-grow">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
            <div className="h-1 w-1 bg-zinc-900 rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:gap-3 transition-all"
      >
        Learn more
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
};

export default ProductCard;
