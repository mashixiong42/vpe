const subDOM = ['sub', 0]

export const marks = {
  sub: {
    parseDOM: [{ tag: 'sub' }],
    toDOM() { return subDOM }
  },
}
