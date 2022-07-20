import React from "react";
import styled from "styled-components";
import acc from "../assets/accessor.jpeg"
const AccessoriesWrapper = styled.div`
  height: 100%;
  background-image: url(${acc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  .acc {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    padding-bottom: 10rem;
  }
`;
function Accessories() {
  return (
    <AccessoriesWrapper>
      <div className="acc" data-aos="fade-up" data-aos-duration="3000">
        <div className="model-info">
          <h1>Accessories</h1>
        </div>
        <div className="model-btn">
          <button className="custom">Shop Now</button>
        </div>
      </div>
    </AccessoriesWrapper>
  );
}

export default Accessories;
