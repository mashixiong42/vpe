import { IStateTesterConfig } from '@vpe/core'
import { blockActive } from '@vpe/core'

export const ResultEventName = 'blockQuote-test-result'

export interface ITestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ITestResult => {
  const active = blockActive(view.state, view.state.schema.nodes.blockquote)
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
