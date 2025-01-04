import { questions } from '../data/dataQCM'
import { Quest } from '../componants/qcm/Quest';
import { QcmFooter } from '../componants/qcm/QcmFooter';
import { useState } from "react";
import { Question } from '../componants/quest/Question'

export function QCM() {

  const [prop, setProp] = useState(false);

  return (
    <>
      <div id="qcm">
        {/* <Quest questions={questions} prop={prop} />
        <QcmFooter question={questions} route={"/quest/"} prop={prop} /> */}
        <Question />
      </div>
    </>
  )
}