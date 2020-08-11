import React, { Component } from 'react'
// import '../css/home.scss'

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    // this.goNext = this.goNext.bind(this)
  }
  goNext(value) {
    console.log(value.url)
    this.props.history.push(value.url)
  }
  

  render() {
    return (
      <div className="mainPage">
       333333111
      </div>
    )
  }
}

export default Admin
