import { useState } from "react";
import { good, bad, reset } from "../../services/anwser";
import { useNavigate } from "react-router";
import { useParams } from "react-router"


export function RuleFooter({question}) {

  const url = useParams();
  const index = url.ruleId;
  const [currentQuestion, setCurrentQuestion] = useState(Number(index));  
  const length = question.length;
  const navigate = useNavigate()
  let nsf = false;

  const nextQuestion = () => {
    let choix = document.querySelector('input[name="choice"]:checked').value;
    reset(choix, question[currentQuestion].reponse, currentQuestion)  
    setCurrentQuestion((nextQ) => nextQ = nextQ +1)
    document.getElementById('buttonAnswer').style.display="block";
    document.getElementById('nextQcm').style.display="none";
    document.getElementById('nbrA').style.display="none";
    document.getElementById('nbrB').style.display="none";
    navigate("/rule/"+(Number(currentQuestion)+Number(1)));
  }

  const answer = (event) =>{
    event.preventDefault();
    let choix = document.querySelector('input[name="choice"]:checked').value;

    if( choix === question[currentQuestion].reponse){ 
      good(choix, currentQuestion);
    }
    else{
      bad(choix, question[currentQuestion].reponse, currentQuestion)
    }
    document.getElementById('buttonAnswer').style.display="none";
    document.getElementById('nbrA').style.display="block";
    document.getElementById('nbrB').style.display="block";
    

    if(currentQuestion+1 !== length){
      document.getElementById('nextQcm').style.display="block";
    }
  }
  const nsfw =()=>{
    const imgA = document.getElementById('imgA');
    const imgB = document.getElementById('imgB');
    if(!nsf){
      imgA.src= question[currentQuestion].A.imgRule34;
      imgB.src= question[currentQuestion].B.imgRule34;
      nsf=!nsf;
    }else{
      imgA.src= question[currentQuestion].A.img;
      imgB.src= question[currentQuestion].B.img;
      nsf=!nsf;
    }
    
  }

  return (
    <>
        <div className='button'>
        <button onClick={answer} id="buttonAnswer">Réponse</button>
        <button onClick={nextQuestion} id="nextQcm">next</button>
        </div>
        <button onClick={nsfw} id="buttonNsfw">NSFW</button>

        <p className="counter">
            {currentQuestion + 1}/{length}
        </p>
        
    </>
  )
}