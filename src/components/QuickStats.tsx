import React from 'react';
import { Cpu, LayoutGrid, Globe, User } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
      {/* Spec 1: GPU Node */}
      <div className="bg-[#13151b] border border-white/[0.07] rounded-xl p-3.5 sm:p-4 flex items-center space-x-3.5 hover:border-white/[0.12] transition-colors">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm text-white">RTX 3090 Ti 24GB</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-medium inline-flex items-center space-x-1 shrink-0">
              <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
              <span>Live</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5 truncate">
            GPU node đang hoạt động
          </p>
        </div>
      </div>

      {/* Spec 2: Total Tools */}
      <div className="bg-[#13151b] border border-white/[0.07] rounded-xl p-3.5 sm:p-4 flex items-center space-x-3.5 hover:border-white/[0.12] transition-colors">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
          <LayoutGrid className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="font-semibold text-sm text-white">5</span>
          <p className="text-xs text-slate-400 mt-0.5 truncate">
            Công cụ đang sẵn sàng
          </p>
        </div>
      </div>

      {/* Spec 3: Cloudflare Argo */}
      <div className="bg-[#13151b] border border-white/[0.07] rounded-xl p-3.5 sm:p-4 flex items-center space-x-3.5 hover:border-white/[0.12] transition-colors">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
          <Globe className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm text-white">Cloudflare Argo</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-medium inline-flex items-center space-x-1 shrink-0">
              <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
              <span>Active</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5 truncate">
            Kết nối nhanh, ổn định
          </p>
        </div>
      </div>

      {/* Spec 4: Creator */}
      <div className="bg-[#13151b] border border-white/[0.07] rounded-xl p-3.5 sm:p-4 flex items-center space-x-3.5 hover:border-white/[0.12] transition-colors">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center shrink-0 text-slate-300">
          <User className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="font-semibold text-sm text-white">Creator Focused</span>
          <p className="text-xs text-slate-400 mt-0.5 truncate">
            Xây dựng bởi Manh Viet
          </p>
        </div>
      </div>
    </div>
  );
};
