import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContacts } from './actions/contacts';
import ContactList from './componets/ContactList';
import ContactInput from './componets/ContactInput';
import { Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.getContacts()

  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ContactList}/>
            <Route exact path='/add' component={ContactInput}/>
          </Switch>
        </Router>
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
