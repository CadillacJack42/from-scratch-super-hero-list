import React from 'react';
import Nav from '../Routes/Nav';
// import App from '../App';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {this.props.children} {/* This line will render router children which will be Body */}
      </div>
    );
  }
}
