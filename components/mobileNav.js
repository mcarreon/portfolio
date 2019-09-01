import Sidebar from "react-sidebar";
import React, { Component } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "mailto:marloadriancarreon@gmail.com", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class MobileNav extends Component {
  state = {
    sidebarOpen: false
  };

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    const sidebar = (
      <div className="mobile-sidebar pl-5">
        <div>
          <button className="mt-5" onClick={() => this.onSetSidebarOpen(false)}>
            Close
          </button>
        </div>
        <div className="mobile-sidebar--links mt-5">
          {links.map(({ key, href, label }) => {
            let link = (
              <Link href={href}>
                <a>{label}</a>
              </Link>
            );

            return (
              <div className="mt-3" key={key} onClick={() => this.onSetSidebarOpen(false)}>
                {label === "Contact" ? <a href={href}>{label}</a> : link}
              </div>
            );
          })}
        </div>
        <div className="mobile-sidebar--rose mt-auto mb-5">
          <img src="/static/rose.png" alt="rose"></img>
        </div>
      </div>
    );

    return (
      <div className="mobile-nav mb-6">
        <div>
          <Sidebar
            sidebar={sidebar}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", position: "fixed" }, overlay: { backgroundColor: "rgba(229,128,149,.4)" } }}
          >
            <div className="container mt-4">
              <button
                className="mt-4"
                onClick={() => this.onSetSidebarOpen(true)}
              >
                Menu
              </button>
            </div>
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default MobileNav;
