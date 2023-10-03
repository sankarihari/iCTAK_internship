import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 50px;
    background-color: white;
    color:black;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 30px;
    font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
      Recommended movies
    </Container>
  )
}

export default Announcement