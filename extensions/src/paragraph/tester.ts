import { IStateTesterConfig } from '@vpe/core'

import { blockActive } from '@vpe/core'

export const ParagraphTestResultEventName = 'paragraph-test-result'

export interface IParagraphStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IParagraphStateTestResult => {

  const active = blockActive(view.state, view.state.schema.nodes.paragraph)

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const paragraphTesterConfig: IStateTesterConfig = {
  resultEventName: ParagraphTestResultEventName,
  tester
}
