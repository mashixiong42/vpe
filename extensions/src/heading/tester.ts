import { IStateTesterConfig } from '@vpe/core'

import { blockActive, range } from '@vpe/core'

import { HeadingLevels } from './schema'
import { IHeadingAttr } from './command'

export const ResultEventName = 'heading-test-result'

export interface ITestResult {
  active: {
    active: boolean,
    level: HeadingLevels,
  }[],
  enable: true,
  select: true
}

const headings: IHeadingAttr[] = (<HeadingLevels[]>range(1, 6)).map((i: HeadingLevels) => ({
  level: i
}))

export const tester = (view: any, _: any): ITestResult => {

  const active = headings.map((level: IHeadingAttr) => ({
    ...level,
    active: blockActive(view.state, view.state.schema.nodes.heading, level)
  }))

  return ({
    active,
    enable: true,
    select: true,
  })
}

export const config: IStateTesterConfig = {
  resultEventName: ResultEventName,
  tester
}
