import styled from 'styled-components';
import cards from './cards';
import React from 'react'

export default function RenderizaBotões(props){
    const [resultado, setResultado] = React.useState({cor:'',icone:''})

        return(
            <>
                    <ButtonQuestionClosed display={props.listaclicados.includes(props.c) ? true : false}>
                        <h1>Pergunta {cards.indexOf(props.c) + 1}</h1>
                        <ion-icon name="caret-forward-outline"
                            onClick={() => {  
                                props.setListaClicados([...props.listaclicados, props.c])
                               
                            }}

                        >

                        </ion-icon>
                    </ButtonQuestionClosed>



                    <ButtonQuestionOpened display={!props.listaclicados.includes(props.c) || props.listaclicados2.includes(props.c) ? true : false}>
                        <h1> {props.c.question}</h1>
                        <ion-icon name="add-circle-outline"
                            onClick={() => {
                                props.setListaClicados2([...props.listaclicados2, props.c])
                            }}
                        ></ion-icon>

                    </ButtonQuestionOpened>
                    



                    <ButtonAnswer display={!props.listaclicados2.includes(props.c) || props.listaclicados3.includes(props.c) ? true : false}>
                        <h1> {props.c.question}</h1>
                        <div>
                            <button
                                onClick={() => {
                                    props.setListaClicados3([...props.listaclicados3, props.c])
                                    setResultado({cor:'#FF3030',icone:'assets/img/icone_erro.png'}) 
                                }}>Não Lembrei
                            </button>

                            <button onClick={() => {
                                props.setListaClicados3([...props.listaclicados3, props.c])
                                setResultado({cor:'#FF922E',icone:'assets/img/icone_quase.png'}) 
                            }}>Quase não lembrei
                            </button>


                            <button onClick={() => {
                                props.setListaClicados3([...props.listaclicados3, props.c])
                                setResultado({cor:'#2FBE34',icone:'assets/img/icone_certo.png'})                      
                            }} >Zap!
                            </button>
                        </div>
                    </ButtonAnswer>




                    <ButtonFinish cor={resultado.cor} display={!props.listaclicados3.includes(props.c) ? true : false}>
                        <div onClick={() => {  console.log(cor)
                                    console.log(resultado.cor)    }}>
                            <h1>Pergunta {cards.indexOf(props.c) + 1}</h1>
                            <img src={resultado.icone}></img>
                        </div>

                    </ButtonFinish>
                    </>
                    
        )
    }

const ButtonFinish = styled.div`
display:${props => props.display ? 'none' : 'flex'};
text-decoration-line: line-through;
color:${props=> props.cor};
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

div{
    display:flex;
}
h1{
  margin-left:15px;
}
ion-icon{
  margin-right:20px;
}
`


const ButtonAnswer = styled.div`
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
          }`
