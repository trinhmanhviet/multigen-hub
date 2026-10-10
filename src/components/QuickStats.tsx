import React from 'react';
import { Cpu, Globe2, ShieldCheck, Zap } from 'lucide-react';

export const QuickStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
      <div className="glass-panel rounded-xl p-4 flex items-center space-x-3 border border-slate-800">
        <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xl font-bold text-white tracking-tight">5</div>
          <div className="text-xs text-slate-400">Dịch Vụ Sáng Tạo</div>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-4 flex items-center space-x-3 border border-slate-800">
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
          <Globe2 className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xl font-bold text-white tracking-tight">multigen.store</div>
          <div className="text-xs text-slate-400">Tên Miền Gốc</div>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-4 flex items-center space-x-3 border border-slate-800">
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xl font-bold text-emerald-400 tracking-tight">100%</div>
          <div className="text-xs text-slate-400">Cloudflare SSL/DDoS</div>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-4 flex items-center space-x-3 border border-slate-800">
        <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xl font-bold text-white tracking-tight">RTX 3090 Ti</div>
          <div className="text-xs text-slate-400">GPU Compute Node</div>
        </div>
      </div>
    </div>
  );
};
