import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import '../styles/Detail.scss'
import { 재고context } from '../App.js'

const Detail = ({ shoes, 재고, 재고변경 }) => {
  let { id } = useParams()
  let history = useHistory()
  const [alert, alert변경] = useState(true)
  const [inputData, inputData변경] = useState('')
  let detail재고 = useContext(재고context)
  const [누른탭, 누른탭변경] = useState(0)

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false)
    }, 2000)
    return () => {
      clearTimeout(타이머)
    }
  }, [alert])

  let 찾은상품 = shoes.find((상품) => 상품.id == id)

  let 박스 = styled.div`
    padding: 20px;
  `
  let 제목 = styled.h4`
    font-size: 25px;
    color: ${(props) => props.색상};
  `

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              재고변경([9, 10, 11])
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack()
              // 특정 경로로 이동시키려면
              // history.push('/hello')
            }}
          >
            뒤로가기
          </button>

          <박스>
            <제목 색상="blue">안녕하세요1</제목>
            <제목 색상={'red'}>안녕하세요2</제목>
            <제목 색상={'#0066ff'}>안녕하세요3</제목>
          </박스>

          {inputData}
          <input
            onChange={(e) => {
              inputData변경(e.target.value)
            }}
          />

          {alert === true ? (
            <div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>
          ) : null}

          <Info 재고={재고} />
          {detail재고} */}

        <div className="col-md-4">
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  누른탭변경(0)
                }}
              >
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  누른탭변경(1)
                }}
              >
                Option 2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  누른탭변경(2)
                }}
              >
                Option 3
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent 누른탭={누른탭} />
        </div>
      </div>
    </div>
  )
}

function TabContent({ 누른탭 }) {
  if (누른탭 === 0) {
    return <div>내용0</div>
  } else if (누른탭 === 1) {
    return <div>내용1</div>
  } else if (누른탭 === 2) {
    return <div>내용2</div>
  }
}

// class Detail2 extends React.Component {
//   componentDidMount() {
//     //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
//   }
//   componentWillUnmount() {
//     //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드
//   }
// }

// function Info({ 재고 }) {
//   return <p>재고 : {재고[0]}</p>
// }

export default Detail
