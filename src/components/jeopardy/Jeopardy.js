import { useEffect, useRef, useState } from "react";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";

function Jeopardy(props) {

  let [score, setScore] = useState(0);
  let [jeopardyData, setJeopardyData] = useState({
    category: {}
  });

  let userAnswer = useRef()

  //when the component mounts, get a the first question
  useEffect(()=> {
    getNewQuestion();
  },[score])

  //get a new random question from the API and add it to the data object in state
  let getNewQuestion = () => {
    
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", data);

            //update state with the data from the API causing the page to re-render
            setJeopardyData(data);
        })
        //handle any errors/failures with getting data from the API
        .catch((error) => {
            console.log(error)
        })
  }

  let checkAnswer = () => {

    //checking the asnwer provided agains the answer from the API
    if(userAnswer.current.value.toLowerCase() === jeopardyData.answer.toLowerCase()){
        //correct? add to the score
        setScore(score + jeopardyData.value)
    }else{
        //wrong: subtract from the score
        setScore(score - jeopardyData.value)
    }

    //clear out the input field
    userAnswer.current.value = "";

  }

    //present the results to the user
    return (
      <div>
        <JeopardyDisplay 
            jeopardyData={jeopardyData} 
            score={score} 
            userAnswer={userAnswer}
            checkAnswer={checkAnswer}
        />
    </div>
    );
}

export default Jeopardy;