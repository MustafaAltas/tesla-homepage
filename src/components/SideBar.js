import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar-active {
    width: 180px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: aliceblue;
    z-index: 999;
    transition: 0.5s;
  }
  .sidebar-nonavtive {
    width: 0px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: aliceblue;
    z-index: 999;
    transition: 0.5s;
  }
  .sidebar-icon {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
  }
  .sidebar-icon h1 {
    cursor: pointer;
  }
  .sidebar-btn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
function SideBar({ sideBarIsActive, handleSideBar }) {
  return (
    <SideBarWrapper>
      <div
        className={`${
          sideBarIsActive ? "sidebar-active" : "sidebar-nonavtive"
        }`}
      >
        <div className={`${sideBarIsActive ? "sidebar-icon" : null}`}>
          <h1 onClick={handleSideBar}>&times;</h1>
        </div>
        <div className={`${sideBarIsActive ? "sidebar-btn" : null}`}>
          <a href="www.google.com">Model S</a>
          <a href="www.google.com">Model 3</a>
          <a href="www.google.com">Model X</a>
          <a href="www.google.com">Model Y</a>
          <a href="www.google.com">Solar Roof</a>
          <a href="www.google.com">Solar Panels</a>
          <a href="www.google.com">Shop</a>
          <a href="www.google.com">Account</a>
          <a href="www.google.com">Menu</a>
        </div>
      </div>
    </SideBarWrapper>
  );
}

export default SideBar;
