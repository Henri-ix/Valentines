import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import './index.css'



export const Route = createFileRoute('/')({
  component: Home,
})


function Home() {
  const [count,setCount]=useState(0);
  const [messages] = useState(["To Antonia","Hey Antonia","So I made this because I've really enjoyed spending time with you these past few weeks","And so I wanted to ask you a very important question", "Will you be my Valentine?"]);
  const [accepted,setAccepted] = useState(false);
  const [responses] = useState(["Open","Yo","Me too!","the tension is killing me!"]);

  const rejected = ()=> {
    alert("Yeah I KNEW you would try and be funny, FROM THE TOP.")
    setCount(0);
  }
   
  if(accepted){
    return(
      <div className="homeScreen">
      <div className="chatBox">
        See you on Feb 14th! 🌹
        Don't just stand there, tell him the good news!
      </div>
    </div>
  );
}
  
  return(
  <div className='homeScreen'>
    <div className='chatBox'>
      {messages[count]}
    </div>
    <div className='responses'>
      {count<responses.length ? ( 
      <button className='response' onClick={()=>setCount(count+1)}>
            {responses[count]}
          </button>):(
            <div className="flex gap-4">
             <button className='positive ' onClick={() => setAccepted(true)}>
              Yes
            </button>
            <button className='negative' onClick={rejected}>
              No
            </button>
    </div>
          )
      }
    </div>
    {count>0 &&
          <button className='back' onClick={()=>setCount(count-1)}>
            Back
          </button>
      }
  </div>
  )
}

