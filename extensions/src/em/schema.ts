const emDOM = ['em', 0]

export const marks = {
  em: {
    parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
    toDOM() { return emDOM }
  },
}
