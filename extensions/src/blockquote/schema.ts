const blockquoteDOM = ['blockquote', 0]

export const nodes = {
  // :: NodeSpec A blockquote (`<blockquote>`) wrapping one or more blocks.
  blockquote: {
    content: 'block+',
    defining: true,
    group: 'block',
    parseDOM: [{ tag: 'blockquote' }],
    toDOM() { return blockquoteDOM }
  },
}
