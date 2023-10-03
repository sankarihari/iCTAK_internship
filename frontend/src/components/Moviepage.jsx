import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { moviepage } from '../data';

const Container = styled.div`
  width: 100%;
  height: 90vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
`;
const Content = styled.div`
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Button = styled.button`
  width: 30%; 
  padding: 15px 20px;
  background-color: #1f2b2d;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


const Moviepage = () => {    
  const navigate = useNavigate();
  // const [data,setData]=useState([]);

  // const fetchDataFromApi=()=>{
  //   axios.get("http://localhost:5000/api/viewpost")
  //   .then((response)=>{
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // };

  // useEffect(()=>{
  //   fetchDataFromApi();
  // }, []);

  const bookinghandler = (e) => {
    navigate('/booktickets')

  }
  return (
    <div>
      <Container>
        <Wrapper>
          {moviepage.map((item,index) => (
            <div class="card2 mb-3 " >
              <div class="row g-0">
                <div class="col-md-3">
                  <img src={item.img_url} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h1 class="card-title">{item.title}</h1>
                    <h6 class="card-title">{item.category}</h6>
                    <br></br>
                    <p class="card-text"><strong>{item.content}</strong></p>
                    <Content>
                      <Left>
                        <Rating name="read-only" value={item.rating} readOnly />
                      </Left>
                      <Right>
                        <Button onClick={bookinghandler}>BOOK NOW</Button>
                      </Right>
                    </Content>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Wrapper>
      </Container>


    </div>
  )
}

export default Moviepage