import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'reactstrap';
import Contact from './Contact';
import TopNav from './TopNav';


class ContactList extends Component {

  render () {
    let theContacts = this.props.contacts.map((contact,i) => {
      return  (
        <Col key={contact.id} md={4}>
            <Contact contact={contact}/>
        </Col>
      )
    })

    return (
     <div>
       <TopNav />
       <Container>
         <Row>
           {theContacts}
         </Row>
       </Container>
     </div>
    )
  }
}

function mapStateToProps(state){
  return{
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, null) (ContactList)
