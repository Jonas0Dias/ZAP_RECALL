import styled from 'styled-components';
import cards from './cards';
import React from 'react'
export default function ButtonQuestionOpen(props){
    const [clicado,setClicado] = React.useState(false)
    return(
        <>
            {cards.map(c =>
                
                    <ButtonQuestionOpened display={props.listaclicados.includes(c) ? true : false}>
                        <h1> {c.question}</h1>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        
                    </ButtonQuestionOpened>
                
            )
            }
        </>
    )
}
const ButtonQuestionOpened = styled.div`   
            display:${props => props.display ? 'none' : 'flex'};
            align-items: center;
            background-color:white;
            justify-content: space-between;
            text-align: center;
            height: 65px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            margin-bottom:5px;
            border-radius: 5px;
            h1{
              margin-left:15px;
            }
            ion-icon{
              margin-right:20px;
            }
          `