import { Col, Card, Button } from "react-bootstrap"

const Drink = ({drink}) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img 
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Image of ${drink.strDrink}`}

        />
        <Card.Body>
          <Card.Title>
            {drink.strDrink}
          </Card.Title>
          <Button
          variant="info"
          className="w-100 text-uppercase mt-2">
            See Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drink