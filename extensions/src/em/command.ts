import { toggleMark } from 'prosemirror-commands'

export const toggleEm = (state: any, dispatch: any) => toggleMark(state.schema.marks.em)(state, dispatch)
