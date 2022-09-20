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

  closeMenu() {
    this.setState({ menuOpen: false });
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
          onClick={() => this.closeMenu()}
        >
          Home
        </a>
        <a
          id="musicLink"
          className="menu-item"
          href="#music"
          onClick={() => this.closeMenu()}
        >
          Music
        </a>
        <a
          id="contactLink"
          className="menu-item"
          href="#shop"
          onClick={() => this.closeMenu()}
        >
          Shop
        </a>
        <a
          id="contactLink"
          className="menu-item"
          href="#contact"
          onClick={() => this.closeMenu()}
        >
          Contact
        </a>
      </Menu>
    );
  }
}

export default MobileNav;
