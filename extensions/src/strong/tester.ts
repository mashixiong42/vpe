import { IStateTesterConfig } from '@vpe/core'
import { markActive } from '@vpe/core'

export const StrongTestResultEventName = 'strong-test-result'

export interface IStrongStateTestResult {
  active: boolean
  enable: true
  select: true
}

export const tester = (view: any, _: any): IStrongStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.strong)
  return ({
    active,
    enable: true,
    select: true,
  })
}

export const strongTesterConfig: IStateTesterConfig = {
  resultEventName: StrongTestResultEventName,
  tester
}
