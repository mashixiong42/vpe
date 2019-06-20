import { Plugin, PluginKey } from 'prosemirror-state'

import { getEventBus } from './EventBusPlugin'
import { IStateTesterConfig, StateTester } from '../index.types'

export const getStateTesterPluginKey = (resultEventName: string) => new PluginKey('core-tester-' + resultEventName)

export const createStateTesterPlugin = (config: IStateTesterConfig) => {
  const {
    resultEventName,
    tester
  } = config
  const stateTesterPluginKey = getStateTesterPluginKey(resultEventName)
  return new Plugin({
    key: stateTesterPluginKey,
    view(view: any) {
      console.log('initiate state tester plugin...')
      this.viewP = view
      const p = this
      const eventbus = getEventBus({ view })
      // eventbus.emit(resultEventName, tester(view))
      return {
        update: (view: any, prevState: any) => {
          p.viewP = view
          p.prevState = prevState
          const result = Array.isArray(tester) ? (tester as Array<IStateTesterConfig>).map(({ resultEventName, tester: t }: IStateTesterConfig) => {
            if (Array.isArray(t))
              return {
                resultEventName,
                result: undefined
              }
            else
              return ({
                resultEventName,
                result: (t as StateTester)(view, prevState)
              })
          }) : (tester as StateTester)(view, prevState)
          eventbus.emit(resultEventName, {
            resultEventName,
            result
          })
        }
      }
    }
  })
}
