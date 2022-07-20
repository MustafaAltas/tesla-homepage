import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  a {
    text-decoration:none;
    color :black
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (max-width:600px){
    flex-direction: column;
  }
`
function Footer() {
  return (
    <FooterWrapper>
     <a href="www.google.com">Tesla Ⓒ {new Date().getFullYear()}</a>
     <a href="www.google.com">Privacy & Legal</a>
     <a href="www.google.com">Vehicle Recalls</a>
     <a href="www.google.com">Contact</a>
     <a href="www.google.com">Careers</a>
     <a href="www.google.com">News</a>
     <a href="www.google.com">Engage</a>
     <a href="www.google.com">Locations</a>
    </FooterWrapper>
  )
}

export default Footer
