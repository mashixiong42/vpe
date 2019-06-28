import { IStateTesterConfig } from '@vpe/core'

import { canInsert } from '@vpe/core'

export const HrTestResultEventName = 'hr-test-result'

export interface IHrStateTestResult {
  enable: boolean
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IHrStateTestResult => {

  const enable = canInsert(view!.state.schema.nodes.horizontal_rule)(view!.state)

  return ({
    active: false,
    enable,
    select: true,
  })
}

export const hrTesterConfig: IStateTesterConfig = {
  resultEventName: HrTestResultEventName,
  tester
}
