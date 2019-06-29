import { IStateTesterConfig } from '@vpe/core'

import { blockActive } from '@vpe/core'

export const BulletListTestResultEventName = 'bulletList-test-result'

export interface IBulletListStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IBulletListStateTestResult => {

  const active = blockActive(view.state, view.state.schema.nodes.bullet_list)

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const bulletListTesterConfig: IStateTesterConfig = {
  resultEventName: BulletListTestResultEventName,
  tester
}
