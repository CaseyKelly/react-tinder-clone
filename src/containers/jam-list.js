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
  // Whatever is returned will show up as props
  // inside of JamList

  return {
    jams: state.jams
  }
}

// Anything returned from this function will end up as props
// on the JamList container
function mapDispatchToProps(dispatch) {
  // Whenever selectJam is called, the result should
  // be passed to all of our reducers

  return bindActionCreators({ selectJam: selectJam }, dispatch);
}

// Promote JamList from a component to a container - it
// needs to know about this new dispatch method, selectJam.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(JamList);
