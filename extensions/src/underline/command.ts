import { toggleMark } from 'prosemirror-commands'

export const toggleUnderline = (state: any, dispatch: any) => toggleMark(state.schema.marks.underline)(state, dispatch)
