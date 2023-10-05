import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
  
`

      const Movies = () => {
        const navigate = useNavigate();
        const [data, setData] = useState([]);

        const fetchDataFromApi = () => {
          axios.get("http://localhost:5000/api/viewpost")
            .then((response) => {
              console.log(response.data);
              setData(response.data);
            });
        };

        useEffect(() => {
          fetchDataFromApi();
        }, []);

        const bookinghandler = (e) => {
          navigate('/moviedetails')
        }

  return (
    <Container>
      {data.map((item) => (
        <div className="card h-100" sx={{ maxWidth: 50 }}>
          <img src={item.img_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-text">{item.category}</h6>
            <h6 className="card-text">{item.language}</h6>
            <a onClick={bookinghandler} className="btn btn-primary">BOOK NOW</a>
          </div>
        </div>
      )
      )}

    </Container>
  )
}

export default Movies