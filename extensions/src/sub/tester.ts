import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const SubTestResultEventName = 'sub-test-result'

export interface ISubStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ISubStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.sub)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const subTesterConfig: IStateTesterConfig = {
  resultEventName: SubTestResultEventName,
  tester
}
