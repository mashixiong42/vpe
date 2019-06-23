import { toggleMark } from 'prosemirror-commands'

export const toggleSup = (state: any, dispatch: any) => toggleMark(state.schema.marks.sup)(state, dispatch)
