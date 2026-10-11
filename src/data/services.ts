export interface ServiceFeature {
  title: string;
  desc: string;
  icon: 'zap' | 'database' | 'shield';
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  url: string;
  category: 'AI & Hình ảnh' | 'Video' | 'Pixel Art';
  tags: string[];
  image: string;
  hasPlayButton?: boolean;
  statusText?: string;
  features: ServiceFeature[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'multigen-main',
    name: 'MultiGen AI Studio',
    tagline: 'Xưởng Tạo Hình AI Đa Luồng',
    shortDescription: 'Tạo hình ảnh với các mô hình AI mạnh mẽ, tối ưu cho sáng tạo.',
    detailedDescription: 'Tập hợp các công cụ AI, video, 3D, pixel art và nhiều công cụ khác. Đơn giản, nhanh chóng, mạnh mẽ – phục vụ cho công việc sáng tạo hàng ngày.',
    url: 'https://multigen.store',
    category: 'AI & Hình ảnh',
    tags: ['AI', 'Image Generation', 'SDXL'],
    image: '/images/card-multigen.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Chạy trực tiếp trên GPU riêng',
        desc: 'RTX 3090 Ti 24GB',
        icon: 'zap',
      },
      {
        title: 'Không cần cài đặt',
        desc: 'Truy cập ngay trên web',
        icon: 'database',
      },
      {
        title: 'Ổn định & riêng tư',
        desc: 'Dữ liệu không lưu trữ công khai',
        icon: 'shield',
      },
    ],
  },
  {
    id: 'video-clipper',
    name: 'Video Clipper Studio',
    tagline: 'Trích Xuất Frame & Cắt Video',
    shortDescription: 'Cắt, xử lý và tối ưu video nhanh chóng, trực tiếp trên trình duyệt.',
    detailedDescription: 'Công cụ tiện lợi để cắt video YouTube hoặc tải file MP4 lên, bóc tách chuỗi ảnh nét căng (frame sequences) làm tập dataset huấn luyện LoRA và làm tư liệu dựng video ngắn.',
    url: 'https://video.multigen.store',
    category: 'Video',
    tags: ['Video', 'Editing', 'Tools'],
    image: '/images/card-video.png',
    hasPlayButton: true,
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Bóc tách Frame chuẩn LoRA',
        desc: 'Xuất dataset ZIP chất lượng cao',
        icon: 'zap',
      },
      {
        title: 'Tải trực tiếp từ YouTube',
        desc: 'Xử lý video MP4 trên web',
        icon: 'database',
      },
      {
        title: 'Tốc độ render nhanh',
        desc: 'Docker Cloud Singapore',
        icon: 'shield',
      },
    ],
  },
  {
    id: 'pixel-tools',
    name: 'Pixel & Sprite Tools',
    tagline: 'Bộ Tiện Ích Game Retro & Pixel Art',
    shortDescription: 'Tạo và chỉnh sửa pixel art, sprite cho game một cách đơn giản.',
    detailedDescription: 'Bộ tiện ích đồ họa retro dành riêng cho làm game: tự động trích xuất animation frame, ghép sprite sheet, đổi bảng màu (palette swap) và xuất texture atlas cho Unity, Godot hay web game.',
    url: 'https://pixel.multigen.store',
    category: 'Pixel Art',
    tags: ['Pixel Art', 'Sprite', 'Game Assets'],
    image: '/images/card-pixel.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Ghép & Tách Sprite Sheet',
        desc: 'Tự động bóc tách frame hoạt ảnh',
        icon: 'zap',
      },
      {
        title: 'Đổi bảng màu Retro tức thì',
        desc: 'Palette swap 8-bit / 16-bit',
        icon: 'database',
      },
      {
        title: 'Xuất Atlas cho Game Engine',
        desc: 'Hỗ trợ Unity, Godot & Phaser',
        icon: 'shield',
      },
    ],
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    tagline: 'Không Gian Phác Thảo & Thư Viện Prompt',
    shortDescription: 'Bộ công cụ sáng tạo đa năng hỗ trợ nhiều tác vụ khác nhau.',
    detailedDescription: 'Không gian sáng tạo trực quan với kho thư viện câu lệnh AI chất lượng cao, công cụ thiết kế ý tưởng (moodboard) và trình phác thảo tác phẩm kỹ thuật số trước khi bắt đầu tạo hình.',
    url: 'https://studio.multigen.store',
    category: 'AI & Hình ảnh',
    tags: ['Design', 'Tools', 'Productivity'],
    image: '/images/card-studio.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Kho Prompt tinh chỉnh sẵn',
        desc: 'Được kiểm nghiệm thực tế',
        icon: 'zap',
      },
      {
        title: 'Canvas Moodboard trực quan',
        desc: 'Phác thảo ý tưởng phong cách',
        icon: 'database',
      },
      {
        title: 'Tối ưu luồng sáng tạo',
        desc: 'Lưu trữ & chia sẻ dễ dàng',
        icon: 'shield',
      },
    ],
  },
];

export const CATEGORIES = [
  'Tất cả',
  'AI & Hình ảnh',
  'Video',
  'Pixel Art',
] as const;
