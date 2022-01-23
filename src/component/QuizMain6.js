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
import Button from "@mui/material/Button";
import Certificate from "../images/certifiate.jpg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from "react-modal";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: "App Lab is developed by:",
      2: "Design section of App Lab is used for:",
      3: "App Lab is based on language:",
      4: "The property which allows you to identify each element by a unique name is",
      5: "We can add following elements on our screen:",
      6: "Radio buttons are used to ?",
      7: "Use of random numbers in App Lab:",
      8: "The code block which can be used to navigate from one screen to another :",
      9: "A program designed to run blocks of code or functions in response to specified events is called:",
      10: "Element which is not an UI element?",
    },
    answers: {
      1: {
        1: "MIT",
        2: "Microsoft",
        3: "Code.org",
        4: "Google",
      },
      2: {
        1: "Writing code",
        2: "Designing User Interface",
        3: "Designing Web",
        4: "None of the above",
      },
      3: {
        1: "Python",
        2: "Java Script",
        3: "PHP",
        4: "Ruby",
      },
      4: {
        1: "Id",
        2: "Text",
        3: "Variable",
        4: "Width",
      },
      5: {
        1: "Label",
        2: "button",
        3: "image",
        4: "all of these",
      },
      6: {
        1: "generate an event",
        2: "select 1 value at a time",
        3: "select more than one value",
        4: "storing value in it.",
      },
      7: {
        1: "To choose a fixed number",
        2: "To choose numbers within a given range",
        3: "Gives us a surprise number",
        4: "No use of random numbers",
      },
      8: {
        1: "playSound",
        2: "setProperty",
        3: "onEvent",
        4: "setScreen ",
      },
      9: {
        1: "An Event-driven program",
        2: "A value",
        3: "A property",
        4: "An object",
      },
      10: {
        1: "Mouse ",
        2: "Button",
        3: "Screen",
        4: "Text boxe",
      },
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "2",
      4: "1",
      5: "4",
      6: "2",
      7: "2",
      8: "4",
      9: "1",
      10: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    name: this.props.name,
  };
  printDocument = () => {
    html2canvas(document.querySelector(".ceritficate")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}-${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}-${year}`;
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
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
    let {
      quiestions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
      name,
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <div>
            <Box
              sx={{ width: "100%" }}
              style={{
                backgroundColor: "#F4F6F6",
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
                      backgroundColor: "#2980B9",
                      color: "white",
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
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </div>
        ) : (
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
                  <div style={{ position: "relative" }} className="ceritficate">
                    <img
                      src={Certificate}
                      id="image"
                      alt="certificate not found"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div style={{position:'absolute',top: '46.5%',left:'43%'}}> 
       <h1 className='font' style={{color:'red'}}>
            {name.value}
                    </h1>
                  
                    {/* <p>Thank you!</p> */}
                    </div>
                    <div style={{position:'absolute',bottom: '38%',right:'35%'}}>
                    <p className='font' style={{color: 'black',fontWeight:'bold',position: 'relative',left:'60px',top:'-15px'}}>
                        {score} <span style={{fontSize:'9px'}}>Out of </span> {Object.keys(quiestions).length}
                    </p>
                    
                    </div>
                    <div style={{position: 'absolute',bottom: '25%',left: '25%'}}>
                    <p>{this.getCurrentDate()}</p>
                    </div>
                  </div>
                  {console.log(name, "jsx")}
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
        )}
      </div>
    );
  }
}
