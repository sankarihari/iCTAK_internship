import { Avatar, Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    margin-right: 10vh;
    flex-direction: column;
`;
const Image = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;  
`;
const Text = styled.h2`
    margin-left: 10px;
`;
const Type = styled.h1`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 60px;
`;


const Cast = () => {
  const [cast, setCast] = useState([]);

  const fetchDataFromApi = () => {
    axios.get("http://localhost:5000/api/viewpost")
      .then((response) => {
        console.log(response.data);
        setCast(response.data)
      });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);


  return (
    <div>
      {cast.map((item) => (
        <Wrapper>
          <Text>Cast</Text>
          <br></br>
          <Image>
            <Stack direction="row" spacing={5}>
              <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="" />
            </Stack>
          </Image>
          <Type>
            <Stack direction="row" spacing={5}>
              <Typography sx={{ width: 100, height: 100 }} >{item.cast}</Typography>
            </Stack>
          </Type>
        </Wrapper>
      ))}
    </div>
  )
}

export default Cast