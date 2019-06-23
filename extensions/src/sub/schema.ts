const codeDOM = ['sub', 0]

export const marks = {
  sub: {
    parseDOM: [{ tag: 'sub' }],
    toDOM() { return codeDOM }
  },
}
