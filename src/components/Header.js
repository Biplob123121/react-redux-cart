import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: '60px' }}>
            <Container>
                <Navbar.Brand href="#home">React Redux</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                    </Badge>
                </Navbar.Collapse>
            </Container>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                    <i className='fas fa-close smallclose'
                        onClick={handleClose}
                        style={{ position: "absolute", top: 5, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                    <p style={{ fontSize: 22 }}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                </div>
            </Menu>
        </Navbar>
    );
};

export default Header;