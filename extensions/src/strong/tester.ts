import { IStateTesterConfig } from '@vpe/core'
import { markActive } from '@vpe/core'

export const ResultEventName = 'strong-test-result'

export interface ITestResult {
  active: boolean
  enable: true
  select: true
}

export const tester = (view: any, _: any): ITestResult => {
  const active = markActive(view.state, view.state.schema.marks.strong)
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
