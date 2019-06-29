import { wrapInList } from 'prosemirror-schema-list'

export const setBlockOrderedList = (state: any, dispatch: any) => wrapInList(state.schema.nodes.ordered_list)(state, dispatch)
