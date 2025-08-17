/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/19tirjV9Ki/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/asmaa_abdelkhalek?igsh=djllamQ4aXM5bmNp",
  },
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/Asmaa-AbdElkhalek209",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/asmaa-abdelkhalek9/",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    url: "https://wa.me/qr/U7RIXPCYPGJMM1",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-6 flex-nowrap">
      {socialLinks.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${name} profile`}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <Icon className="w-5 h-5 text-gray-600" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
