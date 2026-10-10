import React, { useState } from 'react';
import { Sparkles, Video, Gamepad2, Palette, Cpu, ExternalLink, Copy, Check, Server } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap = {
  Sparkles,
  Video,
  Gamepad2,
  Palette,
  Cpu,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [copied, setCopied] = useState(false);
  const IconComponent = iconMap[service.iconName] || Sparkles;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(service.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.accentColor} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
      />

      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-md shadow-purple-900/20 group-hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-full bg-slate-900/90 rounded-[10px] flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-lg text-slate-100 group-hover:text-white transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-400 truncate max-w-[200px]">
                {service.url.replace('https://', '')}
              </p>
            </div>
          </div>

          {service.badge && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 whitespace-nowrap">
              {service.badge}
            </span>
          )}
        </div>

        {/* Tagline & Description */}
        <div className="mb-4">
          <p className="text-xs font-medium text-purple-400 mb-1.5 uppercase tracking-wider">
            {service.tagline}
          </p>
          <p className="text-sm text-slate-300/90 leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
          <span className="flex items-center space-x-1.5">
            <Server className="w-3.5 h-3.5 text-slate-500" />
            <span>{service.hostPlatform}</span>
          </span>
          <span className="flex items-center space-x-1 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Online</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r ${service.accentColor} text-white font-medium text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-purple-900/20 hover:brightness-110 active:scale-[0.98] transition-all`}
          >
            <span>Mở Dịch Vụ</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopy}
            title="Copy URL"
            className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-700/80 text-slate-400 hover:text-slate-200 border border-slate-700/60 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
