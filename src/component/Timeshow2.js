import React, { useState } from "react";
import styles from "../component/qustionpage.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ProgressBar from "./Progress";
import "./exampleAnimation.css";
import music from "../images/music-on.svg";
import pause from "../images/pause.svg";
import ringer from "./Ringer.mp3";
import boy from "../images/boy1.png";
import Quiz3 from "./QuizMain";

function Timeshow2(props) {
  const audio = new Audio(ringer);
  audio.loop = true;
  // const [state, setState] = useState(1);
  const [completed, setCompleted] = useState(100);
  React.useEffect(() => {
    if (completed > 0) {
      setTimeout(() => setCompleted(completed - 10), 1000);
    } else {
      return null;
    }
  });

  return (
    <div>
      <div className={styles.qustionpage}>
        <Container maxWidth="xl">
          <div>
            <Box sx={{ width: "80%" }} style={{ margin: "1px auto" }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid md={6} xs={12} sm={12}>
                  <div
                    style={{ padding: "50px 50px" }}
                    className={styles.imagehide}
                  >
                    <div style={{ width: "100%", height: "100%" }}>
                      <img
                        src={boy}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className={styles.imagehidedesktop}>
                    <div style={{ width: "100%", height: "100%" }}>
                      <img
                        src={boy}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Quiz3 name={props.name} />
                  {/* </div> */}

                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div>
                      <img
                        src={music}
                        alt=""
                        onClick={() => {
                          audio.loop = true;
                          audio.play();
                        }}
                        style={{ marginLeft: "20px", cursor: "pointer" }}
                      />
                      <p>music on</p>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      {" "}
                      <img
                        alt=""
                        src={pause}
                        onClick={() => {
                          audio.pause();
                        }}
                        style={{ marginLeft: "10px", cursor: "pointer" }}
                      />
                      <p>pause</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Container>
        {/* <Timeshow  /> */}
      </div>
      <div className="progressmanage">
        {" "}
        <ProgressBar />
      </div>
    </div>
  );
}

export default Timeshow2;
