import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-white/[0.06] bg-[#0c0e12]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-sm text-white shadow-sm select-none">
            M
          </div>
          <span className="font-semibold text-sm sm:text-base text-white tracking-tight">
            MultiGen Workbench
          </span>
        </div>

        {/* Right: Live Hardware Status & User Profile */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* RTX 3090 Ti Live Pill */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/[0.08] text-xs text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-medium">RTX 3090 Ti Live</span>
          </div>

          {/* User Profile */}
          <a
            href="https://github.com/trinhmanhviet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            title="Trịnh Mạnh Việt"
          >
            <span className="text-xs font-medium hidden sm:inline">Trịnh Mạnh Việt</span>
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 text-white text-xs font-semibold flex items-center justify-center select-none">
              T
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
