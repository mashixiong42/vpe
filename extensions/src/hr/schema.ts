const hrDOM = ['hr']

export const nodes = {
  // :: NodeSpec A horizontal rule (`<hr>`).
  horizontal_rule: {
    group: 'block',
    parseDOM: [{ tag: 'hr' }],
    toDOM() { return hrDOM }
  },
}
