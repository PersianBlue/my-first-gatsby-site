import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const pages = [
    {
      location: "/",
      text: "Home",
    },
    {
      location: "/about",
      text: "About",
    },
    {
      location: "/usefulLinks",
      text: "Useful Links",
    },
    {
      location: "/feedback",
      text: "Feedback project",
    },
    {
      location: "/loginPage",
      text: "Login Page",
    },
    {
      location: "/anecdotes",
      text: "Anecdotes",
    },
  ];
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          {pages.map((page) => {
            return (
              <li className={navLinkItem}>
                <Link to={page.location} className={navLinkText}>
                  {page.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
