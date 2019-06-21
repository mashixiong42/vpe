import { toggleMark } from 'prosemirror-commands'

export const toggleCode = (state: any, dispatch: any) => toggleMark(state.schema.marks.code)(state, dispatch)
