import { useParams } from "react-router";
import { questionsRule } from "../../data/dataRule";


export function RuleQuest (){
  const url = useParams();
  const index = url.ruleId;
  const q= questionsRule[index];
    
    return(
        <>
        <form className={`question show`}>
            <div className='choix'>
                    <div className="ruleA">
                        <input type='radio' id={"A"+index} name="choice" value="A" className="input"/>
                        <label htmlFor={"A"+index} id={"choixA"+index}>
                            <div className="blockImg">
                                <img src={q.A.img} id="imgA" alt="A"/>
                            </div>
                            <br/>
                            {q.A.name}
                            <br/>
                            <p id="nbrA">{q.A.nbr}</p>
                        </label>
                    </div>
                    <div className="ruleB">
                        <input type='radio' id={'B'+index} name="choice" value="B" className="input"/>
                        <label htmlFor={'B'+index} id={"choix"+"B"+index}>
                            <div className="blockImg">
                                <img src={q.B.img} id="imgB" alt="B"/>
                            </div>
                            <br/>
                            {q.B.name}
                            <br/>
                            <p id="nbrB">{q.B.nbr}</p>
                        </label>
                    </div>
            </div>
        </form>

        </>
    )
}