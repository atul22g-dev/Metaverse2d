import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App