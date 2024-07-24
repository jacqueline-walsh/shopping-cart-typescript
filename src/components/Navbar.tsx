import React from 'react';
import { Navbar as NavBarBS, Container, Nav, Button } from 'react-bootstrap';
import { Cart4 } from 'react-bootstrap-icons';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="store">Store</Nav.Link>

          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <Cart4 />
            <div
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBS>
  );
};

export default Navbar;
