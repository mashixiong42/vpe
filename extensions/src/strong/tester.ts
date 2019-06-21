import { IStateTesterConfig } from '@vpe/core'

const markActive = (state: any, type: any): boolean => {
  let { from, $from, to, empty } = state.selection
  if (empty) return type.isInSet(state.storedMarks || $from.marks())
  else return state.doc.rangeHasMark(from, to, type)
}

export const StrongTestResultEventName = 'strong-test-result'

export interface IStrongStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IStrongStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.strong)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const strongTesterConfig: IStateTesterConfig = {
  resultEventName: StrongTestResultEventName,
  tester
}
