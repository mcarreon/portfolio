import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router';

const links = [
  { href: "/", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "mailto:marloadriancarreon@gmail.com", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({router}) => {

  return (
    <nav className="container py-4">
      {links.map(({ key, href, label }) => {
        let link = (
          <Link href={href}>
            <a className={href === router.pathname ? 'active' : ''}>{label}</a>
          </Link>
        );

        return (
          <div className="mr-3" key={key}>
            {label === "Contact" ? <a className={href === router.pathname ? 'active' : ''} href={href}>{label}</a> : link}
          </div>
        );
      })}
    </nav>
  );
};

export default withRouter(Nav);
