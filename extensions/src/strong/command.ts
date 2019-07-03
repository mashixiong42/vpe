import { toggleMark } from 'prosemirror-commands'

// export const toggleStrong = (state: any, dispatch: any) => toggleMark(state.schema.marks.strong)(state, dispatch)
export const run = (state: any, dispatch: any) => toggleMark(state.schema.marks.strong)(state, dispatch)
