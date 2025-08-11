// src/data/projectsData.js
import bellaImg from '../assets/bella.webp';
import blogImg from '../assets/blog.webp';
import libraryImg from '../assets/library.webp';
import movImg from '../assets/mov.webp';
import bezelImg from '../assets/bezel.webp';
import bakeryImg from '../assets/bakery.webp';
import audioPlaylistImg from '../assets/AudioPlaylist.webp';

export const Projects = [
  {
    id: 1,
    title: "Bella Furniture",
    image: bellaImg,
    link: "https://bella-priv.vercel.app/",
    github: "https://github.com/Asmaa-1999/Bella-Furniture",
    description:
      "A stylish furniture website showcasing high-quality furniture items with a sleek and modern design.",
    technologies: ["HTML", "SASS", "JavaScript"]
  },
  {
    id: 2,
    title: "Simple Blog",
    image: blogImg,
    link: "https://simple-blog-florafacts.vercel.app",
    github: "https://github.com/Asmaa-1999/simple-blog",
    description:
      "A simple blog platform that allows users to sign in, add, edit, and delete posts using Firebase for authentication and real-time database.",
    technologies: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Library",
    image: libraryImg,
    link: "https://book-library-gold.vercel.app/",
    github: "https://github.com/Asmaa-1999/Book-Library",
    description:
      "An interactive book library where users can manage books with full CRUD operations (Create, Read, Update, Delete).",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "Movies Website",
    image: movImg,
    link: "https://movies-website-liart.vercel.app/",
    github: "https://github.com/Asmaa-1999/Movies-Website",
    description:
      "A movie website featuring categories like Now Playing, Popular, Top Rated, and Trending using a public movie API.",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Movie API"]
  },
  {
    id: 5,
    title: "Bezel Landing Page",
    image: bezelImg,
    link: "https://bezel-bootstrap.vercel.app/",
    github: "https://github.com/Asmaa-1999/bezel-bootstrap",
    description:
      "A clean and responsive landing page built with Bootstrap to showcase a product or service in a modern layout.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "jQuery"]
  },
  {
    id: 6,
    title: "Bakery Template",
    image: bakeryImg,
    link: "https://bakery-chi-ten.vercel.app/",
    github: "https://github.com/Asmaa-1999/Bakery",
    description:
      "A bakery website template displaying products, promotional sections, and menus with a visually appealing layout.",
    technologies: ["HTML5", "SASS", "Responsive Design"]
  },
  {
    id: 7,
    title: "Simple Audio Playlist",
    image: audioPlaylistImg,
    link: "https://simple-audio-playlist.vercel.app/",
    github: "https://github.com/Asmaa-1999/simple-audio-playlist",
    description:
      "A simple audio player that allows users to play and control a custom audio playlist with a clean interface.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];
