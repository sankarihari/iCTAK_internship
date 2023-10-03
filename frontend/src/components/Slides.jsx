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
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://bollywoodmascot.com/wp-content/uploads/maxresdefault-7.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src=" https://www.nowrunning.com/content/movie/2023/rdx-26817/bg4_rdx.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </Container>
  )
}

export default Slides