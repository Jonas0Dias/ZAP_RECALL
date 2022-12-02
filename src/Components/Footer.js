import styled from 'styled-components';
import cards from './cards';
export default function Footer(props){
    return(
        <Rodape>0/{cards.length} Concluídos</Rodape>
    )
}


const Rodape = styled.div`
width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;


`