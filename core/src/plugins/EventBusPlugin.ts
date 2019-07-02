import { Plugin, PluginKey } from 'prosemirror-state'

import mitt from 'mitt'
import { CorePluginNames, CoreEvents } from './CoreValues'
const eventBusPluginKey = new PluginKey(CorePluginNames.CreateEventBus)
const onFocusPluginKey = new PluginKey(CorePluginNames.OnFocus)

const createEventBusPlugin = (eventBus?: any) =>
  new Plugin({
    key: eventBusPluginKey,
    state: {
      apply: (_: any, value: any) => value,
      init: () => eventBus || new mitt()
    }
  })

const createOnFocusPlugin = () => new Plugin({
  key: onFocusPluginKey,
  props: {
    handleDOMEvents: {
      blur: (view: any, event: any) => {
        getEventBus({ view }).emit(CoreEvents.OnBlur, {
          event,
          view,
        })
        return false
      },
      focus: (view: any, event: any) => {
        getEventBus({ view }).emit(CoreEvents.OnFocus, {
          event,
          view,
        })
        return false
      },
    },
  },

})

const createEventBus = () => new mitt()

const getEventBus = ({ view, state }: { view?: any; state?: any }) =>
  state
    ? eventBusPluginKey.getState(state)
    : eventBusPluginKey.getState(view.state)

export { createEventBusPlugin, getEventBus, createEventBus, eventBusPluginKey, createOnFocusPlugin }
