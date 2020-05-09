import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

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
        <ul class="sidebar-sub-menu">
          <li>
            <a className="menu-item" href="/agencies">
              Agencies
            </a>
          </li>
          <li>
            <a className="menu-item" href="/businesses">
              Businesses
            </a>
          </li>
          <li>
            <a className="menu-item" href="/publications">
              Publications
            </a>
          </li>
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

export default props => {
  return (
    <Menu right {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>

      <ButtonParent></ButtonParent>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a className="menu-item" href="/content-marketing">
        Services
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  )
}
