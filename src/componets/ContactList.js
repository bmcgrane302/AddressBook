import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'reactstrap';
import Contact from './Contact';

class ContactList extends Component {

  render () {
    let theContacts = this.props.contacts.map((contact) => {
      return  (
        <Col key={contact.id} md={4}>
            <Contact contact={contact}/>
        </Col>
      )
    })
    return (
      <Container>
        <Row>
          {theContacts}
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return{
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, null) (ContactList)
