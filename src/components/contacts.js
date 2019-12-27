import React from 'react';
import { Card } from 'react-bootstrap';

const Contacts = ({ contacts }) => {
    return (
        <Card style={{ width: '27rem' }}>
            <h1>Contacts List</h1>
            <Card.Body>
                <Card.Title>Ted Jackson</Card.Title>
                <Card.Subtitle>jackyboy33@gmail.com</Card.Subtitle>
                <Card.Text>Future events in making...</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Contacts;