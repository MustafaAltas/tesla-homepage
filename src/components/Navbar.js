/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import styled from "styled-components";
import icon from "../assets/icon.svg";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  /* position: absolute; */
  top: 0;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1.5rem;
    img {
      width: 200px;
      height: 35px;
    }


    a {
      display: inline-block;
      padding: 0.7rem;
      /* border-radius: 10rem; */
      color: black;
      /* text-transform: uppercase; */
      font-size: 1rem;
      letter-spacing: 0.15rem;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration: none;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        z-index: -2;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        border-radius: 10rem;
        z-index: -1;
      }
      &:hover {
        color: black;
        &:before {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 970px) {
    .nav-first {
      display: none;
    }
    .nav-second {
      display: none;
    }
    .nav-third {
      display: flex;
    }
  }
  @media screen and (min-width: 971px) {
    .nav-third {
      display: none;
    }
  }
`;
function Navbar() {
  const [sideBarIsActive, setSideBarIsActive] = useState(false);
  const handleSideBar = (e) => {
    e.preventDefault();
    setSideBarIsActive(!sideBarIsActive);
  };

  return (
    <Wrapper>
      <div className="nav">
        <img src={icon} alt="" />
        <div className="nav-first">
          <a href="#models">Model S</a>
          <a href="#model3">Model 3</a>
          <a href="#modelx">Model X</a>
          <a href="#modely" >Model Y</a>
          <a href="#solarRoof">Solar Roof</a>
          <a href="#solarPanels">Solar Panels</a>
        </div>
        <div className="nav-second">
          <a href="www.google.com">Shop</a>
          <a href="www.google.com">Account</a>
          <a href="www.google.com">Menu</a>
        </div>
        <div className="nav-third">
          <a href="www.google.com" onClick={handleSideBar}>
            Menu
          </a>
        </div>
        <SideBar sideBarIsActive={sideBarIsActive} handleSideBar={handleSideBar}/>
      </div>
    </Wrapper>
  );
}

export default Navbar;
