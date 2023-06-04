import { Container } from "react-bootstrap";
import Contacto from  "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">
          <center> Cuentanos, ¿ En que te podemos ayudar?</center>
      </h1>
      <Contacto />
    </Container>
  );
};
