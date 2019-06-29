import { orderedList, listItem } from 'prosemirror-schema-list'

export const nodes = {
  list_item: {
    ...listItem,
    content: 'paragraph block*'
  },
  ordered_list: {
    ...orderedList,
    content: 'list_item+',
    group: 'block'
  },
}
