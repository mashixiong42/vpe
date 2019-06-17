import { Plugin, PluginKey } from 'prosemirror-state'

import { getEventBus } from './EventBusPlugin'
import { CoreEvents, CorePluginNames } from './CoreValues'
const viewUpdateEmitterPluginKey = new PluginKey(CorePluginNames.ViewUpdateEmitter)

const createViewUpdateEmitter = () =>
  new Plugin({
    key: viewUpdateEmitterPluginKey,
    view(view: any) {
      this.view = view
      const p = this
      const eventbus = getEventBus({ view })
      eventbus.on(CoreEvents.SendMeView, () => eventbus.emit(CoreEvents.ViewUpdate, {
        view,
        prevState: p.prevState,
      }))
      return {
        update: (view: any, prevState: any) => {
          p.view = view
          p.preState = prevState
          eventbus.emit(CoreEvents.ViewUpdate, {
            prevState,
            view,
          })
        }
      }
    },
  })

export { createViewUpdateEmitter, viewUpdateEmitterPluginKey }
