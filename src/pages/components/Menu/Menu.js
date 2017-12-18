import React, { Component } from "react"
import MenuDisplay from "./MenuDisplay"

class Menu extends Component {
  state = {
    open: false,
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MenuDisplay handleToggle={this.handleToggle} menuStatus={this.state.open} />
    )
  }
}

export default Menu
