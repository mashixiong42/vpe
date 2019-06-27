import { IStateTesterConfig } from '@vpe/core'

import { markActive } from '@vpe/core'

export const LinkTestResultEventName = 'link-test-result'

export interface ILinkStateTestResult {
  enable: true
  active: boolean
  select: true
}

export const tester = (view: any, _: any): ILinkStateTestResult => {
  const active = markActive(view.state, view.state.schema.marks.link)
  return ({
    enable: true,
    active,
    select: true,
  })
}

export const linkTesterConfig: IStateTesterConfig = {
  resultEventName: LinkTestResultEventName,
  tester
}
