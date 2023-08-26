import { Container, Form, Row, Col } from "react-bootstrap"

const DrinkForm = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="name">
                        Drink Name
                    </Form.Label>

                    <Form.Control 
                        id="name"
                        type="text"
                        placeholder="Ex: Vodka, Whiskey..."
                        name="name"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group>
                    <Form.Label htmlFor="category">
                        Drink Category
                    </Form.Label>

                    <Form.Select
                        id="category"
                        name="category"
                    >
                        <option>- Select one category --</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default DrinkForm