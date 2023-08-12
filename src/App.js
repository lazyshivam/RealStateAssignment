import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rent from "./components/Rent";
function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route exact path="/rent" element={<Rent/>} />
        <Route exact path="/" element={<Rent/>} />
      </Routes>
      <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 Created by Shivam. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
