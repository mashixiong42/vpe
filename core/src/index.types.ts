import React, { ReactElement } from 'react'

/**
 * Custom CoreViweProps
 * function - it will called before CoreView's internal props called.
 * property - used for core view
 * Document @ http://prosemirror.net/docs/ref/#view.Props
 */

export interface IViewInternals {
  handleDOMEvents?: {
    [key: string]: (view: any, event: any) => boolean
  }
  handleKeyDown?: (view: any, event: any) => boolean
  handleKeyPres?: (view: any, event: any) => boolean
  handleTextInput?: (
    view: any,
    from: number,
    to: number,
    text: string
  ) => boolean
  handleClickOn?: (view: any, event: any) => boolean
  handleClick?: (view: any, event: any) => boolean
  handleDoubleClick?: (view: any, pos: number, event: any) => boolean
  handleTripleClick?: (view: any, pos: number, event: any) => boolean
  handlePaste?: (view: any, envent: any, slice: any) => boolean
  handleDrop?: (view: any, event: any, slice: any, moved: boolean) => boolean
  handleScrollToSelection?: (view: any) => boolean
  createSelectionBetween?: (view: any) => boolean
  domParser?: any
  transformPastedHTML?: (html: string) => string
  clipboardParser?: any
  transformPastedText?: (text: string) => string
  clipboardTextParser?: (text: string, context: any) => any
  transformPasted?: (slice: any) => any
  nodeViews?: {
    [key: string]: (node: any, view: any, gotPos: any, decorations: any) => any
  }
  clipboardSerializer?: (slice: any) => any
  clipboardTextSerializer?: any
  decorations?: (state: any) => any
  editable?: (state: any) => boolean
  attribultes?: any | ((state: any) => any)
  scrollThreshold?:
  | number
  | {
    top: number
    right: number
    bottom: number
    left: number
  }
  scrollMargin?:
  | number
  | {
    top: number
    right: number
    bottom: number
    left: number
  }
}

/**
 * State config to be passed to EditorState.create
 */

export interface IStateConfig {
  doc?: any
  storedMarks?: any
  schema?: any
  selection?: any
  plugins?: any[]
}

export const CoreViewWrapperClassName = 'qitor-coreview-wrapper'
export const CoreViewMountClassName = 'qitor-coreview-mount'
export interface IRendererProps {
  editor: React.ReactElement
  view: any
}

export interface ICoreViewProps {
  className?: string
  renderer?: (props: IRendererProps) => React.ReactElement
  coreViewProps?: ICoreViewProps
  coreStateConfig?: IStateConfig
  onChange?: (doc: any) => any
  doc?: any
  storedMarks?: any
  selection?: any
  schema?: any
  plugins?: any
  eventBus?: any
}

export type StateTester = (view: any, prevState?: any) => any

/**
 * The spec to be used to create stateTester plugin
 * The plugin will run the tester and emit the result through resultEventName event
 */

export interface IStateTesterConfig {
  resultEventName: string
  tester: any | [IStateTesterConfig]
}
