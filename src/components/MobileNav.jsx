import { Component } from "react";
import { slide as Menu } from "react-burger-menu";

class MobileNav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  shouldComponentUpdate(nextState) {
    if (this.state.menuOpen !== nextState.menuOpen) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Menu
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <a
          id="homeLink"
          className="menu-item"
          href="#home"
          onClick={() => this.setState((state) => (state.menuOpen = false))}
        >
          Home
        </a>
        <a
          id="musicLink"
          className="menu-item"
          href="#music"
          onClick={() => this.setState((state) => (state.menuOpen = false))}
        >
          Music
        </a>
        <a
          id="contactLink"
          className="menu-item"
          href="#shop"
          onClick={() => this.setState((state) => (state.menuOpen = false))}
        >
          Shop
        </a>
        <a
          id="contactLink"
          className="menu-item"
          href="#contact"
          onClick={() => this.setState((state) => (state.menuOpen = false))}
        >
          Contact
        </a>
      </Menu>
    );
  }
}

export default MobileNav;
