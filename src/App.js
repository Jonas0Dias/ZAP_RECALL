import React from 'react'
import styled from 'styled-components';
import GlobalStyle from './Components/GlobalStyles'
import Perguntas from './Components/Perguntas';
import Footer from './Components/Footer';
import cards from './Components/cards';
function App() {
  const [contador, setContador] = React.useState(0)
  const [entrada,setEntrada] = React.useState(true)
  const[resultadoicone, setResultadoIcone] = React.useState('teste')

  return (
    <>
      <GlobalStyle />
      <TelaEntrada display={entrada}>
        <div>
          <img src='assets/img/logo.png'></img>
          <h1>ZapRecall</h1>
          <button onClick={()=> setEntrada(!entrada)}>Iniciar Recall</button>
        </div>
      </TelaEntrada>
      <Container display={entrada}>
        <LogoContainer>

          <img src="assets/img/logo.png" ></img>
          <h1>ZapRecall</h1>


        </LogoContainer>
        <Perguntas contador={contador} setContador={setContador} resultadoicone={resultadoicone} setResultadoIcone={setResultadoIcone}>

        </Perguntas>
        <Footer contador={contador} setContador={setContador} resultadoicone={resultadoicone} setResultadoIcone={setResultadoIcone}></Footer>
      </Container>

    </>
  );
}

export default App;

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  font-family: 'Recursive';
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: ${props => props.display ? 'none' : 'flex'};
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
      
      font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
    }
`

const TelaEntrada = styled.div`
    min-width: 100%;
    min-height: 100vh;
    position:absolute;
    background-color: #FB6B6B;
    display:${props => !props.display ? 'none' : 'flex'};
flex-direction: column;
align-items: center;
div{
    background-color: #FB6B6B;
    display:flex;
  flex-direction: column;
  align-items: center;
  margin:auto;

}
    h1{
      font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;
margin-top:20px;
      margin-bottom:20px;
color: #FFFFFF;
    }

    button {
      font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */

text-align: center;

color: #D70900;
    }
`



