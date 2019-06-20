import { IStateTesterConfig } from '@vpe/core'

const markActive = (state: any, type: any): boolean => {
  let { from, $from, to, empty } = state.selection
  if (empty) return type.isInSet(state.storedMarks || $from.marks())
  else return state.doc.rangeHasMark(from, to, type)
}

export const BoldTestResultEventName = 'bold-test-result'

export type IBoldStateTestResult = {
  enable: true
  active: boolean
  select: true
}

let testCount = 0
export const tester = (view: any, _: any): IBoldStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.strong)
  console.log(active, markActive, testCount++)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const boldTesterConfig: IStateTesterConfig = {
  resultEventName: BoldTestResultEventName,
  tester
}
