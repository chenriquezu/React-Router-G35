import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//Importación del componente Boton para que sea habilite siempre y cuando el usurio complete los datos.
import Boton from '../components/Boton'


export default function Navigation() {
  
  // se definen useState para el correo y la descripción esto para validar el contenido de los campos y si estos son llenados se habilitara el boton enviar
  const [correo,setCorreo]= useState('');
  const [descripcion,setDescripcion] = useState('');

  return (
    <div className="App container w-50">
      <form >
          <div>
              <label htmlFor='name'>Correo</label>
              <input type = 'email'
                      id='name' 
                      defaultValue = {correo} 
                      onChange={(e)=> {
                            setCorreo(e.target.value);
                      }}
                      className='form-control' >
              </input>
          </div>
          
          <div>
              <label htmlFor='name'>Descripción</label>
              <input type = 'text'
                      id='name' 
                      defaultValue = {descripcion} 
                      onChange={(e)=> {
                            setDescripcion(e.target.value);
                      }}
                      className='form-control' >
              </input>
          </div>

          <div className='mt-3 text-center'>
          {/* Valida si el correo y la descripción vienen con datos llama al componente boton para ser desplegado. */}
          {correo.length > 0 && descripcion.length > 0 && <Boton texto = "Enviar"/>}
          </div>
 
      </form>
    </div>

     );
}
