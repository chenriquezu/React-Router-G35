import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';

// Aqui se deinen las rutas de las vistas
import Home from  "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

// Se Incorporan los componetes Principales como el Navbar
import Navbar  from "./components/Navbar";

//Aqui definimos la App Principal y enmascaramos las rutas a utilizar para el caso se deja el Home , contacto y se agrega una pagina NotFound encaso de que se imgrese
//una ruta no valida
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
            <Routes>
                 <Route path="/" element={<Home />}/>
                 <Route path="/Contacto" element={<Contacto />}/>
                 <Route path="*" element = {<NotFound />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;