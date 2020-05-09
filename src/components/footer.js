import React from "react"
import LinkedIn from "../data/icons/LinkedIn.png"
import Email from "../data/icons/Email.png"

console.log(LinkedIn)

export default () => {
  const year = new Date()

  return (
    <footer>
      <div className="footer-wrapper">
        <ul className="footer-connect">
          <li>
            <a
              href="https://www.linkedin.com/in/helenannetravis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="Logo"></img>
              Connect
            </a>
          </li>

          <li>
            <a href="/contact" rel="noopener noreferrer">
              <img src={Email} alt="Logo"></img>
              Get in touch
            </a>
          </li>
        </ul>

        <div className="copyright">
          &copy; {year.getFullYear()} Helen Anne Travis. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
