import { Button, Form, Row, Col } from "react-bootstrap"
import useCategories from "../hooks/useCategories"

const DrinkForm = () => {

    const {categories} = useCategories()
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
                        {categories.map(category => (
                            <option
                            key={category.strCategory}
                            value={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
                <Button
                    variant="secondary"
                    className="text-uppercase w-100"

                >
                    Search drinks
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default DrinkForm