//import { questions } from "../../data/data2"
import { useParams } from "react-router"

export function Quest({ questions }) {

    const url = useParams();
    const index = url.questId;
    const q = questions[index];
    return (
        <form className={`question show`}>
            {/* <h2>{q.theme}</h2> */}
            <h1>{q.question}</h1>
            <div className='choix'>
                {/* <div className='choix1'> */}
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
                {/* </div>
                <div className='choix1'> */}
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
                {/* </div> */}
            </div>

        </form>

    )
}