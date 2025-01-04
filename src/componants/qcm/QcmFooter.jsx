import { useState } from "react";
import { good, bad, reset, goodAll } from "../../services/anwser";
import { useNavigate } from "react-router";
import { useParams } from "react-router"


export function QcmFooter({ question, route }) {
  const url = useParams();
  console.log(url);
  const index = url.questId;

  const [currentQuestion, setCurrentQuestion] = useState(Number(index));

  const length = question.length;

  const navigate = useNavigate()

  const nextQuestion = () => {
    let choix = document.querySelector('input[name="choice"]:checked').value;
    reset(choix, question[currentQuestion].reponse, currentQuestion)
    setCurrentQuestion((nextQ) => nextQ = nextQ + 1)
    document.getElementById('buttonAnswer').style.display = "block";
    document.getElementById('testAnswer').style.display = "none";
    document.getElementById('nextQcm').style.display = "none";
    navigate(route + (Number(currentQuestion) + Number(1)));
  }

  const answer = (event) => {
    event.preventDefault();
    let choix = document.querySelector('input[name="choice"]:checked').value;


    if (question[currentQuestion].reponse === 'ALL') {
      goodAll(currentQuestion)
    }
    else if (choix === question[currentQuestion].reponse) {
      good(choix, currentQuestion);
    }
    else {
      bad(choix, question[currentQuestion].reponse, currentQuestion)
    }
    document.getElementById('buttonAnswer').style.display = "none";

    if (question[currentQuestion].test) {
      document.getElementById('buttonAnswerTest').style.display = "block";
    }
    else if (currentQuestion + 1 !== length) {
      document.getElementById('nextQcm').style.display = "block";
    }
  }

  const answerTest = (event) => {
    event.preventDefault();
    document.getElementById('testAnswer').style.display = "block";
    document.getElementById('buttonAnswerTest').style.display = "none";
    if (currentQuestion + 1 !== length) {
      document.getElementById('nextQcm').style.display = "block";
    }
  }

  return (
    <>
      <p id="testAnswer">{question[currentQuestion].test ?? ""}</p>
      <div className='button'>
        <button onClick={answer} id="buttonAnswer">Réponse</button>
        <button onClick={answerTest} id="buttonAnswerTest">ça vient de quel test?</button>
        <button onClick={nextQuestion} id="nextQcm">next</button>
      </div>

      <p className="counter">
        {currentQuestion + 1}/{length}
      </p>
    </>
  )
}