import { toggleMark } from 'prosemirror-commands'

export interface ILinkAttr {
  href?: string
  title?: string
}

export const run = (state: any, dispatch: any, attr?: any | undefined) => toggleMark(state.schema.marks.link, attr)(state, dispatch)
