import { IStateTesterConfig } from '@vpe/core'

import { canInsert } from '@vpe/core'

export const ImageTestResultEventName = 'image-test-result'

export interface IImageStateTestResult {
  enable: boolean
  active: boolean
  select: true
}

export const tester = (view: any, _: any): IImageStateTestResult => {

  const enable = canInsert(view!.state.schema.nodes.image)(view!.state)

  return ({
    active: false,
    enable,
    select: true,
  })
}

export const imageTesterConfig: IStateTesterConfig = {
  resultEventName: ImageTestResultEventName,
  tester
}
