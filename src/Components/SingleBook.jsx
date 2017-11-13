import React, { Component } from 'react';


class SingleBook extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.author}</h2>
      </div>
    );
  }
}

export default SingleBook;
