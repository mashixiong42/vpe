import React, { useEffect, useRef, useReducer } from 'react'

import classnames from 'classnames'

import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { schema as defaultSchema } from 'prosemirror-schema-basic'

import { CoreEvents, createEventBusPlugin, createViewUpdateEmitter, CorePluginKeys, ICoreViewProps, CoreViewMountClassName, CoreViewWrapperClassName } from '@vpe/core'

const CoreView = (props: ICoreViewProps) => {
  const {
    eventBus,
    className,
    onChange,
    renderer,
    doc,
    storedMarks,
    selection,
    schema,
    plugins
  } = props

  const editorRef = useRef(null)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
  const eventBusPlugin = createEventBusPlugin(eventBus)
  const viewUpdateEmitter = createViewUpdateEmitter()
  if (plugins) {
    for (const plugin of plugins) {
      if (
        plugin.spec.key &&
        CorePluginKeys.find((pluginKey: any) => pluginKey === plugin.spec.key)
      )
        throw new Error(
          `User provided plugin key conflict with reserved core plugin. ${plugin.spec.key.toString()}`
        )
    }
  }
  const view = new EditorView(null, {
    dispatchTransaction: (transaction: any) => {
      const { state, transactions } = view.state.applyTransaction(transaction)

      view.updateState(state)
      forceUpdate(ignored)

      if (transactions.some((tr: any) => tr.docChanged) && onChange) {
        onChange(state.doc)
      }
    },
    state: EditorState.create({
      doc,
      plugins: [...(plugins ? [...plugins] : []), eventBusPlugin, viewUpdateEmitter],
      schema: schema || defaultSchema,
      selection,
      storedMarks
    })
  })

  useEffect(() => {
    if (editorRef) editorRef.current.appendChild(view.dom)
    eventBus.emit(CoreEvents.SendMeView)
  }, [editorRef])

  const editor = (
    <div className={classnames(className, CoreViewWrapperClassName)} >
      <div
        className={classnames(className, CoreViewMountClassName)
        }
        ref={editorRef}
      />
    </div>
  )

  return renderer ? renderer({ editor, view }) : editor
}

export { CoreView }
