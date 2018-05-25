import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addContact } from '../actions/contacts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopNav from './TopNav';


class ContactInput extends Component {
  state = {
    fname: '',
    lname: '',
    company: '',
    email: '',
    address: '',
    phone: '',
    photo_url: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <TopNav />
        <Card>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
             <FormGroup>
               <Label for="firstName">First Name</Label>
               <Input
                 type="text"
                 id="firstName"
                 onChange={(e) => this.setState({fname: e.target.value.toLowerCase()})}
                 value={this.state.fname}
               />
             </FormGroup>
             <FormGroup>
               <Label for="lastName">Last Name</Label>
               <Input
                 type="text"
                 id="lastName"
                 onChange={(e) => this.setState({lname: e.target.value.toLowerCase()})}
                 value={this.state.lname}
                 />
             </FormGroup>
             <FormGroup>
               <Label for="company">Company</Label>
               <Input
                 type="text"
                 id="company"
                 onChange={(e) => this.setState({company: e.target.value.toLowerCase()})}
                 value={this.state.company}
                 />
             </FormGroup>
             <FormGroup>
               <Label for="email">Email</Label>
               <Input
                 type="text"
                 id="email"
                 onChange={(e) => this.setState({email: e.target.value})}
                 value={this.state.email}
                 />
             </FormGroup>
             <FormGroup>
               <Label for="phone">Phone</Label>
               <Input
                 type="text"
                 id="phone"
                 onChange={(e) => this.setState({phone: e.target.value})}
                 value={this.state.phone}
                 />
             </FormGroup>
             <FormGroup>
               <Label for="address">Address</Label>
               <Input
                 type="text"
                 id="address"
                 onChange={(e) => this.setState({address: e.target.value})}
                 value={this.state.address}
                 />
             </FormGroup>
             <FormGroup>
               <Label for="photoUrl">Photo Url</Label>
               <Input
                 type="text"
                 id="photoUrl"
                 onChange={(e) => this.setState({photo_url: e.target.value})}
                 value={this.state.photo_url}
                 />
             </FormGroup>
             <Button
               type='submit'

               >Submit</Button>
           </Form>
         </CardBody>
        </Card>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: bindActionCreators(addContact, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (ContactInput)
