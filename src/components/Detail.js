import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import '../styles/Detail.scss'
import { 재고context } from '../App.js'

const Detail = (props) => {
  let { id } = useParams()
  let history = useHistory()
  const [alert, alert변경] = useState(true)
  const [inputData, inputData변경] = useState('')
  let detail재고 = useContext(재고context)
  const [누른탭, 누른탭변경] = useState(0)
  let dispatch = useDispatch()

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false)
    }, 2000)
    return () => {
      clearTimeout(타이머)
    }
  }, [alert])

  let 찾은상품 = props.shoes.find((상품) => 상품.id == id)

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
        <div className="col-md-6">
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
              props.dispatch({
                type: '항목추가',
                data: { id: 찾은상품.id, name: 찾은상품.title, quan: 1 },
              })
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
        </div>
      </div>
    </div>
  )
}

function state를props화(state) {
  console.log(state)
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  }
}

export default connect(state를props화)(Detail)
