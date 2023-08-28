import { Container } from "react-bootstrap"
import DrinkForm from "./components/DrinkForm"
import { CategoriesProvider } from "./context/CategoriesProvider"

function App() {
  

  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Find your drink</h1>
      </header>
      
      <Container className="mt-5">
        <DrinkForm />
      </Container>
    </CategoriesProvider>
  )
}

export default App
