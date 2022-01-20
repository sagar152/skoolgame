import React  from 'react'
// import logo from './logo.svg';
import Main from './Main'
import { BrowserRouter, Route } from 'react-router-dom'
// import Timeshow from './component/Timeshow'
import Textpage from './component/Text'
import Textpage2 from './component/card2'
import Textpage3 from './component/card3'
import Textpage4 from './component/card4'
import Textpage5 from './component/card5'
import Textpage6 from './component/card6'
function App() {
  // const [seconds, setSeconds] = React.useState(4);

  // React.useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds(<Card />);
  //   }
  // });

  return (
    <div >
    <div>
      {/* {seconds} */}
   
      <BrowserRouter>
      <div className="App">
      <Route exact path="/" component={Main} />
  <Route exact path="/computerfundamental" component={Textpage} />
  <Route exact path="/scratch" component={Textpage2} />
  <Route exact path="/html" component={Textpage3} />
  <Route exact path="/javascript" component={Textpage4} />
  <Route exact path="/python" component={Textpage5} />
  <Route exact path="/applab" component={Textpage6} />
      </div>
      </BrowserRouter>
{/* <Card /> */}

    </div>
    </div>
  );
}

export default App;
