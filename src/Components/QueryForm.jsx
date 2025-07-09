import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function QueryForm({ query, setQuery, onSubmit, loading }) {
    return (
        <div>
            <Container className='mt-5' style={{ width: "80%" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Query</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type your query here..." style={{ width: "80%" }}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit"
                        onClick={onSubmit}
                        disabled={loading}>
                       {loading ? 'Loading...' : 'Submit'}
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default QueryForm;
