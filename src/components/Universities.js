import React from 'react';
import { Card } from 'react-bootstrap';

const Universities = ({ universities }) => {
    return(
        <div>
            {universities.map((university) => (
                <Card style={{ width: '27rem' }}>
                    <h1>Universites</h1>
                    <Card.Body>
                        <Card.Title>{university.name}</Card.Title>
                        <Card.Subtitle>{university.domains}</Card.Subtitle>
                        <Card.Text>{university.web_pages}</Card.Text>
                        <Card.Text>{university.country}</Card.Text>
                    </Card.Body>
                </Card>             
            ))}
        </div>
    );
};


export default Universities
