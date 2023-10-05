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


const Moviepage = (id) => {    
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
            <div className="card2 mb-3 " >
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={item.img_url} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h1 className="card-title">{item.title}</h1>
                    <h6 className="card-title">{item.category}</h6>
                    <br></br>
                    <p className="card-text"><strong>{item.content}</strong></p>
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