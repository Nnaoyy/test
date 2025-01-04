import { useState } from "react";
import { resetIntrus, disableNext } from "../../services/anwser";
import { useNavigate } from "react-router";


export function IntrusFooter({question}) {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  const length = question.length;

  const navigate = useNavigate()

  const nextQuestion = () => {
    resetIntrus(question[currentQuestion].choix.length)  
    setCurrentQuestion((nextQ) => nextQ = nextQ +1)
    disableNext();
    navigate("/questInt/"+(Number(currentQuestion)+Number(1)));
  }


  return (
    <>
        <div className='button'>
        <button onClick={nextQuestion} id="nextIntrus">next</button>
        </div>

      
        <p className="counter">
            {currentQuestion + 1}/{length}
        </p>
        
    </>
  )
}