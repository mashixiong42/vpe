import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const StrikethroughTestResultEventName = 'strikethrough-test-result'

export interface IStrikethroughStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IStrikethroughStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.strikethrough)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const strikethroughTesterConfig: IStateTesterConfig = {
  resultEventName: StrikethroughTestResultEventName,
  tester
}
