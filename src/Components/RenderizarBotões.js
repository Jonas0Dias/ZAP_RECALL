import styled from 'styled-components';
import cards from './cards';
import React from 'react'

export default function RenderizaBotões(props){
    const [resultado, setResultado] = React.useState({cor:'teste',icone:'teste'})
        return(
            <>
                    <ButtonQuestionClosed data-test="flashcard" display={props.listaclicados.includes(props.c) ? true : false}>
                        <h1 data-teste="flashcard-text">Pergunta {cards.indexOf(props.c) + 1} </h1>
                        <ion-icon data-teste="play-btn" name="caret-forward-outline"
                            onClick={() => {  
                                props.setListaClicados([...props.listaclicados, props.c])
                               
                            }}

                        >

                        </ion-icon>
                    </ButtonQuestionClosed>



                    <ButtonQuestionOpened data-test="flashcard" display={!props.listaclicados.includes(props.c) || props.listaclicados2.includes(props.c) ? true : false}>
                        <h1 data-teste="flashcard-text"> {props.c.question}</h1>
                        <img data-teste="turn-btn" src='assets/img/seta_virar.png'
                            onClick={() => {
                                props.setListaClicados2([...props.listaclicados2, props.c])
                            }}
                        ></img>

                    </ButtonQuestionOpened>
                    



                    <ButtonAnswer data-test="flashcard" display={!props.listaclicados2.includes(props.c) || props.listaclicados3.includes(props.c) ? true : false}>
                        <h1 data-teste="flashcard-text"> {props.c.answer}</h1>
                        <div>
                            <button
                            data-teste="no-btn"
                                onClick={() => {
                                    
                                    props.setContador(props.contador+1)
                                    const novocontador=props.contador+1
                                    console.log(novocontador)
                                    props.setListaClicados3([...props.listaclicados3, props.c])
                                    setResultado({cor:'#FF3030',icone:'assets/img/icone_erro.png'}) 
                                    props.setResultadoIcone(resultado.icone)
                                    console.log(resultado.icone)
                                }}>Não Lembrei
                            </button>

                            <button 
                                data-teste="partial-btn"
                                onClick={() => {
                                props.setContador(props.contador+1)
                                props.setListaClicados3([...props.listaclicados3, props.c])
                                setResultado({cor:'#FF922E',icone:'assets/img/icone_quase.png'}) 
                                
                            }}>Quase não lembrei
                            </button>


                            <button 
                                data-teste="zap-btn"
                                onClick={() => {
                                props.setContador(props.contador+1)
                                props.setListaClicados3([...props.listaclicados3, props.c])
                                setResultado({cor:'#2FBE34',icone:'assets/img/icone_certo.png'})    
                                
                                                 
                            }} >Zap!
                            </button>
                        </div>
                    </ButtonAnswer>




                    <ButtonFinish data-test="flashcard"  cor={resultado.cor} display={!props.listaclicados3.includes(props.c) ? true : false}>
                        
                            <h1 data-teste="flashcard-text">Pergunta {cards.indexOf(props.c) + 1}</h1>
                            <img data-test = {resultado.icone === 'assets/img/icone_erro.png' ? 'no-icon' : resultado.icone === 'assets/img/icone_quase.png' ? 'partial-icon' : resultado.icone === 'assets/img/icone_certo.png' ? 'zap-icon' : ''} src={resultado.icone}></img>
                            

                    </ButtonFinish>
                    </>
                    
        )
    }

const ButtonFinish = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');



display:${props => props.display ? 'none' : 'flex'};
text-decoration-line: line-through;
color:${props=> props.cor};
align-items: center;
background-color:white;
justify-content: space-between;
text-align: center;
height: 65px;
margin-bottom:5px;
border-radius: 5px;  
h1{
    margin-left:15px;
   
              font-family: 'Recursive';
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
    }
img{
  margin-right:20px;
}
`


const ButtonAnswer = styled.div`
display:${props => props.display ? 'none' : 'flex'};
background:#FFFFD4;
flex-direction: column;
align-items: center;
min-height: 100px;
justify-content:space-between;
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
  margin-top:18px;
}
ion-icon{
  margin-right:20px;
}

div{
    width:90%;
    margin-bottom:10px;
    display:flex;
    justify-content:space-between;
    
}

button{
    width:85px;
    height: 37.17px;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #FFFFFF;
    &:nth-child(1){
        background:${'#FF3030'}
    }
    &:nth-child(2){
        background:${'#FF922E'}
    }
    &:nth-child(3){
        background:${'#2FBE34'}
    }

}
`


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
              font-family: 'Recursive';
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
              color: #333333;
            }
            ion-icon{
              margin-right:20px;
              width: 20px;
height: 23px;


            }
          `

const ButtonQuestionOpened = styled.div`   

@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900;1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

          display:${props => props.display ? 'none' : 'flex'};
          min-height: 100px;
          justify-content: space-between;
          height: 65px;
          font-family: 'Recursive';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          background:#FFFFD4;
          margin-bottom:5px;
          border-radius: 5px;
          background: #FFFFD5;
         box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
         position:relative;
         
          h1{
            margin-top: 18px;
            margin-left:15px;
          }
          img{
            margin-right:20px;
            margin-bottom:10px;
            position:absolute;
            bottom:0;
            right:0;
           
          }`
