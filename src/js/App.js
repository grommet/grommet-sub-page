import React from 'react';
import GrommetApp from 'grommet/components/App';
import '../scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        {this.props.children}
      </GrommetApp>
    );
  }
}

export default App;
