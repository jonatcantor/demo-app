import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Detail from "./components/pages/Detail"
import List from "./components/pages/List"
import Login from "./components/pages/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/list" element={ <List /> } />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
