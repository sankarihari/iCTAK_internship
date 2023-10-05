import { AccountCircle, Home, Logout, TheaterComedy } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 60px;  
    background-color: #1f2b2d;
`;
const Wrapper = styled.div`
    
    display:flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    
`;
const Applogo = styled.span`
  margin: 20px;
  cursor: pointer;
  align-items: center;
  color:white;
  size: 30px;
`;
const Appname = styled.div`
    font-size: 30px;
    color: whitesmoke;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 7vh;
`;
const MenuItem = styled.div`
    size:20px ;
    cursor: pointer;
    margin-left: 25px;
    color: white;
`;



const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Applogo >
                        <TheaterComedy />
                    </Applogo>
                    <Appname>
                        MovieMania
                    </Appname>
                </Left>
                <Right>
                    <MenuItem>
                        <a className="nav-link active" aria-current="page" href="/userdashboard"><Home /></a>
                    </MenuItem>
                    <MenuItem>
                        <a className="nav-link active" aria-current="page" href=""><AccountCircle fontSize="large" /></a>
                    </MenuItem>
                    <MenuItem>
                        <a className="nav-link active" aria-current="page" href="/"><Logout fontSize="large" /></a>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}



export default Header