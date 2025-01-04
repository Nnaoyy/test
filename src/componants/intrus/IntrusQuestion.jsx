import { intrusBad, intrusGood } from "../../services/anwser";
import { useParams } from "react-router";
import { questionsIntrus } from "../../data/dataIntrus";


export function IntrusQuestion (){
  const url = useParams();
  const index = url.questId;
  const q= questionsIntrus[index];
  const length = questionsIntrus.length;
  let continu = true;
  let nbr = 0;

    const check=(event)=>{
      let answer = event.target.innerHTML;
      let id =event.target.id
      if(answer !== q.reponse && nbr < 7 && continu){
        intrusGood(id);
        nbr= nbr+1;
        if (nbr === 7){
          continu = false
          if (Number(index)+1 < length){
            document.getElementById("nextIntrus").style.display="block";
          }
        }
      }
      else if(continu){
        intrusBad(id);
        continu = false
        if (Number(index)+1 < length){
          document.getElementById("nextIntrus").style.display="block";
        }
      }
      
    }
    return(
        <>
        <form className={`question show`}>
            <h1>{q.question}</h1>
            <div className='choixIntrus'>
              {q.choix.map((choix,key)=>(
                
                <div key={key}>
                <div onClick={check} id={"choix"+key} className="propsIntrus">{choix}</div>
                </div>
                
            
              )
              )}  
            </div>
     
          </form>

        </>
    )
}