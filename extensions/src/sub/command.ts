import { toggleMark } from 'prosemirror-commands'

export const toggleSub = (state: any, dispatch: any) => toggleMark(state.schema.marks.sub)(state, dispatch)
