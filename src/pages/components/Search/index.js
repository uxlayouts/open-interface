import React, { Component } from "react"
import Fuse from "fuse.js"
import ContactData from "./ContactData"
import Display from "./Display"
import fuseOptions from "./fuseOptions"

class Search extends Component {
  state = {
    totalData: [],
    peopleFiltered: [],
    onEnter: false,
    term: [],
    returnedAmount: 25,
  };

  componentWillMount() {
    this.setState({
      totalData: ContactData,
    })
  }

  handleKeyPress = (event) => {
    const keyUp = () => {
      const fuse = new Fuse(this.state.totalData, fuseOptions)
      this.setState({
        term: event.target.value,
        peopleFiltered: fuse.search(event.target.value).slice(0, this.state.returnedAmount),
      })
    }
    const enter = () => {
      if (event.key === "Enter") {
        keyUp()
      }
    }
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    this.state.onEnter ? enter() : keyUp()
  }

  render() {
    return (
      <div className="App">
        hello
        <Display
          peopleFiltered={this.state.peopleFiltered}
          onKeyPress={this.handleKeyPress}
          term={this.state.term}
        />
      </div>
    )
  }
}

export default Search
