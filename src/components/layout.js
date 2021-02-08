import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import Footer from "../components/footer"
import SideBar from "../components/sidebar"
import SEO from "../components/SEO/SEO"
import "../styles/style.scss"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function MobileNav() {
  return (
    <div id="outer-container">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap"></div>
    </div>
  )
}

if (typeof window !== `undefined`) {
  const rootElement = document.getElementById("root")
  ReactDOM.render(<MobileNav />, rootElement)
}

class ButtonParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      condition: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition,
    })
  }
  render() {
    return (
      <ButtonChild
        className={this.state.condition ? "toggled" : ""}
        toggleClassName={this.handleClick}
      >
        Who I Help <span className="down-triangle">&#9662;</span>
        <ul className="primary-sub-menu">
          <ListLink to="/agencies/">Agencies</ListLink>
          <ListLink to="/businesses/">Businesses</ListLink>
          <ListLink to="/publications/">Publications</ListLink>
        </ul>
      </ButtonChild>
    )
  }
}

class ButtonChild extends React.Component {
  render() {
    return (
      <li className={this.props.className} onClick={this.props.toggleClassName}>
        {this.props.children}
      </li>
    )
  }
}

export default ({ children }) => (
  <div className="site-wrapper" id="roots">
    <SEO title="Copywriter and Content Marketer - Helen Anne Travis" />
    <header>
      <nav>
        <Link to="/">
          <h3 className="site-title">Helen Anne Travis</h3>
        </Link>

        <ul className="nav-list">
          <ListLink to="/about">About</ListLink>

          <ButtonParent></ButtonParent>
          <ListLink to="/portfolio/">Portfolio</ListLink>
          <ListLink to="/copywriting-services/">
            Services
          </ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </nav>
    </header>

    {children}

    <Footer />
  </div>
)
