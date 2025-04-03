import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>
      <nav className="flex flex-col gap-4 text-base text-white">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline focus:underline focus:outline-none"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterColumn;
