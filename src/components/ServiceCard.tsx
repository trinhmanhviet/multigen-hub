import React from 'react';
import { ChevronRight, Play, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSelected,
  onSelect,
}) => {
  const handleOpenTool = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(service.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelect(service.id)}
      className={`rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 group cursor-pointer relative ${
        isSelected
          ? 'bg-white ring-2 ring-zinc-900 border-transparent shadow-lg -translate-y-1'
          : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <div>
        {/* Card Thumbnail Image */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-gray-100 border border-gray-100">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Optional Play Button for Video Clipper */}
          {service.hasPlayButton && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-9 h-9 rounded-full bg-black/60 border border-white/25 flex items-center justify-center text-white backdrop-blur-xs group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
            </div>
          )}

          {/* Active selection badge */}
          {isSelected && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-zinc-900/90 text-[10px] text-white font-medium backdrop-blur-xs shadow-xs">
              Đang chọn
            </div>
          )}
        </div>

        {/* Title + Chevron */}
        <div className="flex items-center justify-between gap-1 mb-1">
          <h3 className="font-bold text-sm text-zinc-900 group-hover:text-zinc-700 transition-colors">
            {service.name}
          </h3>
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-200 ${
              isSelected
                ? 'text-zinc-900 translate-x-0.5'
                : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5'
            }`}
          />
        </div>

        {/* Short Description */}
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mt-1">
          {service.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Status + Button 'Mở công cụ' */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-1.5 text-[11px] text-gray-500 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>{service.statusText || 'Sẵn sàng'}</span>
        </div>

        <button
          onClick={handleOpenTool}
          className="bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white text-xs px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 font-medium transition-all shadow-2xs"
          title={`Mở ${service.name}`}
        >
          <span>Mở công cụ</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
