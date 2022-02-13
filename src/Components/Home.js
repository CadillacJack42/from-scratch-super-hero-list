import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {this.props.children} {/* This line will render router children which will be Body */}
      </div>
    );
  }
}
