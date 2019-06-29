import { bulletList, listItem } from 'prosemirror-schema-list'

export const nodes = {
  bullet_list: {
    ...bulletList,
    content: 'list_item+',
    group: 'block'
  },
  list_item: {
    ...listItem,
    content: 'paragraph block*'
  },
}
