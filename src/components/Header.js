import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import {Link} from "react-router-dom"

function Header (props){
    return ( 
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/"><img
        src="https://img.freepik.com/free-vector/console-ninja-gaming-logo-design_100735-52.jpg?size=626&ext=jpg"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar.Brand href="/">Game Lounge</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="./MyGames">My Games</Nav.Link>
      <Nav.Link href="./Form">Sign-Up</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default Header