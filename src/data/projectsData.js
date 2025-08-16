// src/data/projectsData.js
import bellaImg from '../assets/bella.webp';
import blogImg from '../assets/blog.webp';
import libraryImg from '../assets/library.webp';
import movImg from '../assets/mov.webp';
import bezelImg from '../assets/bezel.webp';
import bakeryImg from '../assets/bakery.webp';
import audioPlaylistImg from '../assets/AudioPlaylist.webp';
import flexastayImg from '../assets/flexastay.webp';
import hireslab from '../assets/hireslab.webp'; 
import crudssysImg from '../assets/crudssys.webp';   

export const Projects = [
  {
    id: 1,
    title: "Bella Furniture",
    image: bellaImg,
    link: "https://bella-priv.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/Bella-Furniture",
    description:
      "A stylish furniture website showcasing high-quality furniture items with a sleek and modern design.",
    technologies: ["HTML", "SASS", "JavaScript"]
  },
  {
    id: 2,
    title: "Simple Blog",
    image: blogImg,
    link: "https://simple-blog-florafacts.vercel.app",
    github: "https://github.com/Asmaa-AbdElkhalek209/simple-blog",
    description:
      "A simple blog platform that allows users to sign in, add, edit, and delete posts using Firebase for authentication and real-time database.",
    technologies: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Flexastay",
    image: flexastayImg,
    link: "https://www.flexastay.com/",
    github: "", // NDA
    description:
      "An online accommodation booking platform where I contributed to frontend development using Angular, TypeScript, Bootstrap, Tailwind, and API integrations.",
    technologies: ["Angular", "TypeScript", "Bootstrap", "Tailwind CSS", "API"]
  },
  {
    id: 4,
    title: "Hireslab",
    image: hireslab,
    link: "https://hireslab.vercel.app/",
    github: "https://github.com/MahmoudHussien7/hireslab",
    description:
      "A freelance hiring and recruitment platform developed with Next.js, featuring responsive UI and API integrations.",
    technologies: ["Next.js", "Tailwind CSS", "APIs"]
  },
  {
    id: 5,
    title: "Library",
    image: libraryImg,
    link: "https://book-library-gold.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/Book-Library",
    description:
      "An interactive book library where users can manage books with full CRUD operations (Create, Read, Update, Delete).",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 6,
    title: "Movies Website",
    image: movImg,
    link: "https://movies-website-liart.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/Movies-Website",
    description:
      "A movie website featuring categories like Now Playing, Popular, Top Rated, and Trending using a public movie API.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Movie API"]
  },
  {
    id: 7,
    title: "Bezel Landing Page",
    image: bezelImg,
    link: "https://bezel-bootstrap.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/bezel",
    description:
      "A clean and responsive landing page built with Bootstrap to showcase a product or service in a modern layout.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "jQuery"]
  },
  {
    id: 8,
    title: "Bakery Template",
    image: bakeryImg,
    link: "https://bakery-chi-ten.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/Bakery",
    description:
      "A bakery website template displaying products, promotional sections, and menus with a visually appealing layout.",
    technologies: ["HTML5", "SASS", "Responsive Design"]
  },
  {
    id: 9,
    title: "Simple Audio Playlist",
    image: audioPlaylistImg,
    link: "https://simple-audio-playlist.vercel.app/",
    github: "https://github.com/Asmaa-AbdElkhalek209/simple-audio-playlist",
    description:
      "A simple audio player that allows users to play and control a custom audio playlist with a clean interface.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
    {
    id: 10,
    title: "CRUD System",
    image: crudssysImg,
    link: "https://crud-system-alpha.vercel.app/", 
    github: "https://github.com/Asmaa-AbdElkhalek209/CRUD-System.git",
    description:
      "A simple product management system with full CRUD operations stored in localStorage.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
];
