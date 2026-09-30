export type StudentGalleryItem = {
  id: string;
  kind: "image" | "video";
  poster: string;
  alt: string;
  videoSrc?: string;
  sourcePage?: string;
};

// Illustrative images and licensed stock clips. Replace with approved Al Zikra media when available.
export const studentGallery: StudentGalleryItem[] = [
  { id: "reading-boy", kind: "image", poster: "/assets/gallery/student-reading-boy.webp", alt: "Illustrative image of a boy reading Quran beside a laptop" },
  { id: "girl-video", kind: "video", poster: "/assets/gallery/stock-girl-video-poster.webp", alt: "Stock video preview of a girl reading Quran", videoSrc: "https://videos.pexels.com/video-files/8165772/8165772-hd_1280_720_25fps.mp4", sourcePage: "https://www.pexels.com/video/a-girl-reading-a-quran-8165772/" },
  { id: "reading-girl", kind: "image", poster: "/assets/gallery/student-reading-girl.webp", alt: "Illustrative image of a girl reading Quran" },
  { id: "boy-video", kind: "video", poster: "/assets/gallery/stock-boy-video-poster.webp", alt: "Stock video preview of a boy reading Quran", videoSrc: "https://videos.pexels.com/video-files/9116996/9116996-hd_720_1280_24fps.mp4", sourcePage: "https://www.pexels.com/video/a-little-boy-talking-while-reading-a-quran-book-9116996/" },
  { id: "together", kind: "image", poster: "/assets/gallery/students-reading-together.webp", alt: "Illustrative image of two students reading together" },
  { id: "online", kind: "image", poster: "/assets/gallery/student-online-lesson.webp", alt: "Illustrative image of a student joining an online Quran lesson" },
  { id: "classroom", kind: "image", poster: "/assets/gallery/classroom-study.webp", alt: "Illustrative image of students studying with a teacher" },
];
