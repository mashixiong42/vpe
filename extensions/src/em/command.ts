import { toggleMark } from 'prosemirror-commands'

export const toggleStrong = (state: any, dispatch: any) => toggleMark(state.schema.marks.em)(state, dispatch)
