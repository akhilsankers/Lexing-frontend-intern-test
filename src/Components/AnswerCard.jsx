import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

function AnswerCard({ answer, citations }) {
  return (
    <Container className="mt-5" style={{ width: '80%' }}>
      <Card>
        <Card.Header as="h5">AI-Generated Legal Answer</Card.Header>
        <Card.Body>
          <Card.Text>{answer}</Card.Text>
        </Card.Body>

        {citations?.length > 0 && (
          <>
            <Card.Header>Citations</Card.Header>
            <ListGroup variant="flush">
              {citations.map((cite, index) => (
                <ListGroup.Item key={index}>
                  <blockquote className="blockquote mb-0">
                    <p>"{cite.text}"</p>
                    <footer className="blockquote-footer mt-2">
                      <a href={cite.link} target="_blank" rel="noreferrer">
                        {cite.source}
                      </a>
                    </footer>
                  </blockquote>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Card>
    </Container>
  );
}

export default AnswerCard;
