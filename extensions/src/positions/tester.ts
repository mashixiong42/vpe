import { IStateTesterConfig } from '@vpe/core'

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

const onDOMEvents = ['focus']

export const positionsTesterConfig: IStateTesterConfig = {
  onDOMEvents,
  resultEventName: PositionsTestResultEventName,
  tester,
}
