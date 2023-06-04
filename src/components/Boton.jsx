// se importa el componente button desde react bootstrap
import Button  from "react-bootstrap/Button";

//metodo que recibe argumentos para visualizar el Botton a utilizar en el views Contacto 
const Boton  = (props) =>{
    const {texto} = props;
    return <Button variant ="danger" type = "submit">{texto}</Button>
} ;

export default Boton;