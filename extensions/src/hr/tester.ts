import { IStateTesterConfig } from '@vpe/core'

import { canInsert } from '@vpe/core'

export const ResultEventName = 'hr-test-result'

export interface ITestResult {
  enable: boolean
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ITestResult => {

  const enable = canInsert(view!.state.schema.nodes.horizontal_rule)(view!.state)

  return ({
    active: false,
    enable,
    select: true,
  })
}

export const config: IStateTesterConfig = {
  resultEventName: ResultEventName,
  tester
}
