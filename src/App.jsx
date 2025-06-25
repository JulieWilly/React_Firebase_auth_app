import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import ProtectedRoute from "./store/ProtectedRoute";


function App() {
  const auth = useSelector(state => state.count.user)
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute auth={auth}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
