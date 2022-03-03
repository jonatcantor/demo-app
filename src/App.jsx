import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "./components/pages/List"
import Login from "./components/pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/list" element={ <List /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
