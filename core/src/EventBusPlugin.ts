import { Plugin, PluginKey } from 'prosemirror-state'

import mitt from 'mitt'
import { CorePluginNames } from './CoreValues'
const eventBusPluginKey = new PluginKey(CorePluginNames.CreateEventBus)

const createEventBusPlugin = (eventBus?: any) =>
  new Plugin({
    key: eventBusPluginKey,
    state: {
      apply: (_: any, value: any) => value,
      init: () => eventBus || new mitt()
    }
  })

const createEventBus = () => new mitt()

const getEventBus = ({ view, state }: { view?: any; state?: any }) =>
  state
    ? eventBusPluginKey.getState(state)
    : eventBusPluginKey.getState(view.state)

export { createEventBusPlugin, getEventBus, createEventBus, eventBusPluginKey }
