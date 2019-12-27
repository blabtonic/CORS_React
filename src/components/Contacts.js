import React from 'react';
import { Card } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact) => ( 
                <Card style={{ width: '27rem' }}>
                    <h1>Contacts List</h1>
                    <Card.Body>
                        <Card.Title>{contact.name}</Card.Title>
                        <Card.Subtitle>{contact.email}</Card.Subtitle>
                        <Card.Text>{contact.company.catchPhrase}</Card.Text>
                    </Card.Body>
            </Card>
            ))}
        </div>
    );
};

export default Contacts;