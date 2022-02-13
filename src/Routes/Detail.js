import React from 'react';
import HeroDetail from '../HeroDetail';
import { getHeroById } from '../services/fetch-utils';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {},
    };
  }

  async componentDidMount() {
    const newHero = await getHeroById(this.props.match.params.id);
    await this.setState({ hero: newHero });
  }

  render() {
    return <HeroDetail hero={this.state.hero} />;
  }
}
