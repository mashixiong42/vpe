import { toggleMark } from 'prosemirror-commands'

export const toggleStrikethrough = (state: any, dispatch: any) => toggleMark(state.schema.marks.strikethrough)(state, dispatch)
