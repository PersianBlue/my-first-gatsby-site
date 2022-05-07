import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className = {navLinkItem}>
            <Link to ="/usefulLinks" className={navLinkText}>Useful Links</Link>
          </li>

          <li className = {navLinkItem}>
            <Link to = "/feedback" className = {navLinkText}> Feedback project</Link>
          </li>
          <li className = {navLinkItem}>
            <Link to = "/loginPage" className = {navLinkText} >Login Page </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout