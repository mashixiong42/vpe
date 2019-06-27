import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const UnderlineTestResultEventName = 'underline-test-result'

export interface IUnderlineStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IUnderlineStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.underline)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const underlineTesterConfig: IStateTesterConfig = {
  resultEventName: UnderlineTestResultEventName,
  tester
}
