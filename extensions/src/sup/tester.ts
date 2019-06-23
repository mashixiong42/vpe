import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const SupTestResultEventName = 'sup-test-result'

export interface ISupStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ISupStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.sup)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const supTesterConfig: IStateTesterConfig = {
  resultEventName: SupTestResultEventName,
  tester
}
