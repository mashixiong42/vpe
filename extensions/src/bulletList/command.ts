import { wrapInList } from 'prosemirror-schema-list'

export const setBlockBulletList = (state: any, dispatch: any) => wrapInList(state.schema.nodes.bullet_list)(state, dispatch)
