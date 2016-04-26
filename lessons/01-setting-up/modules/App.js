import React from 'react'
import NavLink from './NavLink';
import { IndexLink, Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Github Issues</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home via IndexLink</IndexLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home via NavLink</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        { this.props.children }
      </div>
    );
  }
})
