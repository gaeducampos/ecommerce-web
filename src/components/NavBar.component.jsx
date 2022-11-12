import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import CustomBtn from './CategoryBtn.component';



// SE CREA EL COMPONENT NAVBAR, ESTA ES LA BARRRA DE NAVEGACION EN EL WEBSITE
const NavBar = ({ filterProducts, setCurrentDataDisplay }) => {

  // Se crea la representacion del template de bootstrap para la barra de navegacion, pero le agregamos logica de nuestro programa
  return (
    <>
      {['sm'].map((expandBtn) => (
        <Navbar key={expandBtn} bg="light" expand={expandBtn} className="mb-3">
          <Container fluid>
            {/* se utiliza el componente "Link" de la libreria de enrutamiento, este boton se encargara de enrutar a los usuairos a la pagina prncipial y también de darle un valor al titulo de la pagina para que este sea dinamico */}
            <Link to="/" className='nav-title' onClick={() => setCurrentDataDisplay("Todos nuestros Productos")} >Ecommerce Fake Store 🏬</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expandBtn}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expandBtn}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expandBtn}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expandBtn}`}>
                  Nuestros productos
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* esta  es la representacion de lo botones que vemos en la barra de negacion y cada uno tiene la funcionalidad de que cuando se genere el evento "onClick" hagan algo, cuando se les da click, activan la funcion que hace que filtre el arreglo, y filtran bajo el determinado tipo que tenga el boton*/}

                {/* La funcion "filterProcts" se ejecutar al dar click al boton y hace que se filtre el arreglo y la funcion "setCurrentDataDisplay" se ejecuta y esta le pasa el valor al titulo de la pagina para que sea dinamico */}
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <CustomBtn category={"electronics"} filterProducts={filterProducts} setCurrentDataDisplay={setCurrentDataDisplay} />
                  <CustomBtn category={"men's clothing"} filterProducts={filterProducts} setCurrentDataDisplay={setCurrentDataDisplay} />
                  <CustomBtn category={"jewelery"} filterProducts={filterProducts} setCurrentDataDisplay={setCurrentDataDisplay} />
                  <CustomBtn category={"women's clothing"} filterProducts={filterProducts} setCurrentDataDisplay={setCurrentDataDisplay} />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;