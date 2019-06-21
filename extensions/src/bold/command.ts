import { toggleMark } from 'prosemirror-commands'

export const toggleBold = (state: any, dispatch: any) => toggleMark(state.schema.marks.strong)(state, dispatch)
