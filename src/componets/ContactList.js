import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Input, InputGroup } from 'reactstrap';
import Contact from './Contact';
import TopNav from './TopNav';


class ContactList extends Component {

  state = {
    filterTitle: ''
  }

  handleChange = (e) => {
    this.setState({filterTitle: e.target.value})
  }

  render () {
    console.log('test', this.props.contacts);
    let filterList = this.state.filterTitle !== ''? this.props.contacts.filter((item)=> item.fname.startsWith(this.state.filterTitle)):this.props.contacts;

    let theContacts = filterList.sort((a,b)=> b.id-a.lname).map((contact,i) => {
      return  (
        <Col key={contact.id} md={4}>
            <Contact contact={contact}/>
        </Col>
      )
    })

    return (
     <div>
       <TopNav />
       <InputGroup>
         <Input
           onChange={this.handleChange}
           type= 'search'
           placeholder='search for name'
            />
       </InputGroup>
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
