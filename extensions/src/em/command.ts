import { toggleMark } from 'prosemirror-commands'

export const run = (state: any, dispatch: any) => toggleMark(state.schema.marks.em)(state, dispatch)
