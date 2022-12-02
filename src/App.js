import React from 'react'
import styled from 'styled-components';
import GlobalStyle from './Components/GlobalStyles'
import Perguntas from './Components/Perguntas';
import Footer from './Components/Footer';
import cards from './Components/cards';
function App() {
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <LogoContainer>
          <img src="assets/img/logo.png" ></img>
          <h1>ZapRecall</h1>
        </LogoContainer>
        <Perguntas>
          
        </Perguntas>
        <Footer ></Footer>
      </Container>

    </>
  );
}

export default App;

const Container = styled.div`

  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`

const LogoContainer = styled.div`

  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
    img{
      width: 52px;
    }
    h1{
      dfont-family: 'Righteous';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #FFFFFF;
      margin-left: 20px;
    }
`



