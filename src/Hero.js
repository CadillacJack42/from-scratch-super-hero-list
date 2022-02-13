import React from 'react';
import './Styles/Hero.css';
import { Link } from 'react-router-dom';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={`/detail/${this.props.hero.id}`} className={'link'}>
        <div className="hero-container">
          <div className="sub-hero-container">
            <h2 className="hero-title">{`Name : ${this.props.hero.name}`}</h2>
            <img className="hero-image" height={'300px'} src={this.props.hero.image}></img>
          </div>
        </div>
      </Link>
    );
  }
}
