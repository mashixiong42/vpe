import { setBlockType } from 'prosemirror-commands'

export const setBlockParagraph = (state: any, dispatch: any) => setBlockType(state.schema.nodes.paragraph)(state, dispatch)
