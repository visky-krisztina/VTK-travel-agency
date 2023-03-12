import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
      {
        pageLinks.map((link) => {
          const {id, href, text} = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">{text}</a>
            </li>
          )
        })
      }


    </ul>
    <ul className="footer-icons">
      {
        socialLinks.map((slink) => {
          const {id, href, icon} = slink;
          return (
            <li key={id}>
              <a href={href} rel="noreferrer" target="_blank" className="footer-icon"
                ><i className={icon}></i>
              </a>
            </li>
          )
        })
      }
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>

  )
}

export default Footer