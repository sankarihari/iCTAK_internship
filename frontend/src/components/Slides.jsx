import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  object-fit: cover;
`;

const Slides = () => {
  return (
    <Container>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://bollywoodmascot.com/wp-content/uploads/maxresdefault-7.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src=" https://www.nowrunning.com/content/movie/2023/rdx-26817/bg4_rdx.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  )
}

export default Slides