import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const CodeTestResultEventName = 'code-test-result'

export interface ICodeStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ICodeStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.code)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const codeTesterConfig: IStateTesterConfig = {
  resultEventName: CodeTestResultEventName,
  tester
}
