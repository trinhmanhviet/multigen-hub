import React, { useState } from 'react';
import { ChevronRight, Play, Copy, Check } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(service.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#13151b] border border-white/[0.07] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between hover:border-white/[0.18] hover:bg-[#161822] transition-all group cursor-pointer text-left block"
    >
      <div>
        {/* Card Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 bg-zinc-950 border border-white/[0.05]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Optional Play Button Overlay (e.g. Video Clipper) */}
          {service.hasPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-black/60 border border-white/25 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </div>
            </div>
          )}
        </div>

        {/* Title + Chevron */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <h3 className="font-semibold text-sm text-white group-hover:text-amber-200 transition-colors">
            {service.name}
          </h3>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 text-slate-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Online status & Quick copy button */}
      <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-white/[0.05]">
        <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Online</span>
        </div>

        <button
          onClick={handleCopy}
          title="Sao chép link"
          className="text-slate-500 hover:text-slate-300 p-1 rounded hover:bg-white/[0.05] transition-colors"
        >
          {copied ? (
            <Check className="w-3 h-3 text-emerald-400" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </div>
    </a>
  );
};
