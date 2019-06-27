const underlineDOM = ['u', 0]

export const marks = {
  underline: {
    parseDOM: [{ tag: 'u' }],
    toDOM() { return underlineDOM }
  },
}
