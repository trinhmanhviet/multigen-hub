import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'Trang chủ' }) => {
  return (
    <header className="w-full bg-white/95 border-b border-gray-200/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center font-bold text-sm text-white shadow-xs select-none">
            M
          </div>
          <span className="font-bold text-sm sm:text-base text-zinc-900 tracking-tight">
            MultiGen Workbench
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className={`text-sm font-medium transition-colors relative py-1 ${
              activeTab === 'Trang chủ'
                ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900'
                : 'text-gray-500 hover:text-zinc-900'
            }`}
          >
            Trang chủ
          </a>
          <a
            href="#tools"
            className="text-sm font-medium text-gray-500 hover:text-zinc-900 transition-colors py-1"
          >
            Công cụ
          </a>
          <a
            href="#workflow"
            className="text-sm font-medium text-gray-500 hover:text-zinc-900 transition-colors py-1"
          >
            Hướng dẫn
          </a>
          <a
            href="https://github.com/trinhmanhviet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-zinc-900 transition-colors py-1"
          >
            Tài nguyên
          </a>
        </nav>

        {/* Right: Status Pill & Profile */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Status Pill */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100/90 border border-gray-200/80 text-xs text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-medium">RTX 3090 Ti Online</span>
          </div>

          {/* User Profile */}
          <a
            href="https://github.com/trinhmanhviet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-zinc-700 hover:text-zinc-900 transition-colors py-1 pl-1"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center select-none shadow-2xs">
              T
            </div>
            <span className="text-xs font-medium hidden sm:inline">Trịnh Mạnh Việt</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
          </a>
        </div>
      </div>
    </header>
  );
};
