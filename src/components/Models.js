/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import styled from "styled-components";


const WrapperModel3 = styled.div`
  height: 100%;
  z-index: -1;
  .model {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    padding-bottom: 10rem;
  }

`;

function Models({item}) {
  const [forResponsive,setForResponsive] = useState();
  const getWidth = () => {
    setForResponsive(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
}, []);

  return (
    <WrapperModel3>
      <div data-aos="fade-up" data-aos-duration="3000" className="model" style={{backgroundImage:`url(${item.img})`,backgroundRepeat:"no-repeat", backgroundSize:`${forResponsive < 971 ? "contain" : "cover"}`, backgroundPosition:"center"}} id={item.id}>
        <div className="model-info">
          <h1>{item.name}</h1>
          <p>
            Order Online for <a href="">Touchless Delivery</a>
          </p>
        </div>
        <div className="model-btn">
          <button className="custom">CUSTOM ORDER</button>
          <button className="exis">EXISTING INVENTORY</button>
        </div>
      </div>
    </WrapperModel3>
  );
}

export default Models;
