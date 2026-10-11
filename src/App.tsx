import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  Database,
  Cpu,
  Image as ImageIcon,
  Gamepad2,
  ChevronRight,
  Compass,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { QuickStats } from './components/QuickStats';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES, CATEGORIES } from './data/services';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

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
        service.description.toLowerCase().includes(q) ||
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

  return (
    <div className="min-h-screen bg-[#0c0e12] flex flex-col text-slate-100 font-sans selection:bg-white/20 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Hero Section */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center space-x-1.5 text-[11px] font-mono tracking-wider uppercase text-slate-400 font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            <span>CREATIVE TOOLS HUB</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2.5 leading-tight">
            Tất cả công cụ của MultiGen — gọn gàng ở một nơi
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
            Bộ công cụ AI, video, pixel art và sáng tạo nội dung, chạy trên hạ tầng GPU riêng.
            <br />
            Đơn giản, nhanh và tập trung cho công việc thật sự quan trọng.
          </p>
        </div>

        {/* Top 4 Spec Cards */}
        <QuickStats />

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Tìm công cụ, ví dụ: video, pixel, comfyui..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-full bg-zinc-900/90 border border-white/[0.08] text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-white/20 transition-all font-sans"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-200 px-1"
                >
                  Xoá
                </button>
              ) : (
                <span className="w-4 h-4 rounded bg-zinc-800 text-[10px] text-slate-400 border border-white/10 flex items-center justify-center font-mono select-none">
                  /
                </span>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-white text-zinc-950 font-medium shadow-sm'
                      : 'bg-zinc-900/80 hover:bg-zinc-800 text-slate-400 hover:text-slate-200 border border-white/[0.07]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-zinc-200 text-zinc-900 font-semibold'
                        : 'bg-white/[0.06] text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5 Tool Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#13151b] rounded-2xl border border-white/[0.07] mb-8">
            <Compass className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-200 mb-1">
              Không tìm thấy công cụ phù hợp
            </h3>
            <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
              Không có ứng dụng nào khớp với từ khóa "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tất cả');
              }}
              className="px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs text-slate-200 font-medium transition-colors border border-white/[0.08]"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* CREATOR'S WORKFLOW (Bottom Section) */}
        <div className="bg-[#12141a] border border-white/[0.07] rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Header */}
            <div className="max-w-md shrink-0">
              <div className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-semibold mb-1">
                CREATOR'S WORKFLOW
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Từ dữ liệu đến game assets
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Quy trình làm việc đơn giản mà hiệu quả, được mình sử dụng hàng ngày.
              </p>
            </div>

            {/* Right Steps Pipeline */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-3 w-full lg:w-auto">
              {/* Step 1 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 text-[11px] text-slate-400 font-mono flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Dataset</div>
                  <div className="text-[11px] text-slate-400">Chuẩn bị và xử lý dữ liệu</div>
                </div>
              </div>

              {/* Connector 1 */}
              <div className="hidden sm:flex items-center text-slate-600 px-1">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 text-[11px] text-slate-400 font-mono flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Train GPU</div>
                  <div className="text-[11px] text-slate-400">Huấn luyện mô hình</div>
                </div>
              </div>

              {/* Connector 2 */}
              <div className="hidden sm:flex items-center text-slate-600 px-1">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 text-[11px] text-slate-400 font-mono flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Generation</div>
                  <div className="text-[11px] text-slate-400">Tạo hình ảnh / video</div>
                </div>
              </div>

              {/* Connector 3 */}
              <div className="hidden sm:flex items-center text-slate-600 px-1">
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/10 text-[11px] text-slate-400 font-mono flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Game Assets</div>
                  <div className="text-[11px] text-slate-400">Tích hợp vào dự án game</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
