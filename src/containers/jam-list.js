import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJam } from '../actions/index';
import { bindActionCreators } from 'redux';

class JamList extends Component {
  renderList() {
    return this.props.jams.map((jam) => {
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

function mapStateToProps(state) {
  return {
    jams: state.jams
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectJam: selectJam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JamList);
