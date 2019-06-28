import { IStateTesterConfig } from '@vpe/core'

import { blockActive } from '@vpe/core'

export const CodeBlockTestResultEventName = 'codeBlock-test-result'

export interface ICodeBlockStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ICodeBlockStateTestResult => {

  const active = blockActive(view.state, view.state.schema.nodes.code_block)

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const codeBlockTesterConfig: IStateTesterConfig = {
  resultEventName: CodeBlockTestResultEventName,
  tester
}
