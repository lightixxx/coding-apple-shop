// import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Detail = ({ shoes }) => {
  let { id } = useParams()
  let history = useHistory()

  let 찾은상품 = shoes.find((상품) => {
    return 상품.id == id
  })

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
          <button className="btn btn-primary">주문하기</button>
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
        </div>
      </div>
    </div>
  )
}

export default Detail
