import LandingPage from "./Components/pages/LandingPage"
import ProductDetails from "./Components/pages/ProductDetails"
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<LandingPage />} />
            <Route path="/products/:productsId">{<ProductDetails />}</Route>
          </Routes>
       </BrowserRouter>  
      </>
  )
}

export default App
