import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import { Button } from '@mui/material';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';


const Container = styled.div`
flex:1;
    width: 100%;
    height: 150vh;
    background-color:#d2d5d8;
`;
const Wrapper = styled.h1`
  width: 100%;
  padding: 20px;
  background-color: #b79999;
  flex-direction: column;
`;
const Text = styled.div`
   margin-top: 20px;
   font-size: x-large   
`;
const Cardinfo = styled.div`
   margin-top: 15px;
   margin-left: 17%;
   height: 60vh; 
`;
const Info = styled.div`
   margin-top: 15px;
   margin-left: 18%; 
   width: 63%;
  padding: 20px;
  background-color: white;
  justify-content: flex-end;  
`;


const Booking = () => {
    return (
        <Container>
            <Header />            
            <Wrapper>
                <Text style={{ fontFamily: 'Cursive' }}>Roky Aur Rani
                    <p style={{ fontFamily: 'Monospace' }}>Drama</p>
                </Text>
            </Wrapper>
            <Info>
                <Button variant="outlined" color="error">Housefull</Button>
                <Button variant="outlined" color="success">Available</Button>
                <Button variant="outlined">Fast filling</Button>
            </Info>
            <Cardinfo>
                <div class="card" style={{ width: 800, height: 360 }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img style={{ height: 360 }} src="https://m.media-amazon.com/images/M/MV5BNmYyNjNhZTEtZDYxNS00MTBjLWEwMWQtZmZiOTEyNzgxYjkyXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Show time </h5>
                                <Button variant="outlined" color="error">10:00pm</Button>
                                <Button variant="outlined" color="success">10:00pm</Button>
                                <Button variant="outlined">10:00pm</Button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">No.of ticket</h5>
                                <Button variant="Text" color="error"><Add/></Button>
                                <Button variant="outlined">4</Button>
                                <Button variant="Text" color="success"><Remove/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Cardinfo>
            <Footer />
        </Container>
    )
}

export default Booking