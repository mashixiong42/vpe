const codeDOM = ['sup', 0]

export const marks = {
  sup: {
    parseDOM: [{ tag: 'sup' }],
    toDOM() { return codeDOM }
  },
}
