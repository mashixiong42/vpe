import { Plugin, PluginKey } from 'prosemirror-state'

import mitt from 'mitt'

import { getEventBus } from './EventBusPlugin'
import { CoreEvents, CorePluginNames } from './CoreValues'
const viewUpdateEmitterPluginKey = new PluginKey(CorePluginNames.ViewUpdateEmitter)

const createViewUpdateEmitter = () =>
  new Plugin({
      key: viewUpdateEmitterPluginKey,
      view: (view: any) => {
          const eventbus = getEventBus({view})
          return {
              update: (view: any, prevState: any) =>
                  eventbus.emit(CoreEvents.ViewUpdate, {
                      prevState,
                      view,
                  })
          }
      },
  })

export { createViewUpdateEmitter, viewUpdateEmitterPluginKey }
