import React from 'react';
import './Spiner.css'
const Spiner = ()=>{
    return(
        <div style={{backgroundColor:'#566573',height:'100vh' ,  display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
         <br/><br/><br/>
      
      {/* <div class="circle-animation-area">
          <div class="circle">
            <div class="eyes l"></div><div class="eyes r"></div>
            <div class="mouth"><div class="smile"></div></div>
            <div class="wing l row1">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wing l row2">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wing l row3">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wing r row1">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wing r row2">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wing r row3">
              <div class="joint left">
                <div class="joint left">
                  <div class="joint left">
                    <div class="joint left">
                      <div class="joint left">
                        <div class="joint left">
                          <div class="joint left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="shadowAnim"></div>
      </div> */}
       <div className="App">
      <div className='loading'>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
        <div className='loading__square'></div>
      </div>
    </div>
        </div>
    )
}

export default Spiner;