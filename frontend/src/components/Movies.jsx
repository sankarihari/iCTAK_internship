import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  moviecards  from '../data'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
`

const Movies = () => {
    const navigate = useNavigate();
  const [data,setData]=useState([]);

  const fetchDataFromApi=()=>{
    axios.get("http://localhost:5000/api/viewpost")
    .then((response)=>{
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(()=>{
    fetchDataFromApi();
  }, []);

  const bookinghandler = (e) => {
    navigate('/moviedetails')

  }
    return (
        <Container>
            {data.map((item)=>(
              

          
            <div className="card h-100" sx={{ maxWidth: 50 }}>
                <img src={item.img_url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <h6 class="card-text">{item.category}</h6>
                    <h6 class="card-text">{item.language}</h6>
                    <a onClick={bookinghandler} class="btn btn-primary">BOOK NOW</a>
                </div>
            </div>
            )   
        )}
           
        </Container>
    )
}

export default Movies