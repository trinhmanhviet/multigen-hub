export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'AI & Hình ảnh' | 'Video' | 'Pixel Art' | 'Trạm GPU';
  tags: string[];
  image: string;
  hasPlayButton?: boolean;
  statusText?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'multigen-main',
    name: 'MultiGen AI Studio',
    description: 'Tạo hình ảnh với các mô hình AI mạnh mẽ, tối ưu cho sáng tạo.',
    url: 'https://multigen.store',
    category: 'AI & Hình ảnh',
    tags: ['AI', 'Image Generation', 'SDXL'],
    image: '/images/card-multigen.png',
    statusText: 'Online',
  },
  {
    id: 'video-clipper',
    name: 'Video Clipper Studio',
    description: 'Cắt, xử lý và tối ưu video nhanh chóng, trực tiếp trên trình duyệt.',
    url: 'https://video.multigen.store',
    category: 'Video',
    tags: ['Video', 'Editing', 'Tools'],
    image: '/images/card-video.png',
    hasPlayButton: true,
    statusText: 'Online',
  },
  {
    id: 'pixel-tools',
    name: 'Pixel & Sprite Tools',
    description: 'Tạo và chỉnh sửa pixel art, sprite cho game một cách đơn giản.',
    url: 'https://pixel.multigen.store',
    category: 'Pixel Art',
    tags: ['Pixel Art', 'Sprite', 'Game Assets'],
    image: '/images/card-pixel.png',
    statusText: 'Online',
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    description: 'Bộ công cụ sáng tạo đa năng hỗ trợ nhiều tác vụ khác nhau.',
    url: 'https://studio.multigen.store',
    category: 'AI & Hình ảnh',
    tags: ['Design', 'Tools', 'Productivity'],
    image: '/images/card-studio.png',
    statusText: 'Online',
  },
  {
    id: 'comfy-gateway',
    name: 'ComfyUI Gateway',
    description: 'Truy cập ComfyUI với hiệu năng GPU cao, sẵn sàng cho workflows.',
    url: 'https://comfy.multigen.store',
    category: 'Trạm GPU',
    tags: ['ComfyUI', 'Workflow', 'GPU'],
    image: '/images/card-comfy.png',
    statusText: 'Online',
  },
];

export const CATEGORIES = [
  'Tất cả',
  'AI & Hình ảnh',
  'Video',
  'Pixel Art',
  'Trạm GPU',
] as const;
