import React, { Component } from 'react';
import { connect } from 'react-redux';

class JamDetail extends Component {
  render() {
    if(!this.props.jam) {
      return (
        <div>Select a jam to get started.</div>
      )
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.jam.title}</div>
        <div>Date: {this.props.jam.date}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    jam: state.activeJam
  };
}

export default connect(mapStateToProps)(JamDetail)