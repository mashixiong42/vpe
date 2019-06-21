import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const EmTestResultEventName = 'em-test-result'

export interface IEmStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IEmStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.em)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const emTesterConfig: IStateTesterConfig = {
  resultEventName: EmTestResultEventName,
  tester
}
