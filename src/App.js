import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/*  rutas hijas
          <Route path="/planes">
<Route path="/login" element={<Login />} />
              
          </Route> */}

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
