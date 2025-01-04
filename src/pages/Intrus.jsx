import { IntrusFooter } from "../componants/intrus/IntrusFooter";
import { IntrusQuestion } from "../componants/intrus/IntrusQuestion";
import { questionsIntrus } from "../data/dataIntrus";

export function Intrus( ) {

    return (
      <>
      <IntrusQuestion />
      <IntrusFooter question={questionsIntrus}/>
      </>
    )
}