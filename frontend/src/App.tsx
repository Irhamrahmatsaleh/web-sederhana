
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// Nanti tambahkan import untuk Login, Register, dll

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* Tambahkan route lain nanti */}
    </Routes>
  );
}

export default App;
