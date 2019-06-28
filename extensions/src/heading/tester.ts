import { IStateTesterConfig } from '@vpe/core'

import { blockActive, range } from '@vpe/core'

import { HeadingLevels } from './schema'
import { IHeadingAttr } from './command'

export const HeadingTestResultEventName = 'heading-test-result'

export interface IHeadingStateTestResult {
  enable: true
  active: {
    level: HeadingLevels,
    active: boolean
  }[],
  select: true
}

const headings: IHeadingAttr[] = (<HeadingLevels[]>range(1, 6)).map((i: HeadingLevels) => ({
  level: i
}))

export const tester = (view: any, _: any): IHeadingStateTestResult => {

  const active = headings.map((level: IHeadingAttr) => ({
    ...level,
    active: blockActive(view.state, view.state.schema.nodes.heading, level)
  }))

  return ({
    enable: true,
    active,
    select: true,
  })
}

export const headingTesterConfig: IStateTesterConfig = {
  resultEventName: HeadingTestResultEventName,
  tester
}
