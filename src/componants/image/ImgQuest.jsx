import { useParams } from "react-router";
import { question } from "../../data/dataImg";
import { useState } from "react";
import { answerTheme, resetTheme } from "../../services/anwser";
import { useNavigate } from "react-router";



export function ImgQuest() {
    const url = useParams();
    const index = url.id;
    const q = question[index];

    const [currentQuestion, setCurrentQuestion] = useState(Number(index));
    const length = question.length;
    const navigate = useNavigate()


    const nextQuestion = () => {
        document.getElementById('avis').style.display = "none";
        resetTheme(q.reponse, index);
        setCurrentQuestion((nextQ) => nextQ = nextQ + 1)
        document.getElementById('buttonAnswer').style.display = "block";
        document.getElementById('nextQcm').style.display = "none";

        navigate("/img/" + (Number(currentQuestion) + Number(1)));
    }

    const answer = (event) => {
        event.preventDefault();

        document.getElementById('buttonAnswer').style.display = "none";

        answerTheme(q.reponse, index)

        document.getElementById('avis').style.display = "block";
        if (currentQuestion + 1 !== length) {
            document.getElementById('nextQcm').style.display = "block";
        }
    }

    return (
        <>
            <div id="imgQuestion">
                <div id="img">
                    <img src={q.img} />
                    <p>{q.nom}</p>
                </div>
                <div id="avis">
                    <p>{q.avis}</p>
                </div>

                <form className={`question show`}>
                    <div className='imgchoix'>
                        <div >
                            <input type='radio' id={"A" + index} name="choice" value="A" className="input" />
                            <label htmlFor={"A" + index} id={"choixA" + index}>
                                <p style={{ width: '-webkit-fill-available' }}>Woke</p>
                            </label>
                        </div>
                        <div >
                            <input type='radio' id={'B' + index} name="choice" value="B" className="input" />
                            <label htmlFor={'B' + index} id={"choix" + "B" + index}>
                                <p style={{ width: '-webkit-fill-available' }}>Pas Woke</p>
                            </label>
                        </div>
                    </div>
                </form>
                <div>
                    <div className='button'>
                        <button onClick={answer} id="buttonAnswer">Réponse</button>
                        <button onClick={nextQuestion} id="nextQcm">next</button>
                    </div>

                    <p className="counter">
                        {currentQuestion + 1}/{length}
                    </p>
                </div>
            </div>
        </>
    )
}