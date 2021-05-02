import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import {Link} from "react-router-dom"

function Header (props){
    return ( 
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">GameLounge</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="./mygames">My Games</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
}

export default Header