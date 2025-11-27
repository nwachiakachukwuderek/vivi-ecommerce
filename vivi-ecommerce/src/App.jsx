import LandingPage from "./Components/pages/LandingPage"
import ProductDetails from "./Components/pages/ProductDetails"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products/:Id" element={<ProductDetails />} />
          </Routes>
      </>
  )
}

export default App
