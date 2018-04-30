import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Contact = (props) => {
  let {fname, lname, company, email, phone, address} = props.contact;
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
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
