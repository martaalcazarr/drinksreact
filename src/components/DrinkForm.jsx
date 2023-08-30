import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategories from "../hooks/useCategories"
import { useState } from "react"
import useDrinks from "../hooks/useDrinks"

const DrinkForm = () => {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })
    const [alert, setAlert] = useState('')

    const {categories} = useCategories()
    const {CheckDrink} = useDrinks()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')){
            setAlert('All fields are mandatory')
            return
        }
        setAlert('')
        CheckDrink(search)
    }
  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alert && <Alert variant="danger" className="text-center">{alert}</Alert>}
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
                        value={search.name}
                        onChange={e => setSearch({
                            ...search,
                            [e.target.name] : e.target.value
                        })}
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
                        value={search.category}
                        onChange={e => setSearch({
                            ...search,
                            [e.target.name] : e.target.value
                        })}
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
                    variant="info"
                    className="text-uppercase w-100 mt-3"
                    type="submit"

                >
                    Search drinks
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default DrinkForm