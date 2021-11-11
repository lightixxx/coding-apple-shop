// eslint-disable
import { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import './App.css'
import Data from './data'
import Detail from './components/Detail'

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  const [shoes, shoes변경] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="background">
            <h2>20% Season Off</h2>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featuerd content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((data, i) => {
                return <Card shoes={data} key={i} />
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <h2>아무 문자열을 입력했을 때 보여줌</h2>
        </Route>
      </Switch>
    </div>
  )
}

const Card = ({ shoes }) => {
  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (shoes.id + 1) + '.jpg'
        }
        className="shoes-image"
      />
      <h4>{shoes.title}</h4>
      <strong>{shoes.price}</strong>
      <p>{shoes.content}</p>
    </div>
  )
}

export default App
