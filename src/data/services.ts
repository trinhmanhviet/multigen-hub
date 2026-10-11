export interface ServiceFeature {
  title: string;
  desc: string;
  icon: 'zap' | 'database' | 'shield';
}

export interface ServiceWorkflowStep {
  step: number;
  title: string;
  desc: string;
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
  workflowSteps: ServiceWorkflowStep[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'multigen-main',
    name: 'MultiGen AI Studio',
    tagline: 'Xưởng Tạo Hình AI Đa Luồng',
    shortDescription: 'Tạo hình ảnh với các mô hình AI mạnh mẽ, tối ưu cho sáng tạo.',
    detailedDescription: 'Xưởng tạo hình chính phục vụ công việc hàng ngày: kết hợp Flux 2, AnyPose Klein, Face Swap và Video Cloning. Hỗ trợ tạo concept art, video clip, pose matching và upscale độ phân giải cao trực tiếp trên trạm GPU RTX 3090 Ti.',
    url: 'https://multigen.store',
    category: 'AI & Hình ảnh',
    tags: ['Flux 2', 'AnyPose Klein', 'Video Clone', 'Face Swap', 'SDXL'],
    image: '/images/card-multigen.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Chạy trực tiếp trên GPU riêng',
        desc: 'RTX 3090 Ti 24GB VRAM',
        icon: 'zap',
      },
      {
        title: 'Đa mô hình AI tiên tiến',
        desc: 'Flux 2, AnyPose, SDXL',
        icon: 'database',
      },
      {
        title: 'Bảo mật & riêng tư',
        desc: 'Dữ liệu không lưu trữ công khai',
        icon: 'shield',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Chuẩn bị ý tưởng', desc: 'Chọn mô hình và phong cách cần tạo' },
      { step: 2, title: 'Nhập câu lệnh', desc: 'Tuỳ chỉnh prompt và tham số' },
      { step: 3, title: 'Sinh ảnh & video', desc: 'Xử lý tốc độ cao trên GPU RTX 3090 Ti' },
      { step: 4, title: 'Xuất kết quả nét cao', desc: 'Tải về ảnh hoặc video chất lượng gốc' },
    ],
  },
  {
    id: 'video-clipper',
    name: 'Video Clipper Studio',
    tagline: 'Trích Xuất Frame & Cắt Video',
    shortDescription: 'Cắt, xử lý và tối ưu video nhanh chóng, trực tiếp trên trình duyệt.',
    detailedDescription: 'Công cụ tiện lợi để cắt video YouTube hoặc tải file MP4 lên, bóc tách chuỗi ảnh nét căng (frame sequences) làm tập dataset huấn luyện LoRA và làm tư liệu dựng video ngắn mượt mà.',
    url: 'https://video.multigen.store',
    category: 'Video',
    tags: ['YouTube Trim', 'Dataset LoRA', 'Frame Extractor', 'HQ Export'],
    image: '/images/card-video.png',
    hasPlayButton: true,
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Bóc tách frame chuẩn LoRA',
        desc: 'Xuất tập dataset ZIP không nén',
        icon: 'zap',
      },
      {
        title: 'Hỗ trợ YouTube & MP4',
        desc: 'Nhập link hoặc kéo thả video trực tiếp',
        icon: 'database',
      },
      {
        title: 'Xử lý đám mây riêng',
        desc: 'Máy chủ Render Cloud Singapore',
        icon: 'shield',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Nạp nguồn video', desc: 'Dán URL YouTube hoặc tải file MP4 lên' },
      { step: 2, title: 'Cắt đoạn cần lấy', desc: 'Chọn khoảng thời gian và FPS trích xuất' },
      { step: 3, title: 'Tách chuỗi khung hình', desc: 'Bóc tách frame độ nét cao tự động' },
      { step: 4, title: 'Tải tập dataset', desc: 'Nhận gói ZIP sẵn sàng để train LoRA' },
    ],
  },
  {
    id: 'pixel-tools',
    name: 'Pixel & Sprite Tools',
    tagline: 'Bộ Tiện Ích Game Retro & Pixel Art',
    shortDescription: 'Tạo và chỉnh sửa pixel art, sprite cho game một cách đơn giản.',
    detailedDescription: 'Bộ tiện ích đồ họa retro dành riêng cho làm game indie: tự động trích xuất animation frame, ghép sprite sheet, đổi bảng màu (palette swap) và xuất texture atlas cho Unity, Godot hay web game.',
    url: 'https://pixel.multigen.store',
    category: 'Pixel Art',
    tags: ['Sprite Sheet', 'Tách Animation', 'Palette Swap', 'Retro Game'],
    image: '/images/card-pixel.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Ghép & Tách Sprite Sheet',
        desc: 'Nhận diện khung hình hoạt ảnh tự động',
        icon: 'zap',
      },
      {
        title: 'Đổi bảng màu Retro',
        desc: 'Palette swap phong cách 8-bit / 16-bit',
        icon: 'database',
      },
      {
        title: 'Tối ưu cho Game Dev',
        desc: 'Xuất texture atlas cho Unity & Godot',
        icon: 'shield',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Tải tài nguyên sprite', desc: 'Upload ảnh nhân vật hoặc sheet tĩnh' },
      { step: 2, title: 'Thiết lập khung hình', desc: 'Cắt lát sprite theo kích thước mong muốn' },
      { step: 3, title: 'Đổi màu & tạo GIF', desc: 'Phối màu retro và xem thử animation' },
      { step: 4, title: 'Tích hợp vào engine', desc: 'Xuất file sprite atlas dùng ngay trong game' },
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
    tags: ['Prompt Cookbook', 'Moodboard', 'Ý tưởng thị giác', 'Design'],
    image: '/images/card-studio.png',
    statusText: 'Sẵn sàng',
    features: [
      {
        title: 'Kho Prompt tinh chỉnh sẵn',
        desc: 'Câu lệnh mẫu đã kiểm nghiệm thực tế',
        icon: 'zap',
      },
      {
        title: 'Bảng Moodboard trực quan',
        desc: 'Phác thảo cảm hứng và góc máy',
        icon: 'database',
      },
      {
        title: 'Tiết kiệm thời gian sáng tác',
        desc: 'Chuẩn bị ý tưởng trước khi bấm generate',
        icon: 'shield',
      },
    ],
    workflowSteps: [
      { step: 1, title: 'Khám phá thư viện', desc: 'Duyệt bộ sưu tập phong cách và ánh sáng' },
      { step: 2, title: 'Chọn công thức prompt', desc: 'Tuỳ biến câu lệnh theo nhu cầu dự án' },
      { step: 3, title: 'Lên moodboard ý tưởng', desc: 'Ghép tranh cảm hứng trên canvas' },
      { step: 4, title: 'Đưa vào xưởng tạo hình', desc: 'Copy prompt đưa sang MultiGen Studio' },
    ],
  },
];

export const CATEGORIES = [
  'Tất cả',
  'AI & Hình ảnh',
  'Video',
  'Pixel Art',
] as const;
