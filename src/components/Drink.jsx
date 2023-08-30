import { Col, Card, Button } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const Drink = ({drink}) => {

  const {handleModalClick, handleDrinkIdClick} = useDrinks()

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
            variant={"info"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick()
              handleDrinkIdClick(drink.idDrink)
            }}
          >
            See Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drink