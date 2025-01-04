import { question } from "../../data/data2024";
import { useParams } from "react-router"
import { resetTheme, answerTheme } from "../../services/anwser";
import { useNavigate } from "react-router";
import { useState } from "react";

export function QCMTQuest() {

    const questions = [];
    const url = useParams();
    const theme = url.theme;
    const index = url.Id;

    question.map((quest) => {
        if (quest.theme === theme) {
            questions.push(quest);
        }
    })
    let q = questions[index]

    const [currentQuestion, setCurrentQuestion] = useState(Number(index));

    const length = questions.length;
    const route = "/qcmt/" + theme;
    const navigate = useNavigate()

    const nextQuestion = () => {

        resetTheme(q.reponse, index)
        setCurrentQuestion((nextQ) => nextQ = nextQ + 1)
        document.getElementById('buttonAnswer').style.display = "block";
        document.getElementById('nextQcm').style.display = "none";
        navigate(route + "/" + (Number(currentQuestion) + Number(1)));
    }
    const backTheme = () => {
        navigate("/qcmt/");
    }

    const answer = (event) => {
        event.preventDefault();

        answerTheme(q.reponse, index);
        document.getElementById('buttonAnswer').style.display = "none";

        if (currentQuestion + 1 !== length) {
            document.getElementById('nextQcm').style.display = "block";
        }
        else {
            document.getElementById('backTheme').style.display = "block";
        }
    }


    return (
        <>
            <div id="themeQuestion">
                <form className={`question show`}>
                    <h2>{q.theme}</h2>
                    <h1>{q.question}</h1>
                    <div className='choix'>
                        <div>
                            <input type='radio' id={"A" + index} name="choice" value="A" className="input" />
                            <label htmlFor={"A" + index} id={"choixA" + index}>
                                A:
                                <span>{q.choix.A}</span>
                            </label>
                        </div>
                        <div>
                            <input type='radio' id={'B' + index} name="choice" value="B" className="input" />
                            <label htmlFor={'B' + index} id={"choix" + "B" + index}>
                                B:
                                <span>{q.choix.B}</span>
                            </label>
                        </div>
                        <div>
                            <input type='radio' id={'C' + index} name="choice" value="C" className="input" />
                            <label htmlFor={'C' + index} id={"choix" + "C" + index}>
                                C:
                                <span>{q.choix.C}</span>
                            </label>
                        </div>
                        <div>
                            <input type='radio' id={'D' + index} name="choice" value="D" className="input" />
                            <label htmlFor={'D' + index} id={"choix" + "D" + index}>
                                D:
                                <span>{q.choix.D}</span>
                            </label>
                        </div>
                    </div>

                </form>

                <div>
                    <div className='button'>
                        <button onClick={answer} id="buttonAnswer">Réponse</button>
                        <button onClick={nextQuestion} id="nextQcm">next</button>
                        <button onClick={backTheme} id="backTheme">retour au thèmes</button>
                    </div>

                    <p className="counter">
                        {currentQuestion + 1}/{length}
                    </p>
                </div>
            </div>
        </>
    )


}