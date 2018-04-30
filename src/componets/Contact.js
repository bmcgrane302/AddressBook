import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { removeContact } from '../actions/contacts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Contact extends Component {



render() {
 let {id, fname, lname, company, email, phone, address} = this.props.contact;


  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{fname} {lname}</CardTitle>
          <CardSubtitle>Company: {company}</CardSubtitle>
          <CardText>{address}</CardText>
          <CardText>{email}</CardText>
          <CardText>{phone}</CardText>
          <Button
            onClick={()=> this.props.removeContact(id)}
            >Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
 }
}

function mapDispatchToProps(dispatch){
  return {
    removeContact: bindActionCreators(removeContact, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (Contact);
