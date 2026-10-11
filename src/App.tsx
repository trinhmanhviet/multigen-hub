import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  ArrowUpRight,
  Copy,
  Check,
  Zap,
  Database,
  Shield,
  ChevronRight,
  Compass,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES, CATEGORIES, ServiceItem } from './data/services';

export const App: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('multigen-main');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Selected tool for dynamic Hero Banner description
  const selectedService: ServiceItem = useMemo(() => {
    return SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  }, [selectedServiceId]);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
        if (searchQuery) setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery]);

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'Tất cả' || service.category === selectedCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        service.name.toLowerCase().includes(q) ||
        service.shortDescription.toLowerCase().includes(q) ||
        service.detailedDescription.toLowerCase().includes(q) ||
        service.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'Tất cả': SERVICES.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'Tất cả') {
        counts[cat] = SERVICES.filter((s) => s.category === cat).length;
      }
    });
    return counts;
  }, []);

  const handleCopySelected = () => {
    navigator.clipboard.writeText(selectedService.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Dynamic Hero Banner (Changes based on selected card) */}
        <div className="relative bg-[#0c0d10] text-white rounded-3xl overflow-hidden border border-zinc-800/80 shadow-xl mb-10 min-h-[300px] flex items-center">
          {/* Right Background Artwork Setup */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none">
            <img
              src="/images/hero-monitor.jpg"
              alt="Creative Workspace"
              className="w-full h-full object-cover object-left"
            />
            {/* Soft dark gradient fade onto the text side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d10] via-[#0c0d10]/40 to-transparent" />
          </div>

          {/* Left Dynamic Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl w-full">
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider uppercase text-zinc-400 font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span>CREATIVE TOOLS HUB • {selectedService.category.toUpperCase()}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight transition-all duration-300">
              {selectedService.name}
            </h1>

            {/* Dynamic Detailed Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 transition-all duration-300 max-w-xl">
              {selectedService.detailedDescription}
            </p>

            {/* 3 Dynamic Features Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7 max-w-2xl">
              {selectedService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 bg-white/[0.05] border border-white/[0.08] rounded-xl p-2.5 backdrop-blur-xs transition-all hover:bg-white/[0.08]"
                >
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                    {feature.icon === 'zap' ? (
                      <Zap className="w-3.5 h-3.5" />
                    ) : feature.icon === 'database' ? (
                      <Database className="w-3.5 h-3.5" />
                    ) : (
                      <Shield className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-white truncate">
                      {feature.title}
                    </div>
                    <div className="text-[10px] text-zinc-400 truncate">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons in Hero Banner */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={selectedService.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center space-x-2 transition-all shadow-md active:scale-95"
              >
                <span>Mở {selectedService.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopySelected}
                className="bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full flex items-center space-x-2 transition-all border border-white/10"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? 'Đã sao chép URL' : 'Sao chép link'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Header: Công cụ nổi bật + Search Input */}
        <div id="tools" className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Công cụ nổi bật
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Chọn công cụ phù hợp với nhu cầu của bạn
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Tìm công cụ, ví dụ: video, pixel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-zinc-800 placeholder-gray-400 focus:outline-none focus:border-zinc-400 shadow-2xs transition-all"
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-gray-400 hover:text-gray-600"
                  >
                    Xoá
                  </button>
                ) : (
                  <span className="w-4 h-4 rounded bg-gray-100 text-[10px] text-gray-400 border border-gray-200 flex items-center justify-center font-mono select-none">
                    /
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-zinc-900 text-white font-medium shadow-xs'
                      : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-zinc-900 border border-gray-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-zinc-800 text-zinc-300'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Tool Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={service.id === selectedServiceId}
                onSelect={(id) => setSelectedServiceId(id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 mb-12">
            <Compass className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-zinc-800 mb-1">
              Không tìm thấy công cụ phù hợp
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Không có ứng dụng nào khớp với từ khóa "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tất cả');
              }}
              className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* CREATOR'S WORKFLOW (Bottom Section) */}
        <div id="workflow" className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Header */}
            <div className="max-w-xs shrink-0">
              <div className="text-[10px] font-mono tracking-wider uppercase text-gray-400 font-semibold mb-1">
                CREATOR'S WORKFLOW
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                Từ ý tưởng đến sản phẩm
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                Quy trình đơn giản, giúp bạn làm việc hiệu quả hơn.
              </p>
            </div>

            {/* Right 4 Steps Pipeline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2 w-full lg:w-auto">
              {/* Step 1 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 text-[11px] text-zinc-700 font-bold font-mono flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">Chuẩn bị tài nguyên</div>
                  <div className="text-[11px] text-gray-400">Ý tưởng, tài liệu, hình ảnh...</div>
                </div>
              </div>

              {/* Connector 1 */}
              <div className="hidden sm:flex items-center text-gray-300 px-2">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 text-[11px] text-zinc-700 font-bold font-mono flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">Sử dụng công cụ</div>
                  <div className="text-[11px] text-gray-400">Chọn công cụ phù hợp</div>
                </div>
              </div>

              {/* Connector 2 */}
              <div className="hidden sm:flex items-center text-gray-300 px-2">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 text-[11px] text-zinc-700 font-bold font-mono flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">Tạo và chỉnh sửa</div>
                  <div className="text-[11px] text-gray-400">Sinh nội dung, xử lý</div>
                </div>
              </div>

              {/* Connector 3 */}
              <div className="hidden sm:flex items-center text-gray-300 px-2">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 text-[11px] text-zinc-700 font-bold font-mono flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900">Xuất và sử dụng</div>
                  <div className="text-[11px] text-gray-400">Tải về và áp dụng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-gray-200 bg-white text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <span className="font-semibold text-zinc-900">MultiGen Workbench</span> — Xây dựng bởi{' '}
            <a
              href="https://github.com/trinhmanhviet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 font-medium hover:underline"
            >
              Trịnh Mạnh Việt
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-gray-400">hub.multigen.store</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
