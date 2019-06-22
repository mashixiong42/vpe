const strikethroughDOM = ['s', 0]

export const marks = {
  strikethrough: {
    parseDOM: [{ tag: 's' }],
    toDOM() { return strikethroughDOM }
  },
}
