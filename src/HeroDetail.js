import React from 'react';
import './Styles/HeroDetail.css';

export default class HeroDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="hero-detail-container">
        <h1 className="hero-name">{`${this.props.hero.name} `}</h1>
        <div className="center-items">
          <h3 className="names">
            {`Name : ${this.props.hero.name}`}
            <br></br>
            {`Full Name : ${this.props.hero.full_name}`}
            <br></br>
            {`Known Aliases : ${this.props.hero.aliases}`}
            <br></br>
            {`Alter Egos : ${this.props.hero.alter_egos}`}
            <br></br>
          </h3>
          <img
            alt={'No Image Available'}
            src={this.props.hero.image}
            className={'hero-detail-image'}
          ></img>
          <div className="hero-stats">
            <h3>{this.props.hero.name} Stats</h3>
            <p>
              {`Combat: ${this.props.hero.combat}`}
              <br></br>
              {`Power: ${this.props.hero.power}`}
              <br></br>
              {`Durability: ${this.props.hero.durability}`}
              <br></br>
              {`Speed: ${this.props.hero.speed}`}
              <br></br>
              {`Strength: ${this.props.hero.strength}`}
              <br></br>
              {`Intelligence: ${this.props.hero.intelligence}`}
            </p>
          </div>
        </div>

        <h3>{this.props.hero.name} Bio</h3>
        <div className="bio-container">
          <p className="bio-left">
            {`Publisher : ${this.props.hero.publisher}`}
            <br></br>
            {`First Appearance : ${this.props.hero.first_appearance}`}
            <br></br>
            {`alignment : ${this.props.hero.alignment}`}
            <br></br>
            {`Occupation : ${this.props.hero.occupation}`}
            <br></br>
            {`Base : ${this.props.hero.base}`}
            <br></br>
            {`Groups : ${this.props.hero.groups}`}
            <br></br>
            {`Relatives : ${this.props.hero.relatives}`}
            <br></br>
          </p>
          <p className="bio">
            {`Race : ${this.props.hero.race}`}
            <br></br>
            {`Gender : ${this.props.hero.gender}`}
            <br></br>
            {`Birthplace : ${this.props.hero.birthplace}`}
            <br></br>
            {`Height : ${this.props.hero.height}`}
            <br></br>
            {`Weight : ${this.props.hero.weight}`}
            <br></br>
            {`Hair : ${this.props.hero.hair_color}`}
            <br></br>
            {`Eyes : ${this.props.hero.eye_color}`}
          </p>
        </div>
      </div>
    );
  }
}
