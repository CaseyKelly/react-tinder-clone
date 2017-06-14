import React, { Component } from 'react';

import JamList from '../containers/jam-list'
import JamDetail from '../containers/jam-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <JamList />
        <JamDetail />
      </div>
    );
  }
}
