import { wrapIn } from 'prosemirror-commands'

export const setBlockQuote = (state: any, dispatch: any) => wrapIn(state.schema.nodes.blockquote)(state, dispatch)
