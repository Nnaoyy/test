import { questionsTest } from '../data/dataTest';
import { Quest } from '../componants/qcm/Quest';
import { QcmFooter } from '../componants/qcm/QcmFooter';

export function Test( ) {

    return (
      <>
      <Quest questions={questionsTest}/>
      <QcmFooter question={questionsTest} route={"/test/"}/>
      </>
    )
}