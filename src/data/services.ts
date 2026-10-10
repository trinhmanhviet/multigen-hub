export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: 'AI Generation' | 'Video Tools' | 'Game & Graphics' | 'GPU Workflows';
  tags: string[];
  hostPlatform: string;
  iconName: 'Sparkles' | 'Video' | 'Gamepad2' | 'Palette' | 'Cpu';
  accentColor: string; // tailwind color class
  badge?: string;
  healthEndpoint?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'multigen-main',
    name: 'MultiGen AI Studio',
    tagline: 'Multi-Workflow AI Image & Video Generator',
    description: 'Nền tảng sinh ảnh & video AI cao cấp hỗ trợ đa mô hình (Flux, AnyPose Klein, Qwen Edit, Video Cloning, LTX, SDXL). Tích hợp chế độ Local ComfyUI và Cloud API.',
    url: 'https://multigen.store',
    category: 'AI Generation',
    tags: ['Flux 2', 'AnyPose Klein', 'Video Clone', 'Face Swap', 'Upscale'],
    hostPlatform: 'Vercel + Comfy Backend',
    iconName: 'Sparkles',
    accentColor: 'from-purple-500 to-indigo-600',
    badge: 'Flagship App',
  },
  {
    id: 'video-clipper',
    name: 'Video Clipper Studio',
    tagline: 'Trim Videos & Extract Frame Sequences',
    description: 'Công cụ cắt ghép video từ YouTube URL hoặc file tải lên, trích xuất khung ảnh độ phân giải cao phục vụ huấn luyện LoRA và làm video clip ngắn.',
    url: 'https://video.multigen.store',
    category: 'Video Tools',
    tags: ['YouTube Trim', 'Frame Extractor', 'HQ Export', 'Docker Web'],
    hostPlatform: 'Render Cloud (Singapore)',
    iconName: 'Video',
    accentColor: 'from-rose-500 to-pink-600',
    badge: 'New Integration',
  },
  {
    id: 'pixel-tools',
    name: 'Pixel & Sprite Tools',
    tagline: 'Pixel Art Editor & Sprite Sheet Generator',
    description: 'Bộ công cụ đồ họa retro & sprite sheet cho game dev: trích xuất hoạt ảnh, tạo GIF animation, chuyển đổi bảng màu tự động và xuất texture atlas.',
    url: 'https://pixel.multigen.store',
    category: 'Game & Graphics',
    tags: ['Sprite Sheet', 'Palette Swap', 'GIF Animator', 'Game Assets'],
    hostPlatform: 'Vercel Cloud',
    iconName: 'Gamepad2',
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    tagline: 'Prompt Gallery & AI Creative Workspace',
    description: 'Không gian sáng tạo trực quan với kho thư viện câu lệnh AI chất lượng cao, công cụ thiết kế ý tưởng và trình tạo tác phẩm kỹ thuật số.',
    url: 'https://studio.multigen.store',
    category: 'AI Generation',
    tags: ['Prompt Gallery', 'Visual Canvas', 'Design Studio'],
    hostPlatform: 'Vercel Cloud',
    iconName: 'Palette',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'comfy-gateway',
    name: 'ComfyUI GPU Gateway',
    tagline: 'Direct Node Graph Workflow Control',
    description: 'Cổng truy cập trực tiếp giao diện ComfyUI node-based chạy trên máy trạm GPU cá nhân, được mã hóa an toàn qua Cloudflare Argo Tunnel.',
    url: 'https://comfy.multigen.store',
    category: 'GPU Workflows',
    tags: ['ComfyUI Graph', 'Local GPU', 'Argo Tunnel', 'Custom Nodes'],
    hostPlatform: 'Cloudflare Tunnel',
    iconName: 'Cpu',
    accentColor: 'from-cyan-500 to-blue-600',
    badge: 'Hardware Gateway',
  },
];

export const CATEGORIES = ['All', 'AI Generation', 'Video Tools', 'Game & Graphics', 'GPU Workflows'] as const;
