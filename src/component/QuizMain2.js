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
import Modal from 'react-modal';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Scratch is a?',
            2: 'Where was scratch invented?',
            3: 'What green flag mean in scratch',
            4: 'What is the name of the character in scratch?',
            5: 'Which animal scratch logo contains?',
            6: 'Which one from the following indicate scratch file extension',
            7: 'Which command let the sprites walk?',
            8: 'Which from the following is not a command?',
            9: 'Which command will shows animation for sprite',
            10: 'In scratch x and y coordinates defines',
        },
        answers: {
            1: {
                1: 'game',
                2: 'sound editing tool',
                3: 'block based coding language',
                4:'app development tool'
            },
            2: {
                1: 'Harvard',
                2: 'AT & T Lab',
                3: 'MIT Lab',
                4: 'Microsoft'
            },
            3: {
                1: 'stops',
                2: 'start',
                3: 'finish',
                4:'Nothing'
            },
            4: {
                1: 'actor',
                2: 'object',
                3: 'sprite',
                4: 'coder' 
            },
            5: {
                1: 'Cat',
                2: 'Dog',
                3: 'Tiger',
                4: 'Rabbit'
            },
            6: {
                1: 'sb',
                2: 'sc',
                3: 'sk',
                4: 'sh' 
            },
            7: {
                1: 'move',
                2: 'go',
                3: 'walk',
                4: 'run'
            },
            8: {
                1: 'forever',
                2: 'forever until',
                3: 'repeat',
                4: 'repeat until'
            },
            9: {
                1: 'next costume',
                2: 'next style',
                3: 'next look',
                4: 'next move' 
            },
            10: {
                1: 'sprite movement',
                2: 'width of sprite',
                3: 'height of Sprite',
                4: 'position of sprite'
            }
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '2',
            4: '3',
            5: '1',
            6: '1',
            7: '1',
            8: '2',
            9: '1',
           10: '4',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
        name:this.props.name
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
                score: score + 1,
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
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score ,name} = this.state;
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
                       
                       
                        step  <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </div>) : (
                         <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={2}>
                           <Grid item xs={12}>
                           <div
                  className="finalPage"
                  style={{
                    backgroundColor: "white",
                    padding: "12px 12px",
                    borderRadius: "10px",
                    marginTop: "2%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                >
                  <div style={{position:'relative'}} className='ceritficate'>
                    <img
                      src={Certificate}
                      id='image'
                      alt="certificate not found"
                      style={{ width: "100%", height: "auto" }}
                    />
      <div style={{position:'absolute',top: '46.5%',left:'43%'}}> 
       <h1 style={{color:'red'}}>
            {name.value}
                    </h1>
                  
                    {/* <p>Thank you!</p> */}
                    </div>
                    <div style={{position:'absolute',bottom: '38%',right:'35%'}}>
                    <p style={{color: 'black',fontWeight:'bold',position: 'relative',left:'60px',top:'-15px'}}>
                        {score} <span style={{fontSize:'9px'}}>Out of </span> {Object.keys(quiestions).length}
                    </p>
                    
                    </div>
                    <div style={{position: 'absolute',bottom: '25%',left: '25%'}}>
                    <p>{this.getCurrentDate()}</p>
                    </div>
                  </div> 
                  {console.log(name,'jsx')}
                  {/* <h1 style={{color:'black'}}>{name}</h1> */}
                  <Button
                    style={{
                      marginTop: "35px",
                      border: "2px solid green",
                      width: "30%",
                    }}
                  >
                    <Link
                      to="/"
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      Back
                    </Link>
                  </Button>
                  <Button
                    style={{
                      marginTop: "35px",
                      border: "2px solid green",
                      width: "50%",
                      marginLeft: "20px",
                    }}
                    onClick={this.printDocument}
                  >
                    <Link
                      to={`${Certificate}`}
                      target="_blank"
                    
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                      
                    >
                   Download Certificate
                    </Link>
                  </Button>
                  <button onClick={this.closeModal}>close</button>
                  {/* <ShareSocial
        url="https://skoolcoder.com"
        socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
      /> */}
                  {/* <Link to="/files/myfile.pdf" >Download</Link> */}
                </div>
                           </Grid>
                           
                         </Grid>
                       </Box>
                       
                    )
                }
            </div>
        );
    }
}