import { render } from "react-dom";
import "./index.css"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignupPage from "./components/SignupPage"
import App from "./App"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);