import { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const num = this.props.match.params.num;
    const section = this.props.match.params.section;
    return (
      <div>
        <button
          disabled={num === '1'}
          onClick={() =>
            this.props.history.push(`/${section}/${Number(num) - 1}`, {
              state: '-',
            })
          }
        >
          Previous Page
        </button>
        <button
          disabled={num === '1' && section === 'home'}
          onClick={() => this.props.history.push('/home/1')}
        >
          Home
        </button>
        <button
          disabled={this.props.disabled}
          onClick={() => this.props.history.push(`/${section}/${Number(num) + 1}`, { state: '+' })}
        >
          Next Page
        </button>
      </div>
    );
  }
}
