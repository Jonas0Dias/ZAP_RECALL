
import styled from 'styled-components';
import Buttons from './Buttons';

export default function Perguntas(props) {

    return (

        <ContainerAllQuestions>
            <Buttons  contador={props.contador} setContador={props.setContador} resultadoicone={props.resultadoicone} setResultadoIcone={props.setResultadoIcone}></Buttons>
        </ContainerAllQuestions>


    )
}


const ContainerAllQuestions = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
//   background: white;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: space-between;

`

