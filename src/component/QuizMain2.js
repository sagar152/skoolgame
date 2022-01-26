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
import { ShareSocial } from "react-share-social";
import Modal from 'react-modal';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score ,name,modalIsOpen} = this.state;
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
                         <span className='paraspan'>For Successfully Completing Scratch Fundamental Quiz.<br/>
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