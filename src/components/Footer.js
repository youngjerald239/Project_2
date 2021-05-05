import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import {Link} from "react-router-dom"

function Footer (props){
    return ( 
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">GameLounge</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="./mygames">My Games</Link>
      <Link to="./Form">Sign-Up</Link>
    </Nav>
  </Navbar>
    )
}

export default Footer