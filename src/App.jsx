import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/Home";
import EditPage from "./pages/Edit";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1
          className="text-center p-4"
          style={{ fontFamily: "Lucida Console, Courier New" }}
          onClick={(e) => navigate(`/`)}
        >
          MEME-GENERATOR
        </h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
