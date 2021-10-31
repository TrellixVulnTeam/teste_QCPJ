//import ReactDOM from "react-dom";
import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import "./style.css";
import Logo from './Logo';
class NavButton extends Component {
  render() {
    return (
      <Link
        className={
          this.props.active ? "navlink, nav-item nav-link active" : "navlink, nav-item nav-link"
        }
        to={this.props.route}
        onClick={this.props.onClick}
      >
        {" "}
        {this.props.title}
      </Link>
    );
  }
}
class NavBar extends Component {
  state = {
    active: -1
  };
  setActive = i => {
    this.setState({
      active: i
    });
  };
  buttons = [
    {
      title: "INÍCIO",
      key: 0,
      route: '/',
    },
    {
      title: "QUESTÕES",
      key: 1,
      route: '/questoes',
    },
    {
      title: "TEXTOS",
      key: 2,
      route: '/textos',
    },
    {
      title: "CONSULTÓRIO",
      key: 3,
      route: '/consultório',
    }
  ];
  render() {
    return (
        <header id="nav-header">
          <nav className="navbar" id="navbarMain">
                  {this.buttons.map(button => (
                    <div className="nav-content" key={button.key}>
                          <NavButton
                            title={button.title}
                            active={this.state.active === button.key}
                            route={button.route}
                            onClick={() => {
                                this.setActive(button.key);
                            }}
                          />
                      </div>
                  ))}
          
            
          </nav>
      </header>
    );
  }
}
export default NavBar;
