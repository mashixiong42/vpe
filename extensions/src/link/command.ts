import { toggleMark } from 'prosemirror-commands'

export interface ILinkAttr {
  href?: string
  title?: string
}

export const toggleLink = (state: any, dispatch: any, attr?: any | undefined) => toggleMark(state.schema.marks.link, attr)(state, dispatch)
