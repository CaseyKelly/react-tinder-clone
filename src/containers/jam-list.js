import React, { Component } from 'react';

export default class JamList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={jam.title} className="list-group-item">{jam.title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}