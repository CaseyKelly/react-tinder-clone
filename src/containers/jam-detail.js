import React, { Component } from 'react';
import { connect } from 'react-redux';

class JamDetail extends Component {
  render() {
    return (
      <div>Jam Details!</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jam: state.activeJam
  };
}

export default connect(mapStateToProps)(JamDetail)