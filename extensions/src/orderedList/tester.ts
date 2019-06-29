import { IStateTesterConfig } from '@vpe/core'

import { blockActive } from '@vpe/core'

export const OrderedListTestResultEventName = 'bulletList-test-result'

export interface IOrderedListStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IOrderedListStateTestResult => {

  const active = blockActive(view.state, view.state.schema.nodes.ordered_list)

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const orderedListTesterConfig: IStateTesterConfig = {
  resultEventName: OrderedListTestResultEventName,
  tester
}
