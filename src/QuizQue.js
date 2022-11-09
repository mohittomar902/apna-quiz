import './Quiz.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactStoreIndicator from 'react-score-indicator'



function QuizQue(props){
  const renderTime = ({ remainingTime }) => {
    if(remainingTime===0){
      nextQue()
    }
  
    return (
     
        <div>{remainingTime}</div>
     
    );
  };
  const [questions,setQuestions]=useState(null);
  const getData=()=>{
    fetch("/apnaquiz/"+props.sub)
      .then((response)=>{
        return response.json();
      })
      .then((myJson)=> {
        console.log("json data");
        console.log(props.sub)
        setQuestions(myJson)
        
      });
  }
  useEffect(()=>{
    getData()
    
   
  },[])
 

  const [currentQ,setcurrentQ]=useState(0);
  const [key, setKey] = useState(0);
  const [result,setResult]=useState(false);
  const [score,setScore]=useState(0)
  const [timer,setTimer] =useState(true);
   const nextQue=()=>{
     setTimer(true);
    setKey(prevKey => prevKey + 1)
     const changeNext=currentQ+1;
     var buttons=document.getElementsByClassName('option');
     
     for(var index=0;index < buttons.length;index++){
       buttons[index].style.backgroundColor="";
       buttons[index].style.color="";
       buttons[index].disabled=false;
     };
     if(changeNext<questions.length){
      setcurrentQ(changeNext);
     }
     else{
       setResult(true);
      setcurrentQ(0);
    }
   }
   const checkScore=(e,ans)=>{
        setTimer(false);
        if(questions[currentQ].answer===ans){
          setScore(score+1);
          e.target.style.backgroundColor="green";
          e.target.style.color="white";
        }
        else{
          e.target.style.backgroundColor="red";
          e.target.style.color="white";
          e.target.parentNode.querySelectorAll("button").forEach((button)=>{
           if(button.innerHTML===questions[currentQ].answer){
             button.style.backgroundColor="green";
             button.style.color="white";
           }
          });
        }
        e.target.parentNode.querySelectorAll("button").forEach((button)=>button.disabled=true);
   }
  const resultMsg=()=>{
    if(questions.length===score){
      return (<h3>Congratulations You Pass With Honors</h3>)
    }
       else if((questions.length/2)<score){
          return (<h1>Well Done</h1>)
        }
        else{
          console.log(props.siteUrl)
          return(<div><h3>Lern more And try Again</h3>
           <a href={props.siteUrl}> <button >{props.name}</button></a>
            </div>
            )
        }
  }


return(
    <div className="quiz_box">
  { result ? (<div className="result_box">
          <ReactStoreIndicator  value={score} maxValue={questions.length}/>
          {resultMsg()}
              </div>):
    ( <div>
      <header>
        <div className="title">{props.name}</div>
        
            <div class="timecircle"> <CountdownCircleTimer
            key={key}
            strokeWidth={7}
         size={50}
          isPlaying={questions?(timer):false}
          duration={15}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >{renderTime}
        </CountdownCircleTimer></div>
        
        <div className="time_line"></div>
    </header>
    <section>
        <div className="que_text">
       { questions?( questions[currentQ].question):<Skeleton/>  
       }
        </div>
        <div className="option_list">
        
       {questions ?( questions[currentQ].options.map((ans,index) =>{
           return(
             <button className="option" onClick={(e)=>checkScore(e,ans) } key={index} >{ans}</button>
           )
         })):(<Skeleton/>)
        
       } 
        </div>
    </section>
  
    {questions ?   ( <footer>
        <div className="total_que">
         {questions ? (questions[currentQ].numb):(<Skeleton/>)} out {questions ? (questions.length):(<Skeleton/>)}
        </div>
        <button className="next_btn" onClick={nextQue}>Next Que</button>
    </footer>):(<Skeleton/>) }
</div>
 )}
 </div>
);


}
export default QuizQue;