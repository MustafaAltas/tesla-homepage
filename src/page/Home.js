import React from "react";
import styled from "styled-components";
import Accessories from "../components/Accessories";
import Footer from "../components/Footer";
import Models from "../components/Models";
import Navbar from "../components/Navbar";
import { datas } from "../helper/contain";

const ModelWrapper = styled.div`
  .model-info {
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.15rem;
    a {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
      transition: all 0.5s;
    }
    a:hover {
      border-bottom: 3px solid black;
    }
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }
  .model-btn{
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .custom {
    width: 264px;
    height: 40px;
    padding: 4px 24px 4px 24px;
    border-radius: 2rem;
    background-color: #3e4145;
    border: none;
    color: white;
    cursor: pointer;
  }
  .exis {
    width: 264px;
    height: 40px;
    padding: 4px 24px 4px 24px;
    border-radius: 2rem;
    background-color: #e7e8e7;
    border: none;
    color: black;
    cursor: pointer;
  }
`;
function Home() {
  return (
    <ModelWrapper>
      <Navbar />
      {
        datas.map((item,index) => {
          return <Models item={item} key={index}/>
        })
      }
      <Accessories/>
      <Footer />
    </ModelWrapper>
  );
}

export default Home;
