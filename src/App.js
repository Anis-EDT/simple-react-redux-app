import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/action'

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })
const mapDispatchToProps = {
  simpleAction
}

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  sp = () => {
    this.props.simpleAction();
  }
  render() {

    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.sp}>redux me pls</button>
  
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
