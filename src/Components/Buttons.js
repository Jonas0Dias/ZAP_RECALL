import styled from 'styled-components';
import cards from './cards';
import React from 'react'
// import React from 'react'
// const [displayopen,setDisplayOpen] = React.useState(false)



export default function Buttons() {
    const [listaclicados, setListaClicados] = React.useState([])
    const [listaclicados2, setListaClicados2] = React.useState([])
    const [listaclicados3, setListaClicados3] = React.useState([])
    return (
        <>
            {cards.map(c =>
                <>
                    <ButtonQuestionClosed display={listaclicados.includes(c) ? true : false}>
                        <h1>Pergunta {cards.indexOf(c) + 1}</h1>
                        <ion-icon name="caret-forward-outline"
                            onClick={() => {

                                setListaClicados([...listaclicados, c])

                            }}

                        >

                        </ion-icon>
                    </ButtonQuestionClosed>



                    <ButtonQuestionOpened display={!listaclicados.includes(c) || listaclicados2.includes(c) ? true : false}>
                        <h1> {c.question}</h1>
                        <ion-icon name="add-circle-outline"
                            onClick={() => {                               
                                setListaClicados2([...listaclicados2, c])
                            }}
                        ></ion-icon>

                    </ButtonQuestionOpened>




                    <ButtonAnswer display={!listaclicados2.includes(c) || listaclicados3.includes(c)  ? true : false}>
                        <h1> {c.question}</h1>
                        <div>
                            <button 
                                onClick={() => {                               
                                    setListaClicados3([...listaclicados3, c])
                            }}>Não Lembrei
                            </button>
                            <button onClick={() => {                               
                                    setListaClicados3([...listaclicados3, c])
                            }}>Quase não lembrei</button>
                            <button onClick={() => {                               
                                    setListaClicados3([...listaclicados3, c])
                            }} >Zap!</button>
                        </div>
                    </ButtonAnswer>




                    <ButtonFinish display={!listaclicados3.includes(c) ? true : false}>
                    <div>
                            Tem que aparecer quando finaliza a pergunta
                        </div>

                    </ButtonFinish>
                </>
            )
            }
        </>



    )
}

const ButtonFinish = styled.div`
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
          }














{/* { props.cards.map(c =>
                <>
                    <ButtonQuestionClose display={!novolistaclicados.includes(c)} onClick={() => {
                        console.log(displayopen)
                        novolistaclicados = [...novolistaclicados, c]
                        .setListaClicados(novolistaclicados)
                        console.log(novolistaclicados)
                    }

                    }>
                        <h1>Pergunta { props.cards.indexOf(c) + 1}</h1>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                    </ButtonQuestionClose>



                    <ButtonQuestionOpen display={novolistaclicados.includes(c)} onClick={() => {
                        console.log( displayopen)
                    }}>
                        <h1 display={ displayopen}> { displayopen ? c.answer : c.question}</h1>
                        <ion-icon style={{ display:  displayopen ? 'none' : 'flex' }} name="add-circle-outline" onClick={() => {

                             setDisplayOpen(true)
                            console.log( displayopen)
                            console.log('teste')
                        }}>

                        </ion-icon>
                        <div style={{ display:  displayopen ? 'flex' : 'none' }}>
                            <button onClick={() => {
                                console.log( displayopen)
                            }} >Não Lembrei</button>
                            <button >Quase não lembrei</button>
                            <button >Zap!</button>
                        </div>
                    </ButtonQuestionOpen>




                    <ButtonAnswer>

                    </ButtonAnswer>

                    <ButtonFinish>

                    </ButtonFinish>
                </>
            )} */}























// const ButtonQuestionClose = styled.button`
//   display:${props => display === true ? 'flex' : 'none'};
//   align-items: center;
//   justify-content: space-between;
//   text-align: center;
//   height: 65px;
//   font-family: 'Recursive';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 14px;
//   margin-bottom:5px;
//   border-radius: 5px;
//   h1{
//     color:red
//     margin:left:15px
//   }
//   ion-icon{
//     margin-right:20px
//   }
// `

// const ButtonQuestionOpen = styled.button`
//     display:${props => display === true ? 'flex' : 'none'};
//     width: 300px;
//     margin-bottom:15px;
//     padding: 15px;
//     min-height: 100px;
//     background: #FFFFD5;
//     box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//     border-radius: 5px;
//     font-family: 'Recursive';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 22px;
//     color: #333333;
//     position: relative;
//     flex-direction: column;
//     justify-content: space-between;

//         div{
//             margin-top:15px;
//             width: 100%;
//             display:flex;
//             justify-content: space-between;
//         }

//         ion-icon{
//             position:absolute;
//             bottom:0;
//             right:0;
//             margin-right: 6px;
//             margin-bottom: 6px;
//         }
//         button{
//         display:${props => display === true ? 'none' : 'block'};
//         font-family: 'Recursive';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 14px;
//         width: 85.17px;
//         height: 37.17px;
//         border-radius: 5px;
//         align-items: center;
//         text-align: center;
//         color: #FFFFFF;
//     }

//     button:nth-child(1){
//         background: #FF3030;
//     }
//     button:nth-child(2){
//         background: #FF922E;;
//     }
//     button:nth-child(3){
//         background:  #2FBE34;
//     }
// `