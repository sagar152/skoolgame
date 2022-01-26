import React, {Component} from 'react';
import Question from './Qustion';
import Answer from './Answer';
import './QuizMain.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '../component/qustionpage.module.css'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Certificate from "../images/certifiate.jpg";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ShareSocial } from "react-share-social";
import Modal from 'react-modal';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%'

  },
};
export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Indicates the beginning and the end of a JavaScript section',
            2: 'A JavaScript file has an extension name of',
            3: 'Which keyword do we need to define a function?',
            4: 'Which one of the following symbols is used for JavaScript comments?',
            5: 'How can a developer show a pop-up message to the user?',
            6: 'What attribute/value do we use to make a button execute JavaScript when clicked?',
            7: 'How do I declare a new variable?',
            8: 'What is CSS used for?',
            9: 'Which of the following browsers can be used to run JavaScript Code',
            10: 'Which type of JavaScript language is ___',
        },
        answers: {
            1: {
                1: '<html> </html>',
                2: '<style> </style>',
                3: '<article> </article>',
                4:'<script> </script>'
            },
            2: {
                1: '.jscp',
                2: '.js',
                3: '.css',
                4:'.Jp'
            },
            3: {
                1: 'function',
                2: 'method',
                3: 'onclick',
                4:'functionName()'
            },
            4: {
                1: '\\',
                2: '^',
                3: '.?',
                4: '//'
            },
            5: {
                1: 'alert',
                2: 'prompt',
                3: 'console.log',
                4: '<p> tag'
            },
            6: {
                1: 'onclick="doSomething;"',
                2: 'on-click="doSomething;"',
                3: 'onclick="doSomething();"',
                4: 'onclick=doSomething();'
            },
            7: {
                1: 'var newVariable = 5;',
                2: 'Variable int = new Variable();',
                3: 'var 5 = myVariable;',
                4: 'int var = 5;'
            },
            8: {
                1: 'formatting script correctly',
                2: 'styling web pages',
                3: 'client side scripting',
                4: 'server side scripting'
            },
            9: {
                1: 'Google Chrome',
                2: 'Firefox',
                3: 'Safari',
                4: 'All of the above'
            },
            10: {
                1: 'Object-Oriented',
                2: 'Object-Based',
                3: 'Assembly-language',
                4: 'High-level'
            }
        },
        correctAnswers: {
            1: '4',
            2: '2',
            3: '1',
            4: '4',
            5: '1',
            6: '3',
            7: '1',
            8: '2',
            9: '4',
           10: '2',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        name:this.props.name,
        modalIsOpen:true
    }
    printDocument = () => {

      html2canvas(document.querySelector(".ceritficate")).then(canvas => {
         document.body.appendChild(canvas);  // if you want see your screenshot in body.
         const imgData = canvas.toDataURL('image');
         const pdf = new jsPDF();
         pdf.addImage(imgData, 'PNG', 0, 0);
         pdf.save("download.pdf"); 
     });
  
  }
  getCurrentDate=(separator='')=>{
  
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}-${separator}${month<10?`0${month}`:`${month}`}${separator}-${year}`
    }
    openModal=()=> {
      this.setState({modalIsOpen:true});
    }
  
  
  
     closeModal=() =>{
      this.setState({modalIsOpen:false});
    }  
    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 10,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score,name,modalIsOpen} = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<div>
                     <Box  sx={{ width: '100%' }} style={{ backgroundColor: '#F4F6F6', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '50px', paddingBottom: '50px' }}>
      <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}  sx={{
          display: 'flex',
          justifyContent: 'center',
         
          
        }}>
        <Grid item md={12} xs={12} style={{ paddingTop: '0' }} >
        <Item style={{ backgroundColor: '#FFBB48', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0' }}>  <div className={styles.htmlstands}>
                          <h5 style={{ color: 'white', textAlign: 'center', width: '100%', paddingTop: '5%', fontSize: '2.25rem' }} className='Qustion-step'> <Question
                            question={quiestions[step]}
                        /></h5>
                        </div></Item>
        </Grid>
        <Grid item xs={11}>
          <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
        </Grid>
      </Grid>
    </Box>
                       
                       
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </div>) : (
                          <Modal
                          isOpen={modalIsOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >
                          
                          <Box sx={{ flexGrow: 1 }}>
                           <Grid container spacing={2}>
                             <Grid item xs={12}>
                             
                             <div
                  className="finalPage"
                >
                  <div  className='ceritficate'>
                    <img
                      src={Certificate}
                      id='image'
                      alt="certificate not found"
                      style={{ width: "100%", height: "auto" }}
                    />
      <div className='headdiv'> 
       <h1 style={{color:'red'}}>
            {name.value}
                    </h1>
                  
                    {/* <p>Thank you!</p> */}
                    </div>
                    <div className='paradiv'>
                    
                    <p className="para">
                         <span className='paraspan'>For Successfully Completing Javascript Fundamental Quiz.<br/>
                        Scored {score} Out of </span> 100  .
                    </p>
                    
                    </div>
                    <div className='datediv'>
                    <p className='date' >{this.getCurrentDate()}</p>
                    </div>
                  </div> 
                  {console.log(name,'jsx')}
                  {/* <h1 style={{color:'black'}}>{name}</h1> */}
                  <Button
                    style={{
                      marginTop: "35px",
                      border: "2px solid #ff7d14",
                      width: "30%",
                    }}
                  >
                    <a
                      href="/"
                      style={{
                        color: "#ff7d14",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Back
                    </a>
                  </Button>
                  <Button
                 className='download-btn'
                    onClick={this.printDocument}
                  >
                   Download Certificate
                  </Button>
                  {/* <button onClick={this.closeModal}>close</button> */}
<ShareSocial title={'Share Your Success with Your friends & Relatives'}
        url="https://skoolcoder.com"
        socialTypes={["facebook", "Instapaper"]}
      />
                </div>
                              
                             </Grid>
                           </Grid>
                         </Box>
                        </Modal>
                       
                    )
                }
            </div>
        );
    }
}