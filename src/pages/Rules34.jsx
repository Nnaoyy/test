import { RuleFooter } from "../componants/rule/RuleFooter";
import { RuleQuest } from "../componants/rule/RuleQuest";
//import { questionsRule } from "../data/dataRule";

export function Rules34() {

  return (
    <>
      <RuleQuest />
      <RuleFooter question={questionsRule} />
    </>
  )
}