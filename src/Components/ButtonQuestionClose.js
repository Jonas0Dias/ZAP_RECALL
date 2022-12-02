import styled from 'styled-components';
import cards from './cards';
import React from 'react'
export default function ButtonQuestionClose(props){
    
    return(
        <></>
    )
}
const ButtonQuestionClosed = styled.div`   
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