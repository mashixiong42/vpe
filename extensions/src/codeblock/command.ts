import { setBlockType } from 'prosemirror-commands'

export const setBlockCode = (state: any, dispatch: any) => {
  console.log('setting block code...')
  setBlockType(state.schema.nodes.code_block)(state, dispatch)
}
