import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContacts } from './actions/contacts'

class App extends Component {
  componentDidMount(){
    this.props.getContacts()

  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    getContacts: bindActionCreators(getContacts, dispatch)
  }
}

export default connect(null, mapDispatchToProps ) (App);
