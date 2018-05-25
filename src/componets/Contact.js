import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import { removeContact, editContact } from '../actions/contacts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Contact extends Component {

  state= {
    showModal: false,
    fname: this.props.contact.fname,
    lname:this.props.contact.lname,
    company:this.props.contact.company,
    email:this.props.contact.email,
    phone:this.props.contact.phone,
    address:this.props.contact.address,
    photo_url:this.props.contact.photo_url
  }

openEdit = () => {
  this.setState({showModal: !this.state.showModal})
}

handleSubmit = () => {
  console.log('test update');
  this.props.editContact(this.props.contact.id,
   {fname: this.state.fname,
        lname:this.state.lname,
        company:this.state.company,
        email:this.state.email,
        phone:this.state.phone,
        address:this.state.address,
        photo_url:this.state.photo_url
   })
   this.openEdit()
}
correctName = (str) =>str.slice(0,1).toUpperCase()+str.slice(1,str.length).toLowerCase();

render() {
 let {id, fname, lname, company, email, phone, address, photo_url} = this.props.contact;


  return (
    <div>
      <Card style={{height: 500, margin: 10}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.correctName(fname)} {this.correctName(lname)}</CardTitle>
          <CardSubtitle>Company: {this.correctName(company)}</CardSubtitle>
          <CardText>{address}</CardText>
          <CardText>{email}</CardText>
          <CardText>{phone}</CardText>
        </CardBody>
        <CardFooter>
            <Button onClick={()=> this.props.removeContact(id)}>Delete</Button>
            <Button onClick={()=> this.openEdit()}>Edit</Button>
        </CardFooter>
      </Card>

      <Modal isOpen={this.state.showModal}>
        <ModalHeader>Edit Contact</ModalHeader>
         <ModalBody>
           <Card>
             <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                 <Label>First Name</Label>
                 <Input
                   placeholder={fname}
                   type='text'
                   id= 'firstname'
                   onChange={(e)=> this.setState({fname: e.target.value})}
                   value= {this.state.fname}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Last Name</Label>
                 <Input
                   placeholder={lname}
                   type='text'
                   id= 'lastname'
                   onChange={(e)=> this.setState({lname: e.target.value})}
                   value= {this.state.lname}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Company</Label>
                 <Input
                   placeholder={company}
                   type='text'
                   id= 'company'
                   onChange={(e)=> this.setState({company: e.target.value})}
                   value= {this.state.company}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Email</Label>
                 <Input
                   placeholder={email}
                   type='text'
                   id= 'email'
                   onChange={(e)=> this.setState({email: e.target.value})}
                   value= {this.state.email}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Phone</Label>
                 <Input
                   placeholder={phone}
                   type='text'
                   id= 'phone'
                   onChange={(e)=> this.setState({phone: e.target.value})}
                   value= {this.state.phone}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Address</Label>
                 <Input
                   placeholder={address}
                   type='text'
                   id= 'address'
                   onChange={(e)=> this.setState({address: e.target.value})}
                   value= {this.state.address}
                   />
               </FormGroup>
               <FormGroup>
                 <Label>Photo URL</Label>
                 <Input
                   placeholder={photo_url}
                   type='text'
                   id= 'photourl'
                   onChange={(e)=> this.setState({photo_url: e.target.value})}
                   value= {this.state.photo_url}
                   />
               </FormGroup>
             </Form>
           </Card>
         </ModalBody>
        <ModalFooter>
          <Button onClick={()=> this.handleSubmit()}>Update</Button>
          <Button onClick={()=> this.openEdit()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
 }
}

function mapDispatchToProps(dispatch){
  return {
    removeContact: bindActionCreators(removeContact, dispatch),
    editContact: bindActionCreators(editContact, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (Contact);
