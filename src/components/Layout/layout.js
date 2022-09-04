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
  const createPageObject = (location, text, id) => {
    return { location: location, text: text, id: id };
  };
  const pages = [
    {
      location: "/",
      text: "Home",
      id: 1,
    },
    {
      location: "/about",
      text: "About",
      id: 2,
    },
    {
      location: "/usefulLinks",
      text: "Useful Links",
      id: 3,
    },
    {
      location: "/feedback",
      text: "Feedback project",
      id: 4,
    },
    {
      location: "/loginPage",
      text: "Login Page",
      id: 5,
    },
    {
      location: "/anecdotes",
      text: "Anecdotes",
      id: 6,
    },
  ];

  const pages2 = [
    {
      location: "/devotional",
      text: "Devotional Page",
      id: 7,
    },
    {
      location: "/testForm",
      text: "Test Form",
      id: 8,
    },
    createPageObject("/loginPage2", "Login Page 2", 9),
  ];
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          {pages.map((page) => {
            return (
              <li className={navLinkItem} key={page.id}>
                <Link to={page.location} className={navLinkText}>
                  {page.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav>
        <ul className={navLinks}>
          {pages2.map((page) => {
            return (
              <li className={navLinkItem} key={page.id}>
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
