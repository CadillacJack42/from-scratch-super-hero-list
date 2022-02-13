import Hero from '../Hero';
import '../Styles/List.css';
import React from 'react';
import { filterHeroes, getAllHeroes } from '../services/fetch-utils';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      column: 'name',
      query: '',
      start: Number((this.props.match.params.page - 1) * 50),
      end: Number(this.props.match.params.page * 50 - 1),
      disabled: this.props.disabled,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const allHeroes = await getAllHeroes(this.state.start, this.state.end);
    this.setState({ heroes: allHeroes });
  }

  async componentDidUpdate() {
    if (Number((this.props.match.params.page - 1) * 50 !== this.state.start)) {
      await this.setState({
        start: Number((this.props.match.params.page - 1) * 50),
        end: Number(this.props.match.params.page * 50 - 1),
      });
      const start = this.state.start;
      const end = this.state.end;
      const newHeroes = await getAllHeroes(start, end);
      newHeroes < 50 && this.setState({ disabled: true });
      this.setState({ heroes: newHeroes });
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    const column = this.state.column;
    const query = this.state.query;
    const filteredHeroes = await filterHeroes(column, query);
    await this.setState({ heroes: filteredHeroes });
  }

  render() {
    return (
      <div>
        <div className="search-heroes">
          <label>
            Find Hero By :
            <form onSubmit={this.handleSubmit}>
              <select
                onChange={(e) => {
                  this.setState({ column: e.target.value });
                }}
              >
                <option value="name">Name</option>
                <option value="publisher">Publisher</option>
                <option value="alignment">Alignment</option>
              </select>
              <input
                value={this.state.query}
                onChange={(e) => {
                  this.setState({ query: e.target.value });
                }}
              ></input>
              <button>Search</button>
            </form>
          </label>
        </div>

        <div className="hero-container">
          {this.state.heroes.map((hero) => {
            return <Hero hero={hero} key={hero.slug} />;
          })}
        </div>
      </div>
    );
  }
}
