import {  Avatar, Box, Button, Card, CardContent, CardHeader, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    height: 90vh; 
    margin-top: 5vh;
    width: 50%;
    margin-left: 10vh;
    border:10px doted black;
    flex-direction: column;
`;
const Text = styled.h2` 
  margin-left: 10px;
`;


const Review = () => {
  

  const[data,setData]=useState([]);
  const card = (
    <React.Fragment>
       {data.map((item)=>(
      <CardContent>    
        <Avatar alt="Remy Sharp" src="" />
        <Typography variant="h6" component="div">
          {item.username}
        </Typography>
        <Rating name="size-small" defaultValue={2} size="small" />
        <Typography variant="body2">
          {item.comment}
        </Typography>
  
  
      </CardContent>
      ))}
    </React.Fragment>
  );
  
  const fetchDataFromApi=()=>{
    axios.get("http://localhost:5000/api/getreview")
    .then((response)=>{
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(()=>{
    fetchDataFromApi();
  },[]);

  return (
    <div>
     <Text>Top review
        <br></br>
      <Button href='/addreview'>Add your review</Button>
      </Text>
      
      <Container>
        <Box sx={{ minWidth: 100 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <br></br>
        
      </Container>
    </div>
  )
}

export default Review