const codeDOM = ['code', 0]

export const marks = {
  code: {
    parseDOM: [{ tag: 'code' }],
    toDOM() { return codeDOM }
  },
}
