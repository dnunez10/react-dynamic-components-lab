import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {    
    console.log(ColorBox)
    return this.props.opacity <= 0.2 ? null : (
      <div className="color-box" style={{opacity: 1}}>
        <ColorBox opacity = {this.props.opacity - 0.1} />
      </div>
    )
  }

}

