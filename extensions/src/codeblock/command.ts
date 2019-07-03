import { setBlockType } from 'prosemirror-commands'

export const run = (state: any, dispatch: any) => {
  setBlockType(state.schema.nodes.code_block)(state, dispatch)
}
