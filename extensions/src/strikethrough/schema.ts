const strikethroughDOM = ['s', 0]

export const strikethrough = {
  strikethrough: {
    parseDOM: [{ tag: 's' }],
    toDOM() { return strikethroughDOM }
  },
}
