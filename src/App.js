import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContacts } from './actions/contacts';
import TopNav from './componets/TopNav'

class App extends Component {
  componentDidMount(){
    this.props.getContacts()

  }


  render() {
    return (
      <div className="App">
       <TopNav />
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
