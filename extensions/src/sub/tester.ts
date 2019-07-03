import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const ResultEventName = 'sub-test-result'

export interface ITestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ITestResult => {
  const active = markActive(view.state, view.state.schema.marks.sub)
  return ({
    active,
    enable: true,
    select: true,
  })
}

export const config: IStateTesterConfig = {
  resultEventName: ResultEventName,
  tester
}
