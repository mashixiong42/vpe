import { IStateTesterConfig, CoreEvents } from '@vpe/core'

export const PositionsTestResultEventName = 'positions-test-result'

export interface ICoords {
  left: number
  top: number
  right: number
  bottom: number
}

export interface IPositionsStateTestResult {
  start: ICoords
  end: ICoords
}

export const tester = (view: any, _: any): IPositionsStateTestResult => {

  const { from, to } = view.state.selection

  return ({
    end: view.coordsAtPos(to),
    start: view.coordsAtPos(from),
  })
}

const onEvents = [CoreEvents.OnFocus]

export const positionsTesterConfig: IStateTesterConfig = {
  onEvents,
  resultEventName: PositionsTestResultEventName,
  tester,
}
