import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import SignIn from "./Components/signIn"
import Home from "./Home"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
