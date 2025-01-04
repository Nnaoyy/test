import { questions } from "../../data/dataQuest";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { answerTheme, resetTheme } from "../../services/anwser";

export function Question() {

    const url = useParams();
    const index = url.questId;
    const q = questions[index];

    const [props, setProps] = useState(false);
    const [indice, setIndice] = useState(false);

    const proposition = () => {
        setProps(true);
        document.getElementById('buttonAnswerQcm').style.display = "block";
    }
    const showIndice = () => {
        setIndice(true);
    }
    const [currentQuestion, setCurrentQuestion] = useState(Number(index));

    const length = questions.length;

    const navigate = useNavigate()

    const nextQuestion = () => {

        resetTheme(questions[currentQuestion].reponse, currentQuestion);
        setCurrentQuestion((nextQ) => nextQ = nextQ + 1);
        setProps(false);
        setIndice(false);
        document.getElementById('buttonAnswerQcm').style.display = "none";
        document.getElementById('nextQcm').style.display = "none";
        navigate("/quest/" + (Number(currentQuestion) + Number(1)));
    }

    const answer = (event) => {
        event.preventDefault();

        answerTheme(questions[currentQuestion].reponse, currentQuestion);

        document.getElementById('buttonAnswerQcm').style.display = "none";

        if (currentQuestion + 1 !== length) {
            document.getElementById('nextQcm').style.display = "block";
        }
    }
    return (
        <div>
            <h1 style={{ margin: '30px 110px' }}>{q.question}</h1>

            {q.indice ?
                <div>
                    {indice ?
                        <h1 style={{ margin: '30px 110px' }}>{q.indice}</h1>
                        :
                        <div className='button' style={{ marginBottom: '30px' }}>
                            <button onClick={showIndice} >Indice</button>
                        </div>
                    }
                </div>
                :
                <div></div>
            }
            <div id="testQcm">
                {q.img ?
                    <div>
                        {indice ?
                            <div style={{
                                display: 'flex', justifyContent: 'center'
                            }}>
                                < img src={q.img} />
                            </div>
                            :
                            <div className='button' style={{ marginBottom: '30px' }}>
                                <button onClick={showIndice} >Indice</button>
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }

                {
                    props ?
                        <form className={`question show`}>
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
                        :
                        <div className='button'>
                            <button onClick={proposition} >Propositions</button>
                        </div>
                }
            </div>
            <div className='button'>
                <button onClick={answer} id="buttonAnswerQcm">Réponse</button>
                <button onClick={nextQuestion} id="nextQcm">next</button>
            </div>

            <p className="counter">
                {currentQuestion + 1}/{length}
            </p>
        </div >
    )
}