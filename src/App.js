// eslint-disable
import React, { useState, useContext } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import './App.css'
import Data from './data'
import Detail from './components/Detail'
import axios from 'axios'

export let 재고context = React.createContext()

function App() {
  const [shoes, shoes변경] = useState(Data)
  const [재고, 재고변경] = useState([10, 11, 12])

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
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map((data, i) => {
                  return <Card shoes={data} key={i} />
                })}
              </div>
            </재고context.Provider>
            <button
              className="btn btn-primary"
              onClick={() => {
                // axios.post('서버URL', {id: 'lightixxx', pw: '1234'})
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    shoes변경([...shoes, ...result.data])
                  })
                  .catch(() => {
                    console.log('실패')
                  })
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>

        <Route path="/:id">
          <h2>아무 문자열을 입력했을 때 보여줌</h2>
        </Route>
      </Switch>
    </div>
  )
}

const Card = ({ shoes }) => {
  let 재고 = useContext(재고context)
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
      {재고[shoes.id]}
      <Test />
    </div>
  )
}

const Test = () => {
  let 재고 = useContext(재고context)
  return <p>재고: {재고[0]}</p>
}

export default App
