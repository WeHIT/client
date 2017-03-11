import React, { Component } from 'react';

import Home from './container/home';

export default class Intro extends Component {
  render() {
    const {
      ...other
    } = this.props;
    return(
      <Home 
        {...other} />
    )
  }
}