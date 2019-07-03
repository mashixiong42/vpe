import { wrapIn } from 'prosemirror-commands'

export const run = (state: any, dispatch: any) => wrapIn(state.schema.nodes.blockquote)(state, dispatch)
