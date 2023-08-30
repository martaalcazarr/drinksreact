import { Container } from "react-bootstrap"
import DrinkForm from "./components/DrinkForm"
import DrinksList from "./components/DrinksList"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"

function App() {
  

  return (
    <CategoriesProvider>
      <DrinksProvider>
      <header className="py-5">
        <h1>Find your drink</h1>
      </header>
      
      <Container className="mt-5">
        <DrinkForm />
        <DrinksList />
      </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
