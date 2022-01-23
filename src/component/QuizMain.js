import React, { Component } from "react";
import Question from "./Qustion";
import Answer from "./Answer";
import "./QuizMain.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "../component/qustionpage.module.css";
import { Link } from "react-router-dom";
import { ShareSocial } from "react-share-social";
import Button from "@mui/material/Button";
import Certificate from "../images/certifiate.jpg";
// import { renderToString } from 'react-dom/server';
// import jsPDF from 'jspdf';
import Modal from 'react-modal';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export default class Quiz extends Component {
  // initiating the local state
  
  
  state = {
    quiestions: {
      1: "______ is the father of computer.",
      2: "A desktop computer is also known as",
      3: "What is the smallest unit of the information?",
      4: "Which of the following is an output device?",
      5: "CPU  stands for",
      6: "Which of the following is equal to 1 MB (megabytes)",
      7: "Which of the following is not Computer Hardware?",
      8: "Which of the following language does computer understands?",
      9: "WWW stands for",
      10: "What is the full form of e-mail?",
    },
    answers: {
      1: {
        1: "Herman Hollerith",
        2: "Gardern Moore",
        3: "Blaise pascal",
        4: "Charles Babbage",
      },
      2: {
        1: "PC",
        2: "Laptop",
        3: "Mainframe",
        4: "Palmtop",
      },
      3: {
        1: "Byte",
        2: "Bit",
        3: "Block",
        4: "Nibble",
      },
      4: {
        1: "Keyboard",
        2: "Mouse",
        3: "Light pen",
        4: "Monitor",
      },
      5: {
        1: "Central program unit",
        2: "Central processing unit",
        3: "Computer principle unit",
        4: "Control processing unit",
      },
      6: {
        1: "1024 bytes",
        2: "512 bytes",
        3: "1024 bits",
        4: "1024 kb",
      },
      7: {
        1: "Mouse",
        2: "Monitor",
        3: "Printer",
        4: "OS",
      },
      8: {
        1: "C language",
        2: "Assembly language",
        3: "Machine language",
        4: "Java",
      },
      9: {
        1: "Wide World Web",
        2: "World Wide Web",
        3: "Windows World Web",
        4: "Web World Wide",
      },
      10: {
        1: "Electric mail",
        2: "Electromagnetic mail",
        3: "Electronic mail",
        4: "None of these",
      },
    },
    correctAnswers: {
      1: "4",
      2: "1",
      3: "2",
      4: "4",
      5: "2",
      6: "4",
      7: "4",
      8: "3",
      9: "2",
      10: "3",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    name:this.props.name,
    modalIsOpen:true
  };

  
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
//  print = () => {
//   const imagess = document.getElementsByClassName('ceritficate')
//     const string = renderToString(imagess);
//     const pdf = new jsPDF();
//     pdf.fromHTML(string);
//     pdf.save('pdf')
//   }
  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };
 
  render() {
    let subtitle;
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score ,name,modalIsOpen} =
      this.state;
    //  const afterOpenModal=()=> {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    //   }
    // let name = this.state.name;
      console.log(name.value,'fsdkflsfjlsjflsjflsd');
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <div>
            <Box
              sx={{ width: "100%" }}
              style={{
                backgroundColor: "#F4F6F6",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginTop: "50px",
                paddingBottom: "50px",
              }}
            >
              <Grid
                container
                spacing={2}
                columnSpacing={{ xs: 2, sm: 2, md: 2 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item md={12} xs={12} style={{ paddingTop: "0" }}>
                  <Item
                    style={{
                      backgroundColor: "#FFBB48",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    {" "}
                    <div className={styles.htmlstands}>
                      <h5
                        style={{
                          color: "white",
                          textAlign: "center",
                          width: "100%",
                          paddingTop: "5%",
                          fontSize: "2.25rem",
                        }}
                        className="Qustion-step"
                      >
                        {" "}
                        <Question question={quiestions[step]} />
                      </h5>
                    </div>
                  </Item>
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
                  ? false
                  : true
              }
              onClick={() => step ? this.nextStep(step) : <a href='/computerfundamental'>fsfjsflksljf</a>}
            >
              Next
            </button>
          </div>
        ) : (
        
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
                    
                    <p style={{color: 'black',fontWeight:'bold',position: 'relative',left:'102px',top:'17px' , fontSize: '18px'}}>
                         <span style={{fontSize:'14px'}}>For Successfully Completing Computer Fundamental Quiz.<br/>
                        Scored {score} Out of </span> {Object.keys(quiestions).length}  .
                    </p>
                    
                    </div>
                    <div style={{position: 'absolute',bottom: '25%',left: '25%'}}>
                    <p style={{fontSize:'13px'}}>{this.getCurrentDate()}</p>
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
         </Modal>
         
        )}
      </div>
    );
  }
}
