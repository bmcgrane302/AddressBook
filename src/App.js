import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContacts } from './actions/contacts';
import TopNav from './componets/TopNav';
import ContactList from './componets/ContactList';

class App extends Component {
  componentDidMount(){
    this.props.getContacts()

  }


  render() {
    return (
      <div className="App">
       <TopNav />
       <ContactList />
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
