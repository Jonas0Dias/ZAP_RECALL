
import styled from 'styled-components';
import Buttons from './Buttons';

export default function Perguntas(props) {
    
    return (

        <ContainerAllQuestions>
            <Buttons ></Buttons>
        </ContainerAllQuestions>


    )
}


const ContainerAllQuestions = styled.div`

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

