import { Button, Link } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { KeyboardArrowRight, TheaterComedy } from '@mui/icons-material';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dbse65i-93e9ce8a-2c76-43f3-ad5a-dffc39877ea5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGJzZTY1aS05M2U5Y2U4YS0yYzc2LTQzZjMtYWQ1YS1kZmZjMzk4NzdlYTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ecWdcOwuv6opCTZkZRlHfH3O3rzGCWgyDn_iU8EGjQM")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content:center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 37%;
    width: 80%;   
`;
const Applogo = styled.span`
    margin: 20px;
    cursor: pointer;
    align-items: center;
    color:black;
    size: 50px;
`;
const Appname = styled.div`
    font-size: 30px;
    color: #100101;
    font-weight: 50%;
`;
const Wrapper = styled.div`
    width: 85%;
    height: 60%;
    padding: 30px;
    margin-right: 20%;
    background:  rgba(1, 1, 1, 1);
    margin-top: 10%;
    color: white;
`;
const Title = styled.h1`
    text-align: center;
`;
const Info = styled.h1`
    text-align: center;
    font-size: medium;
`;


const Home = () => {
  return (
    <div>
      <Container>
        
        <Left>
          <Applogo>
            <TheaterComedy style={{ fontSize: 50 }} />
          </Applogo>
          <Appname>
            <b>MovieMania</b>
          </Appname>
        </Left>

        <Wrapper>
          <Title>
            <h1 style={{ fontSize: 69 }}><strong>Enjoy latest movies</strong></h1>
            <h4 style={{ fontFamily: 'Monospace' }}>Join today.Cancel anytime.</h4>
            <h5 style={{ fontFamily: 'Cursive', fontSize: 15 }}>GET STARTED</h5>
            <Button href="/signup" style={{ width: '30%' }} variant="contained" endIcon={<KeyboardArrowRight />}>Signup</Button>
          </Title>
          <br></br>
          <Info>
            <p style={{ fontFamily: 'cursive', color: "#00bfff" }}>Already a member?</p>
            <Link href="/login" underline="none" style={{ color: "white" }}>
              Login
            </Link>
          </Info>
        </Wrapper>

      </Container>
    </div>
  );
};

export default Home