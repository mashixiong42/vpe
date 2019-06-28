import { IStateTesterConfig } from '@vpe/core'

import { blockActive } from '@vpe/core'

export const BlockQuoteTestResultEventName = 'blockQuote-test-result'

export interface IBlockQuoteStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IBlockQuoteStateTestResult => {

  const active = blockActive(view.state, view.state.schema.nodes.blockquote)

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const blockQuoteTesterConfig: IStateTesterConfig = {
  resultEventName: BlockQuoteTestResultEventName,
  tester
}
