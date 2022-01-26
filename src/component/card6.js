
import React ,{useEffect,useState} from 'react';
import Timeshow5 from './Timeshow5'
import Spiner from './Spiner'
import swal from 'sweetalert'
import './swals.css'
const Textpage6 = ()=>{
  const [isPageLoading, setPageLoading] = React.useState(true);
    // const [seconds, setSeconds] = React.useState(4);
    // const [sec,setSec] = React.useState(null)
    //  React.useEffect(() => {
    //    if (seconds > 0) {
    //      setTimeout(() => setSeconds(seconds - 1), 1000);
    //    } else {
    //      setSec(<Timeshow />);
    //    }
    //  },[seconds]);

    const [name , setName] =useState('')
    console.log(name,'lkdfsjlfjsldjl')
const sweetInput = async ()=>{
  await swal("Please Enter Your Name", {
    content: "input",
    closeOnClickOutside:false,
    button: {
      text: "Start",
      closeModal: false,
    },
  }
  )
  .then(async(value) => {
  await  swal(`Welcome ${value}`,{closeOnClickOutside:false});
  setName({value})
  return value
  });
}
    useEffect(async()=>{
      setPageLoading(true)
      await sweetInput()
      setTimeout(()=>{
        setPageLoading(false)
      },4000)
    },[])
    return(
        <>
        {isPageLoading === true ? <Spiner />:<Timeshow5 name={name}/>}
        {/* {seconds ?<div className="image-div" > <h1 style={{fontSize:'80px'}}> {seconds}</h1></div>:<div>{sec}</div>} */}
        </>
    )
}

export default Textpage6;
